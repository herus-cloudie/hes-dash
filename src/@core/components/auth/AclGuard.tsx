// ** React Imports
// ** Context Imports
import { AbilityContext } from 'src/layouts/components/acl/Can'

// ** Config Import
import { buildAbilityFor } from 'src/configs/acl'

// ** Component Import

import BlankLayout from 'src/@core/layouts/BlankLayout'



// interface AclGuardProps {
//   children: ReactNode
//   authGuard?: boolean
//   guestGuard?: boolean
//   aclAbilities: ACLObj
// }

const AclGuard = (props: { children: any }) => {
  // ** Props
  // const { aclAbilities, children, guestGuard = false, authGuard = true } = props
  const {children} = props;

  // // ** Hooks
  // const auth = useAuth()
  // const router = useRouter()

  // // ** Vars
  // let ability;

  // useEffect(() => {
  //   if (auth.user && auth.user.role && !guestGuard && router.route === '/') {
  //     const homeRoute = getHomeRoute(auth.user.role)
  //     router.replace(homeRoute)
  //   }
  // }, [auth.user, guestGuard, router])

  // User is logged in, build ability for the user based on his role
  // if (auth.user && !ability) {
  //   ability = buildAbilityFor(auth.user.role, aclAbilities.subject)
  //   if (router.route === '/') {
  //     return <Spinner />
  //   }
  // }

  // If guest guard or no guard is true or any error page
  // if (guestGuard || router.route === '/404' || router.route === '/500' || !authGuard) {
  //   // If user is logged in and his ability is built
  //   if (auth.user && ability) {
  //     return <AbilityContext.Provider value={ability}>{children}</AbilityContext.Provider>
  //   } else {
  //     // If user is not logged in (render pages like login, register etc..)
  //     return <>{children}</>
  //   }
  // }

  // Check the access of current user and render pages
  // if (ability && auth.user && ability.can(aclAbilities.action, aclAbilities.subject)) {
  //   if (router.route === '/') {
  //     return <Spinner />
  //   }

  //   return <AbilityContext.Provider value={ability}>{children}</AbilityContext.Provider>
  // }

  // Render Not Authorized component if the current user has limited access
  return (
    <BlankLayout>
      <AbilityContext.Provider value={buildAbilityFor('admin', 'all') as any}>{children}</AbilityContext.Provider>
    </BlankLayout>
  )
}

export default AclGuard
