import axios from 'axios'
import { Cookies } from 'react-cookie'

const cookies = new Cookies()

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
})

const getToken = () => cookies.get('kc_token')

api.interceptors.request.use(
  (config) => {
    const token = getToken()
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error),
)

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true

      try {
        const refreshToken = cookies.get('refresh_kc')
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/token/refresh/`,
          {
            refresh: refreshToken,
          },
        )

        const newToken = response.data.access
        cookies.set('kc_token', newToken)

        originalRequest.headers.Authorization = `Bearer ${newToken}`
        return api(originalRequest)
      } catch (refreshError) {
        cookies.remove('kc_token')
        cookies.remove('refresh_kc')
        window.location.href = '/admin'
        return Promise.reject(refreshError)
      }
    }

    return Promise.reject(error)
  },
)
