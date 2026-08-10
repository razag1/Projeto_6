import styled from 'styled-components'

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: grid;
  place-items: center;
  padding: 24px;
  background: ${({ theme }) => theme.colors.overlay};
`

export const Dialog = styled.section`
  position: relative;
  width: min(100%, 960px);
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 10px 35px rgba(0, 0, 0, 0.32);
`

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 1;
  border: 0;
  background: transparent;
  color: ${({ theme }) => theme.colors.white};
  font-size: 20px;
  line-height: 1;
`

export const Content = styled.div`
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 24px;
  padding: 32px;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
    padding: 48px 20px 24px;
  }
`

export const DishImage = styled.img`
  width: 100%;
  height: 280px;
  object-fit: cover;

  @media (max-width: 720px) {
    height: min(54vw, 300px);
  }
`

export const DishInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const Title = styled.h2`
  margin-bottom: 16px;
  font-size: 22px;
`

export const Description = styled.p`
  margin-bottom: 24px;
  line-height: 1.65;
`

export const Portion = styled.p`
  margin-top: auto;
  margin-bottom: 16px;
`

export const ActionLabel = styled.span`
  display: inline-block;
  padding: 8px 12px;
  background: ${({ theme }) => theme.colors.cream};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
`
