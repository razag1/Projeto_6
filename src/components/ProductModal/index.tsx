import { useEffect } from 'react'
import type { Dish } from '../../types'
import { formatCurrency } from '../../utils/formatCurrency'
import {
  ActionLabel,
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

  return (
    <Overlay
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose()
        }
      }}
    >
      <Dialog
        role="dialog"
        aria-modal="true"
        aria-labelledby="product-modal-title"
      >
        <CloseButton type="button" onClick={onClose} aria-label="Fechar detalhes do produto">
          <i className="bi bi-x-lg" aria-hidden="true" />
        </CloseButton>

        <Content>
          <DishImage src={dish.foto} alt={dish.nome} />

          <DishInfo>
            <Title id="product-modal-title">{dish.nome}</Title>
            <Description>{dish.descricao}</Description>
            <Portion>Serve: {dish.porcao}</Portion>
            <ActionLabel>
              Adicionar ao carrinho - {formatCurrency(dish.preco)}
            </ActionLabel>
          </DishInfo>
        </Content>
      </Dialog>
    </Overlay>
  )
}
