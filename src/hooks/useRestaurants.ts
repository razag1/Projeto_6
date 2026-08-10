import { useEffect, useState } from 'react'
import { getRestaurants } from '../services/api'
import type { Restaurant } from '../types'

export function useRestaurants() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [requestVersion, setRequestVersion] = useState(0)

  useEffect(() => {
    const controller = new AbortController()

    async function loadRestaurants() {
      try {
        setIsLoading(true)
        setError(null)

        const data = await getRestaurants(controller.signal)
        setRestaurants(data)
      } catch (requestError) {
        if (requestError instanceof DOMException && requestError.name === 'AbortError') {
          return
        }

        setError(
          requestError instanceof Error
            ? requestError.message
            : 'Ocorreu um erro inesperado ao carregar os restaurantes.'
        )
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false)
        }
      }
    }

    loadRestaurants()

    return () => controller.abort()
  }, [requestVersion])

  function reload() {
    setRequestVersion((currentVersion) => currentVersion + 1)
  }

  return { restaurants, isLoading, error, reload }
}
