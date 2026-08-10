import type { Dish } from '../../types'
import { AddButton, Card, Description, Image, Title } from './styles'

type ProductCardProps = {
  dish: Dish
  onOpen: (dish: Dish) => void
}

export function ProductCard({ dish, onOpen }: ProductCardProps) {
  return (
    <Card>
      <Image src={dish.foto} alt={dish.nome} />
      <Title>{dish.nome}</Title>
      <Description>{dish.descricao}</Description>
      <AddButton type="button" onClick={() => onOpen(dish)}>
        Adicionar ao carrinho
      </AddButton>
    </Card>
  )
}
