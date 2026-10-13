import { defineStore } from 'pinia'

type User = {
  id: number
  name: string
  email: string
}

type AuthRequestOptions = {
  method?: 'GET' | 'POST'
  body?: Record<string, string | boolean>
}

export const useMyAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(null)
  const initialized = ref(false)
  const isLoggedIn = computed(() => user.value !== null)

  async function apiFetch<T>(path: string, options: AuthRequestOptions = {}) {
    const config = useRuntimeConfig()
    let headers: Headers | undefined
    if (import.meta.server) {
      headers = new Headers()
      const cookie = useRequestHeader('cookie')
      if (cookie) {
        headers.set('cookie', cookie)
      }
      headers.set('origin', String(config.public.clientOrigin))
    }

    return $fetch<T>(`${config.public.apiBase}${path}`, {
      ...options,
      credentials: 'include',
      headers,
    })
  }

  async function fetchCurrentUser() {
    try {
      user.value = await apiFetch<User>('/auth/me')
    } catch (error) {
      if (!isUnauthorizedError(error)) {
        throw error
      }

      user.value = null
    }

    initialized.value = true
  }

  async function login(email: string, password: string, rememberMe: boolean) {
    user.value = await apiFetch<User>('/auth/login', {
      method: 'POST',
      body: { email, password, rememberMe },
    })
    initialized.value = true
  }

  async function register(name: string, email: string, password: string) {
    user.value = await apiFetch<User>('/auth/register', {
      method: 'POST',
      body: { name, email, password },
    })
    initialized.value = true
  }

  async function logout() {
    await apiFetch<{ message: string }>('/auth/logout', { method: 'POST' })
    user.value = null
    initialized.value = true
  }

  return {
    user,
    initialized,
    isLoggedIn,
    fetchCurrentUser,
    login,
    register,
    logout,
  }
})

function isUnauthorizedError(error: unknown): boolean {
  return (
    typeof error === 'object' &&
    error !== null &&
    'statusCode' in error &&
    error.statusCode === 401
  )
}
