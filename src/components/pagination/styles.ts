import styled, { css } from 'styled-components'

export const ListContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  gap: 0.8rem;
`

type PageItemProps = {
  isActive?: boolean
}

export const PageItem = styled.li<PageItemProps>`
  user-select: none;

  button {
    all: unset;
    cursor: pointer;
    padding: 0.8rem 1.6rem;
    font-size: 1.8rem;
    border-radius: 0.5rem;

    color: ${({ theme }) => theme.colors.black};

    &:hover {
      background-color: ${({ theme }) => theme.colors.gray.light};
    }

    ${({ isActive, theme }) => isActive && css`
      background-color: ${theme.colors.primary} !important;
      color: ${theme.colors.white.details} !important;
    `}
  }
`
