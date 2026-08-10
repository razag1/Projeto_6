import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { RestaurantCard } from '../../components/RestaurantCard'
import { useRestaurants } from '../../hooks/useRestaurants'
import { Main, RestaurantGrid, RetryButton, StatusMessage } from './styles'

export function HomePage() {
  const { restaurants, isLoading, error, reload } = useRestaurants()

  return (
    <>
      <Header variant="home" />

      <Main>
        {isLoading && <StatusMessage>Carregando restaurantes...</StatusMessage>}

        {error && (
          <StatusMessage role="alert">
            {error}
            <RetryButton type="button" onClick={reload}>
              Tentar novamente
            </RetryButton>
          </StatusMessage>
        )}

        {!isLoading && !error && (
          <RestaurantGrid>
            {restaurants.map((restaurant) => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
          </RestaurantGrid>
        )}
      </Main>

      <Footer />
    </>
  )
}
