import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Card = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.white};
`

export const Cover = styled.img`
  width: 100%;
  height: 218px;
  object-fit: cover;
`

export const Tags = styled.ul`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 8px;
`

export const Tag = styled.li`
  padding: 6px 10px;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.cream};
  font-size: 12px;
  font-weight: 700;
`

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 14px;
`

export const TitleRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 12px;
`

export const Title = styled.h2`
  font-size: 20px;
`

export const Rating = styled.span`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 18px;
  font-weight: 700;

  &::after {
    content: '★';
    color: #f5a623;
    font-size: 24px;
  }
`

export const Description = styled.p`
  flex: 1;
  margin-bottom: 16px;
  line-height: 1.55;
`

export const MoreLink = styled(Link)`
  align-self: flex-start;
  padding: 8px 12px;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.cream};
  font-weight: 700;

  &:hover,
  &:focus-visible {
    background: ${({ theme }) => theme.colors.primaryDark};
  }
`
