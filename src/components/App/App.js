import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Dashboard, BookedAppointments } from '../pages';

import NavBar from '../NavBar';

const App = () => (
  <Router>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/bookedAppointments" component={BookedAppointments} />
    </Switch>
  </Router>
);

export default App;
