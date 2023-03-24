import styled from 'styled-components'

export const ListCount = styled.div`
  padding: 0.8rem 1.6rem;
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white.background};
  font-size: 1.4rem;
  font-weight: 500;
  border-radius: 5rem;
`
