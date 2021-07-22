import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './pages/login';

import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
