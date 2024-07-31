// ** React Imports
import { ReactNode, ReactElement, useEffect, useState } from 'react'

// ** Next Import
import { useRouter } from 'next/router'

// ** Hooks Import
import NotAuthorized from 'src/pages/401'
import { useSession } from 'next-auth/react'

interface AuthGuardProps {
  children: ReactNode
  fallback: ReactElement | null
}

const AuthGuard = (props: AuthGuardProps) => {
  const { children, fallback } = props

  const [state, setState] = useState(false)

  const router = useRouter()
  const { status } = useSession()

  useEffect(() => {
    if (!router.isReady) return

    const isProtectedRoute = !['/register', '/login', '/forgot-password'].includes(router.pathname)

    if (status === 'loading') return

    if (status === 'authenticated') {
      setState(false)
      if (!isProtectedRoute) {
        router.replace('/dashboards/analytics')
      }
    } else {
      if (isProtectedRoute) {
        setState(true)
        router.replace({
          pathname: '/login',
          query: { returnUrl: router.asPath }
        })
      } else {
        setState(false)
      }
    }
  }, [router.isReady, status, router])

  if (status === 'loading') {
    return fallback
  }

  return state ? <NotAuthorized /> : <>{children}</>
}

export default AuthGuard
