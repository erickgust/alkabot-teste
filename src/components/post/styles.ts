import styled, { css } from 'styled-components'

type ContainerProps = {
  isHighlighted?: boolean
}

export const Container = styled.article<ContainerProps>`
  background-color: ${({ theme }) => theme.colors.posts.background};
  padding: 2.4rem;
  border-radius: 0.8rem;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.04);
  border: 2px solid transparent;

  ${({ isHighlighted, theme }) => isHighlighted && css`
    border: 2px solid ${theme.colors.primary};
  `}

  > strong {
    font-size: 2.4rem;
  }
`

export const Footer = styled.footer`
  display: flex;

  .user-info {
    all: unset;
    cursor: pointer;

    display: flex;
    align-items: center;
    gap: 0.8rem;

    color: ${({ theme }) => theme.colors.icon};
    font-size: 1.4rem;
  }

  > .comments {
    display: flex;
    align-items: center;
    margin-left: auto;

    > svg:hover path {
      transition: stroke 200ms ease-in-out;
      stroke: ${({ theme }) => theme.colors.primary};
    }
  }
`
