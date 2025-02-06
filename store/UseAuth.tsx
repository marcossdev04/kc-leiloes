/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { api } from '@/api/api'
import { useRouter } from 'next/navigation'
import { CookiesProvider, useCookies } from 'react-cookie'
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'
import { toast } from 'react-toastify'

interface SignInCredentials {
  username: string
  password: string
}

interface AuthContextProps {
  handleSignIn: (credentials: SignInCredentials) => void
  handleSignOut: () => void
  isLoading: boolean
  errorSignIn: string | null
  handleClearErrorSignIn: () => void
  isAuthenticated: boolean
  refreshToken: () => Promise<void>
}

export const AuthContext = createContext({} as AuthContextProps)

interface AuthContextProviderProps {
  children: ReactNode
}

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const { push } = useRouter()
  const [cookies, setCookie, removeCookie] = useCookies([
    'kc_token',
    'kc_refresh',
  ])

  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    !!cookies.kc_token,
  )

  useEffect(() => {
    const handleCookieChange = () => {
      if (!cookies.kc_token) {
        setIsAuthenticated(false)
        api.defaults.headers.Authorization = ''
      } else {
        setIsAuthenticated(true)
        api.defaults.headers.Authorization = `Bearer ${cookies.kc_token}`
      }
    }
    handleCookieChange()

    const interval = setInterval(handleCookieChange, 3000)

    return () => clearInterval(interval)
  }, [cookies, push])

  async function handleSignIn({ username, password }: SignInCredentials) {
    setIsLoading(true)
    try {
      const response = await api.post('/api/token/', {
        username,
        password,
      })
      console.log(response.data)
      const accessToken = response.data.access
      const refreshToken = response.data.refresh
      setCookie('kc_token', accessToken, { maxAge: 60 * 60 })
      setCookie('kc_refresh', refreshToken, {
        maxAge: 60 * 60 * 24,
      })

      api.defaults.headers.Authorization = `Bearer ${accessToken}`
      setIsAuthenticated(true)
      push('/admin/home')
    } catch (err: any) {
      console.log(err)
      toast.error('Ocorreu um erro inesperado com a API', {
        position: 'bottom-right',
        theme: 'dark',
        closeOnClick: true,
      })
    } finally {
      setIsLoading(false)
    }
  }

  async function handleSignOut() {
    removeCookie('kc_token')
    removeCookie('kc_refresh')
    api.defaults.headers.Authorization = ''
    setIsAuthenticated(false)
    push('/admin')
  }

  async function refreshToken() {
    try {
      const refreshToken = cookies.kc_refresh
      if (!refreshToken) {
        throw new Error('No refresh token available')
      }

      const response = await api.post('/auth/refresh/', {
        refresh: refreshToken,
      })
      const newAccessToken = response.data.access
      setCookie('kc_token', newAccessToken, { maxAge: 60 * 60 * 8 })
      api.defaults.headers.Authorization = `Bearer ${newAccessToken}`
      setIsAuthenticated(true)
    } catch (err: any) {
      console.error('Failed to refresh token:', err)
      handleSignOut()
    }
  }

  function handleClearErrorSignIn() {
    setError('')
  }

  return (
    <AuthContext.Provider
      value={{
        handleSignIn,
        handleSignOut,
        isLoading,
        errorSignIn: error ? String(error) : null,
        handleClearErrorSignIn,
        isAuthenticated,
        refreshToken,
      }}
    >
      <CookiesProvider>{children}</CookiesProvider>
    </AuthContext.Provider>
  )
}

export function useAuth(): AuthContextProps {
  const context = useContext(AuthContext)

  return context
}
