import type { Dish } from '../../types'
import { AddButton, Card, Description, Image, Title } from './styles'

type ProductCardProps = {
  dish: Dish
}

export function ProductCard({ dish }: ProductCardProps) {
  return (
    <Card>
      <Image src={dish.image} alt={dish.name} />
      <Title>{dish.name}</Title>
      <Description>{dish.description}</Description>
      <AddButton>Adicionar ao carrinho</AddButton>
    </Card>
  )
}
