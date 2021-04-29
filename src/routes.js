import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from './components/header/'
import Home from './pages/homes'
export default function routes() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  )
}
