'use client'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Barlow } from 'next/font/google'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { QueryClientProvider } from 'react-query'
import { queryClient } from '@/api/queryClient'
import { AuthContextProvider, useAuth } from '@/store/UseAuth'
import { usePathname, useRouter } from 'next/navigation'
import { ReactNode, useEffect } from 'react'
import mixpanel from 'mixpanel-browser'

const barlow = Barlow({
  weight: ['400', '200', '500', '600', '700', '800'],
  subsets: ['latin'],
})
interface AuthWrapperProps {
  children: ReactNode
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  mixpanel.init(process.env.NEXT_PUBLIC_MIXPIXEL_ID || '', {
    debug: true,
    track_pageview: true,
    persistence: 'localStorage',
  })
  function AuthWrapper({ children }: AuthWrapperProps) {
    const router = useRouter()
    const pathname = usePathname()
    const isAuthPage =
      pathname === '/admin' || pathname === '/' || pathname?.includes('/blog')
    const { isAuthenticated } = useAuth()

    useEffect(() => {
      if (isAuthenticated === false && !isAuthPage) {
        router.push('/admin')
      }
    }, [router, isAuthPage, isAuthenticated])

    return <>{children}</>
  }
  return (
    <html lang="en">
      <body className={`${barlow.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <QueryClientProvider client={queryClient}>
            <AuthContextProvider>
              <AuthWrapper>
                {children}
                <ToastContainer />
              </AuthWrapper>
            </AuthContextProvider>
          </QueryClientProvider>
          <ToastContainer />
        </ThemeProvider>
      </body>
    </html>
  )
}
