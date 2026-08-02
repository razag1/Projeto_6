import styled from 'styled-components'

export const FooterWrapper = styled.footer`
  margin-top: 80px;
  background: ${({ theme }) => theme.colors.cream};
`

export const FooterContent = styled.div`
  width: min(100% - 32px, ${({ theme }) => theme.container});
  min-height: 260px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 22px;
  text-align: center;
`

export const FooterLogo = styled.strong`
  font-size: 28px;
  font-weight: 900;
  border: 3px solid ${({ theme }) => theme.colors.primary};
  padding: 2px 6px;
  letter-spacing: -2px;
`

export const SocialList = styled.ul`
  display: flex;
  gap: 10px;
`

export const SocialLink = styled.a`
  width: 28px;
  height: 28px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.cream};
  font-size: 15px;
  transition: transform 0.2s ease, background-color 0.2s ease;

  &:hover,
  &:focus-visible {
    background: ${({ theme }) => theme.colors.primaryDark};
    transform: translateY(-2px);
  }
`

export const Disclaimer = styled.p`
  max-width: 520px;
  font-size: 11px;
  line-height: 1.5;
`
