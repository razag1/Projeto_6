import styled from 'styled-components'

export const Hero = styled.section<{ $image: string }>`
  position: relative;
  min-height: 300px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.42), rgba(0, 0, 0, 0.42)), url(${({ $image }) => $image});
  background-position: center;
  background-size: cover;
  color: ${({ theme }) => theme.colors.white};
`

export const HeroContent = styled.div`
  width: min(100% - 32px, ${({ theme }) => theme.container});
  min-height: 300px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 36px 0;
`

export const Category = styled.p`
  font-size: 32px;
  font-weight: 300;
  text-transform: capitalize;
`

export const RestaurantName = styled.h1`
  font-size: 36px;
`

export const Main = styled.main`
  width: min(100% - 32px, ${({ theme }) => theme.container});
  margin: 80px auto 0;
`

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 32px;

  @media (max-width: 880px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 580px) {
    grid-template-columns: 1fr;
  }
`

export const StatusMessage = styled.div`
  width: min(100% - 32px, ${({ theme }) => theme.container});
  min-height: 420px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  text-align: center;
  font-size: 18px;
`

export const RetryButton = styled.button`
  border: 0;
  padding: 10px 16px;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.cream};
  font-weight: 700;
`
