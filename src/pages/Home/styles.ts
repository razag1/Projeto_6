import styled from 'styled-components'

export const Main = styled.main`
  width: min(100% - 32px, ${({ theme }) => theme.container});
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
