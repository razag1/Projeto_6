import styled from 'styled-components'

export const Main = styled.main`
  width: min(100% - 32px, ${({ theme }) => theme.container});
  min-height: 260px;
  margin: 80px auto 0;
`

export const RestaurantGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 48px 80px;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`

export const StatusMessage = styled.div`
  display: flex;
  min-height: 220px;
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
