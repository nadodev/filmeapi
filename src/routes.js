import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from './components/header/'
import Home from './pages/homes'
import Filme from './pages/filme'
export default function routes() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/filme/:id" component={Filme} />
        <Route path="*" component={Filme} />
      </Switch>
    </BrowserRouter>
  )
}
