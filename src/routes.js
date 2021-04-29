import { BrowserRouter, Route, Switch } from 'react-router-dom'
/* https://sujeitoprogramador.com/r-api/?api=filmes*/
import Home from './pages/homes'
export default function routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  )
}
