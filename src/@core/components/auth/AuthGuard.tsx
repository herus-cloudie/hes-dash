// ** React Imports
import { ReactNode, ReactElement, useEffect, useState } from 'react'

// ** Next Import
import { useRouter } from 'next/router'

// ** Hooks Import
import { useSession } from 'next-auth/react'
import Loader from '../spinner/loader'

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
        router.replace('/dashboards/main')
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

  return !state ? <>{children}</> : <Loader />
}

export default AuthGuard
