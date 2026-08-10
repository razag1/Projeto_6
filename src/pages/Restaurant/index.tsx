import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { ProductCard } from '../../components/ProductCard'
import { ProductModal } from '../../components/ProductModal'
import { useRestaurants } from '../../hooks/useRestaurants'
import type { Dish } from '../../types'
import { NotFoundPage } from '../NotFound'
import {
  Category,
  Hero,
  HeroContent,
  Main,
  ProductGrid,
  RestaurantName,
  RetryButton,
  StatusMessage
} from './styles'

export function RestaurantPage() {
  const { id } = useParams<{ id: string }>()
  const { restaurants, isLoading, error, reload } = useRestaurants()
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null)

  if (isLoading) {
    return (
      <>
        <Header variant="profile" />
        <StatusMessage>Carregando restaurante...</StatusMessage>
        <Footer />
      </>
    )
  }

  if (error) {
    return (
      <>
        <Header variant="profile" />
        <StatusMessage role="alert">
          {error}
          <RetryButton type="button" onClick={reload}>
            Tentar novamente
          </RetryButton>
        </StatusMessage>
        <Footer />
      </>
    )
  }

  const restaurant = restaurants.find((item) => item.id === Number(id))

  if (!restaurant) return <NotFoundPage />

  return (
    <>
      <Header variant="profile" />

      <Hero $image={restaurant.capa}>
        <HeroContent>
          <Category>{restaurant.tipo}</Category>
          <RestaurantName>{restaurant.titulo}</RestaurantName>
        </HeroContent>
      </Hero>

      <Main>
        <ProductGrid>
          {restaurant.cardapio.map((dish) => (
            <ProductCard key={dish.id} dish={dish} onOpen={setSelectedDish} />
          ))}
        </ProductGrid>
      </Main>

      <Footer />

      <ProductModal dish={selectedDish} onClose={() => setSelectedDish(null)} />
    </>
  )
}
