/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { api } from '@/api/api'
import { useRouter } from 'next/navigation'
import { CookiesProvider, useCookies } from 'react-cookie'
import {
  ReactNode,
  createContext,
  useContext,
  useState,
  useEffect,
} from 'react'
import { toast } from 'react-toastify'

interface SignInCredentials {
  email: string
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
    'token_footi_ai',
    'refresh_footi_ai',
  ])

  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    !!cookies.token_footi_ai,
  )

  useEffect(() => {
    const handleCookieChange = () => {
      if (!cookies.token_footi_ai) {
        setIsAuthenticated(false)
        api.defaults.headers.Authorization = ''
        push('/signin')
      } else {
        setIsAuthenticated(true)
        api.defaults.headers.Authorization = `Bearer ${cookies.token_footi_ai}`
      }
    }
    handleCookieChange()

    const interval = setInterval(handleCookieChange, 3000)

    return () => clearInterval(interval)
  }, [cookies, push])

  async function handleSignIn({ email, password }: SignInCredentials) {
    setIsLoading(true)
    try {
      const response = await api.post('/api/token/', {
        email,
        password,
      })
      const accessToken = response.data.access
      const refreshToken = response.data.refresh
      setCookie('token_footi_ai', accessToken, { maxAge: 60 * 60 * 8 })
      setCookie('refresh_footi_ai', refreshToken, {
        maxAge: 60 * 60 * 24 * 7,
      }) // 7 days

      api.defaults.headers.Authorization = `Bearer ${accessToken}`
      setIsAuthenticated(true)
      push('/')
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
    removeCookie('token_footi_ai')
    removeCookie('refresh_footi_ai')
    api.defaults.headers.Authorization = ''
    setIsAuthenticated(false)
    push('/')
  }

  async function refreshToken() {
    try {
      const refreshToken = cookies.refresh_footi_ai
      if (!refreshToken) {
        throw new Error('No refresh token available')
      }

      const response = await api.post('/api/token/refresh/', {
        refresh: refreshToken,
      })
      const newAccessToken = response.data.access
      setCookie('token_footi_ai', newAccessToken, { maxAge: 60 * 60 * 8 })
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
