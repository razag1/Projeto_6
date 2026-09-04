import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { openCart } from '../../store/reducers/cart'
import { CartStatus, HeaderContent, HeaderWrapper, HomeTitle, LogoLink, NavLink } from './styles'

type HeaderProps = {
  variant?: 'home' | 'profile'
}

export function Header({ variant = 'home' }: HeaderProps) {
  const isHome = variant === 'home'
  const dispatch = useAppDispatch()
  const itemCount = useAppSelector((state) => state.cart.items.length)

  return (
    <HeaderWrapper>
      <HeaderContent $home={isHome}>
        {isHome ? (
          <>
            <LogoLink to="/" aria-label="Página inicial do efood">
              efood
            </LogoLink>
            <HomeTitle>Viva experiências gastronômicas no conforto da sua casa</HomeTitle>
          </>
        ) : (
          <>
            <NavLink to="/">Restaurantes</NavLink>
            <LogoLink to="/" aria-label="Página inicial do efood">
              efood
            </LogoLink>
            <CartStatus type="button" onClick={() => dispatch(openCart())}>
              {itemCount} produto(s) no carrinho
            </CartStatus>
          </>
        )}
      </HeaderContent>
    </HeaderWrapper>
  )
}
