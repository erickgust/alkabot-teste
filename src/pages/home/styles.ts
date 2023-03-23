import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 1.6rem;
`

export const ListContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`

export const ListCount = styled.div`
  padding: 0.8rem 1.6rem;
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};
  font-size: 1.4rem;
  font-weight: 500;
  border-radius: 5rem;
`
