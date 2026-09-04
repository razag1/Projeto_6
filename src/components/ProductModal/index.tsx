import { useEffect } from 'react'
import { useAppDispatch } from '../../store/hooks'
import { addToCart, openCart } from '../../store/reducers/cart'
import type { Dish } from '../../types'
import { formatCurrency } from '../../utils/formatCurrency'
import {
  ActionButton,
  CloseButton,
  Content,
  Description,
  Dialog,
  DishImage,
  DishInfo,
  Overlay,
  Portion,
  Title
} from './styles'

type ProductModalProps = {
  dish: Dish | null
  onClose: () => void
}

export function ProductModal({ dish, onClose }: ProductModalProps) {
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (!dish) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [dish, onClose])

  if (!dish) return null

  const currentDish = dish

  function handleAddToCart() {
    dispatch(addToCart(currentDish))
    onClose()
    dispatch(openCart())
  }

  return (
    <Overlay
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose()
        }
      }}
    >
      <Dialog role="dialog" aria-modal="true" aria-labelledby="product-modal-title">
        <CloseButton type="button" onClick={onClose} aria-label="Fechar detalhes do produto">
          <i className="bi bi-x-lg" aria-hidden="true" />
        </CloseButton>

        <Content>
          <DishImage src={currentDish.foto} alt={currentDish.nome} />

          <DishInfo>
            <Title id="product-modal-title">{currentDish.nome}</Title>
            <Description>{currentDish.descricao}</Description>
            <Portion>Serve: {currentDish.porcao}</Portion>
            <ActionButton type="button" onClick={handleAddToCart}>
              Adicionar ao carrinho - {formatCurrency(currentDish.preco)}
            </ActionButton>
          </DishInfo>
        </Content>
      </Dialog>
    </Overlay>
  )
}
