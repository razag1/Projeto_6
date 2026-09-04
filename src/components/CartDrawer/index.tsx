import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { closeCart, removeFromCart } from '../../store/reducers/cart'
import { formatCurrency } from '../../utils/formatCurrency'
import {
  Cart,
  CartCard,
  CartContent,
  CartImage,
  CartInfo,
  CartTitle,
  ContinueButton,
  EmptyMessage,
  Overlay,
  Price,
  RemoveButton,
  Total,
  TotalLabel,
  TotalValue
} from './styles'

export function CartDrawer() {
  const dispatch = useAppDispatch()
  const { items, isOpen } = useAppSelector((state) => state.cart)

  const total = items.reduce((sum, item) => sum + item.preco, 0)

  useEffect(() => {
    if (!isOpen) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        dispatch(closeCart())
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [dispatch, isOpen])

  if (!isOpen) return null

  return (
    <Overlay
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          dispatch(closeCart())
        }
      }}
    >
      <Cart role="dialog" aria-modal="true" aria-label="Carrinho de compras">
        <CartContent>
          {items.length === 0 ? (
            <EmptyMessage>O carrinho está vazio.</EmptyMessage>
          ) : (
            items.map((item) => (
              <CartCard key={item.cartItemId}>
                <CartImage src={item.foto} alt={item.nome} />

                <CartInfo>
                  <CartTitle>{item.nome}</CartTitle>
                  <Price>{formatCurrency(item.preco)}</Price>
                </CartInfo>

                <RemoveButton
                  type="button"
                  onClick={() => dispatch(removeFromCart(item.cartItemId))}
                  aria-label={`Remover ${item.nome} do carrinho`}
                >
                  <i className="bi bi-trash3" aria-hidden="true" />
                </RemoveButton>
              </CartCard>
            ))
          )}
        </CartContent>

        <Total>
          <TotalLabel>Valor total</TotalLabel>
          <TotalValue>{formatCurrency(total)}</TotalValue>
        </Total>

        <ContinueButton type="button" disabled={items.length === 0}>
          Continuar com a entrega
        </ContinueButton>
      </Cart>
    </Overlay>
  )
}
