import styled from 'styled-components'

export const Container = styled.article`
  background-color: ${({ theme }) => theme.colors.posts.background};
  padding: 2.4rem;
  border-radius: 0.8rem;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.04);

  > h2 {
    margin: 0;
    font-size: 2.4rem;
  }
`

export const Footer = styled.footer`
  display: flex;

  button {
    all: unset;
    cursor: pointer;
  }

  > .comments {
    margin-left: auto;

    > svg:hover path {
      transition: stroke 200ms ease-in-out;
      stroke: ${({ theme }) => theme.colors.primary};
    }
  }
`
