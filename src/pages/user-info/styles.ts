import styled from 'styled-components'

export const Container = styled.div`
  padding: 1.6rem;
  margin: 0.8rem 0;
  border-radius: 0.8rem;
  background-color: #ffffff;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.04);
  color: ${({ theme }) => theme.colors.text};
`

export const Section = styled.section`
  margin-bottom: 1.6rem;
  display: flex;
  gap: 2.4rem;
  flex-wrap: wrap;

  div {
    flex: 1;
    min-width: 260px;
  }

  h2 {
    font-size: 2.4rem;
    font-weight: 600;
    margin-bottom: 1.6rem;
  }
`

export const ListContainer = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    color: ${({ theme }) => theme.colors.icon};
  }

  li + li {
    margin-top: 1.6rem;
  }

  span {
    color: ${({ theme }) => theme.colors.text};
    margin-left: 0.8rem;
  }
`

export const Footer = styled.footer`
  margin-top: 2.4rem;
`

export const UserList = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));

  .user-info {
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;

    gap: 0.8rem;
    padding: 1.6rem;
    color: ${({ theme }) => theme.colors.icon};

    strong {
      display: block;
      color: ${({ theme }) => theme.colors.text};
    }

    span {
      display: block;
      font-size: 1.4rem;

      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;

      max-width: 100%;
    }
  }
`
