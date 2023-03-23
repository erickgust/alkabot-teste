import { Route, Switch } from 'react-router-dom'

import { Home } from './pages/home'
import { PostInfo } from './pages/post-info'

function App () {
  return (
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/post/:id' component={PostInfo} />
    </Switch>
  )
}

export { App }
