import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './components/Home/index'
import TeamMatches from './components/TeamMatches/index'
import NotFound from './components/NotFound/index'
import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/team-matches/:id" component={TeamMatches} />
      <NotFound component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default App
