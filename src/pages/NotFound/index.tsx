import { Content, HomeLink, Page } from './styles'

export function NotFoundPage() {
  return (
    <Page>
      <Content>
        <h1>Página não encontrada</h1>
        <p>O restaurante ou endereço informado não existe.</p>
        <HomeLink to="/">Voltar para a home</HomeLink>
      </Content>
    </Page>
  )
}
