import { useParams } from 'react-router-dom'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { ProductCard } from '../../components/ProductCard'
import { restaurants } from '../../data/restaurants'
import { NotFoundPage } from '../NotFound'
import { Category, Hero, HeroContent, Main, ProductGrid, RestaurantName } from './styles'

export function RestaurantPage() {
  const { id } = useParams<{ id: string }>()
  const restaurant = restaurants.find((item) => item.id === Number(id))

  if (!restaurant) return <NotFoundPage />

  return (
    <>
      <Header variant="profile" />
      <Hero $image={restaurant.heroImage}>
        <HeroContent>
          <Category>{restaurant.category}</Category>
          <RestaurantName>{restaurant.name}</RestaurantName>
        </HeroContent>
      </Hero>
      <Main>
        <ProductGrid>
          {restaurant.menu.map((dish) => (
            <ProductCard key={dish.id} dish={dish} />
          ))}
        </ProductGrid>
      </Main>
      <Footer />
    </>
  )
}
