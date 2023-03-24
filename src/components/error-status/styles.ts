import styled, { css } from 'styled-components'

type ButtonProps = {
  danger?: boolean
}

export const Button = styled.button<ButtonProps>`${({ theme, danger }) => css`
  border: none;
  font-size: 1.6rem;
  border-radius: 4px;
  padding: 1rem 1.6rem;
  font-weight: 700;
  color: #FFF;
  transition: all 100ms ease-in;
  display: flex;
  justify-content: center;
  align-items: center;

  ${danger && css`
    background-color: ${theme.colors.danger};

    &:hover {
      filter: brightness(1.1);
    }

    &:active {
      filter: brightness(0.9);
    }
  `}
`}`

export const ErrorContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 1.6rem 0;

  div {
    margin-left: 2.4rem;

    strong {
      font-size: 2.2rem;
      display: block;
      margin-bottom: 0.8rem;
      color: ${({ theme }) => theme.colors.danger};
    }
  }
`
