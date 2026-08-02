import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Page = styled.main`
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 32px;
  text-align: center;
`

export const Content = styled.div`
  display: grid;
  gap: 18px;
`

export const HomeLink = styled(Link)`
  justify-self: center;
  padding: 10px 14px;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.cream};
  font-weight: 700;
`
