import type { Restaurant } from '../../types'
import { Card, Content, Cover, Description, MoreLink, Rating, Tag, Tags, Title, TitleRow } from './styles'

type RestaurantCardProps = {
  restaurant: Restaurant
}

export function RestaurantCard({ restaurant }: RestaurantCardProps) {
  return (
    <Card>
      <Cover src={restaurant.image} alt={`Prato do restaurante ${restaurant.name}`} />
      <Tags>
        {restaurant.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
      </Tags>
      <Content>
        <TitleRow>
          <Title>{restaurant.name}</Title>
          <Rating aria-label={`Nota ${restaurant.rating}`}>{restaurant.rating.toFixed(1)}</Rating>
        </TitleRow>
        <Description>{restaurant.description}</Description>
        <MoreLink to={`/restaurante/${restaurant.id}`}>Saiba mais</MoreLink>
      </Content>
    </Card>
  )
}
