import styled from 'styled-components'

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1100;
  background: ${({ theme }) => theme.colors.overlay};
`

export const Cart = styled.aside`
  width: min(100%, 360px);
  min-height: 100%;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  padding: 32px 8px 8px;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.cream};
  box-shadow: -10px 0 30px rgba(0, 0, 0, 0.25);
`

export const CartContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const CartCard = styled.article`
  position: relative;
  display: grid;
  grid-template-columns: 80px 1fr;
  gap: 8px;
  min-height: 100px;
  padding: 8px;
  background: ${({ theme }) => theme.colors.cream};
  color: ${({ theme }) => theme.colors.primary};
`

export const CartImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
`

export const CartInfo = styled.div`
  min-width: 0;
  padding-right: 24px;
`

export const CartTitle = styled.h3`
  margin-bottom: 16px;
  font-size: 18px;
  line-height: 1.2;
`

export const Price = styled.p`
  font-size: 14px;
`

export const RemoveButton = styled.button`
  position: absolute;
  right: 8px;
  bottom: 8px;
  border: 0;
  background: transparent;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 18px;
`

export const EmptyMessage = styled.p`
  padding: 24px 16px;
  background: ${({ theme }) => theme.colors.cream};
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  font-weight: 700;
`

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  margin-top: auto;
  padding: 32px 0 16px;
  font-weight: 700;
`

export const TotalLabel = styled.span``

export const TotalValue = styled.span``

export const ContinueButton = styled.button`
  width: 100%;
  border: 0;
  padding: 8px 12px;
  background: ${({ theme }) => theme.colors.cream};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.65;
  }
`
