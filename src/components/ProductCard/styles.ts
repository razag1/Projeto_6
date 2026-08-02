import styled from 'styled-components'

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  padding: 10px;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.cream};
`

export const Image = styled.img`
  width: 100%;
  height: 190px;
  object-fit: cover;
`

export const Title = styled.h3`
  margin: 10px 0 8px;
  font-size: 18px;
`

export const Description = styled.p`
  flex: 1;
  margin-bottom: 12px;
  line-height: 1.55;
`

export const AddButton = styled.span`
  display: block;
  width: 100%;
  padding: 8px 12px;
  background: ${({ theme }) => theme.colors.cream};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
  text-align: center;
`
