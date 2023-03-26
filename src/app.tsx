import styled from 'styled-components'
import { Route, Switch } from 'react-router-dom'

import { Home } from './pages/home'
import { PostInfo } from './pages/post-info'
import { UserInfo } from './pages/user-info'
import { Header } from './components/header'
import { NotFound } from './pages/not-found'

export const Main = styled.main`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 2.4rem 1rem;
  padding-top: 0;
`

function App () {
  return (
    <Main>
      <Header />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/post/:id' component={PostInfo} />
        <Route path='/user/:id' component={UserInfo} />
        <Route path='*' component={NotFound} />
      </Switch>
    </Main>
  )
}

export { App }
