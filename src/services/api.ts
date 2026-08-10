import type { Restaurant } from '../types'

const API_URL = 'https://api-ebac.vercel.app/api/efood/restaurantes'

export async function getRestaurants(signal?: AbortSignal): Promise<Restaurant[]> {
  const response = await fetch(API_URL, { signal })

  if (!response.ok) {
    throw new Error(`Não foi possível carregar os restaurantes. Código ${response.status}.`)
  }

  return response.json() as Promise<Restaurant[]>
}
