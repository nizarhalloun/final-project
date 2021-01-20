import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Dashboard } from '../pages';
const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Dashboard} />
    </Switch>
  </Router>
);

export default App;
