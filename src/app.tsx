import styled from 'styled-components'
import { Route, Switch } from 'react-router-dom'

import { Home } from './pages/home'
import { PostInfo } from './pages/post-info'
import { UserInfo } from './pages/user-info'

export const Main = styled.main`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 2.5rem 1rem;
`

function App () {
  return (
    <Main>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/post/:id' component={PostInfo} />
        <Route path='/user/:id' component={UserInfo} />
      </Switch>
    </Main>
  )
}

export { App }
