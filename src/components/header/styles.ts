import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2.4rem 0 3.2rem;
  font-size: 2.4rem;

  a {
    color: inherit;
    text-decoration: none;
  }

  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`
