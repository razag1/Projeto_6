import type { Restaurant } from '../../types'
import { Card, Content, Cover, Description, MoreLink, Rating, Tag, Tags, Title, TitleRow } from './styles'

type RestaurantCardProps = {
  restaurant: Restaurant
}

export function RestaurantCard({ restaurant }: RestaurantCardProps) {
  return (
    <Card>
      <Cover src={restaurant.capa} alt={`Prato do restaurante ${restaurant.titulo}`} />

      <Tags>
        {restaurant.destacado && <Tag>Destaque da semana</Tag>}
        <Tag>{restaurant.tipo}</Tag>
      </Tags>

      <Content>
        <TitleRow>
          <Title>{restaurant.titulo}</Title>
          <Rating aria-label={`Nota ${restaurant.avaliacao}`}>
            {restaurant.avaliacao.toFixed(1)}
          </Rating>
        </TitleRow>

        <Description>{restaurant.descricao}</Description>
        <MoreLink to={`/restaurante/${restaurant.id}`}>Saiba mais</MoreLink>
      </Content>
    </Card>
  )
}
