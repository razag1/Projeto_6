import styled from 'styled-components'
import { Link } from 'react-router-dom'
import backgroundPattern from '../../assets/images/background-pattern.png'

export const HeaderWrapper = styled.header`
  background-color: ${({ theme }) => theme.colors.cream};
  background-image: url(${backgroundPattern});
  background-position: top center;
  background-repeat: repeat;
  background-size: 506px 235px;
`

export const HeaderContent = styled.div<{ $home: boolean }>`
  width: min(100% - 32px, ${({ theme }) => theme.container});
  min-height: ${({ $home }) => ($home ? '360px' : '160px')};
  margin: 0 auto;
  display: grid;
  grid-template-columns: ${({ $home }) => ($home ? '1fr' : '1fr auto 1fr')};
  align-items: center;
  justify-items: center;
  position: relative;

  @media (max-width: 640px) {
    min-height: ${({ $home }) => ($home ? '300px' : '190px')};
    grid-template-columns: 1fr;
    gap: 14px;
    padding: 24px 0;
  }
`

export const LogoLink = styled(Link)`
  font-size: 36px;
  font-weight: 900;
  line-height: 1;
  border: 3px solid ${({ theme }) => theme.colors.primary};
  padding: 2px 6px;
  letter-spacing: -2px;
  background: ${({ theme }) => theme.colors.cream};
`

export const HomeTitle = styled.h1`
  max-width: 540px;
  margin-top: 70px;
  text-align: center;
  font-size: clamp(24px, 4vw, 40px);
  line-height: 1.1;
`

export const NavLink = styled(Link)`
  justify-self: start;
  font-size: 18px;
  font-weight: 900;

  @media (max-width: 640px) {
    justify-self: center;
    order: 2;
  }
`

export const CartStatus = styled.span`
  justify-self: end;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 18px;
  font-weight: 900;


  @media (max-width: 640px) {
    justify-self: center;
    order: 3;
  }
`
