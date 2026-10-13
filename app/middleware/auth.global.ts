export default defineNuxtRouteMiddleware(async (to) => {
  const store = useMyAuthStore()

  if (!store.initialized) {
    await store.fetchCurrentUser()
  }

  const isPublicRoute = ['/', '/login', '/register'].includes(to.path)

  if (store.isLoggedIn && (to.path === '/login' || to.path === '/register')) {
    return navigateTo('/features', { replace: true })
  }

  if (!store.isLoggedIn && !isPublicRoute) {
    return navigateTo('/login', { replace: true })
  }
})
