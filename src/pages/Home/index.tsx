import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { RestaurantCard } from '../../components/RestaurantCard'
import { restaurants } from '../../data/restaurants'
import { Main, RestaurantGrid } from './styles'

export function HomePage() {
  return (
    <>
      <Header variant="home" />
      <Main>
        <RestaurantGrid>
          {restaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </RestaurantGrid>
      </Main>
      <Footer />
    </>
  )
}
