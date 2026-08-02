import { Disclaimer, FooterContent, FooterLogo, FooterWrapper, SocialLink, SocialList } from './styles'

const socialNetworks = [
  { name: 'Instagram', icon: 'bi-instagram' },
  { name: 'Facebook', icon: 'bi-facebook' },
  { name: 'Twitter', icon: 'bi-twitter' }
]

export function Footer() {
  return (
    <FooterWrapper>
      <FooterContent>
        <FooterLogo>efood</FooterLogo>
        <SocialList aria-label="Redes sociais">
          {socialNetworks.map((network) => (
            <li key={network.name}>
              <SocialLink href="#" aria-label={network.name}>
                <i className={`bi ${network.icon}`} aria-hidden="true" />
              </SocialLink>
            </li>
          ))}
        </SocialList>
        <Disclaimer>
          A efood é uma plataforma para divulgação de estabelecimentos. A responsabilidade pela entrega e pela qualidade dos produtos é dos restaurantes.
        </Disclaimer>
      </FooterContent>
    </FooterWrapper>
  )
}
