export function getApiErrorMessage(error: unknown): string {
  if (typeof error !== 'object' || error === null || !('data' in error)) {
    return 'Une erreur est survenue. Veuillez réessayer.'
  }

  const data = error.data
  if (typeof data !== 'object' || data === null || !('message' in data)) {
    return 'Une erreur est survenue. Veuillez réessayer.'
  }

  const message = data.message
  if (typeof message === 'string') {
    return message
  }

  if (Array.isArray(message) && message.every((item) => typeof item === 'string')) {
    return message.join(', ')
  }

  return 'Une erreur est survenue. Veuillez réessayer.'
}
