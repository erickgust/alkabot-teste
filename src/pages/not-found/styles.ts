import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: calc(100vh - 200px);

  margin: 0 auto;
  width: 300px;

  img {
    width: 100%;
  }

  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    margin: 1.6rem 0;
    text-align: center;
  }
`
