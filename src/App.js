import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './pages/login';
import Register from './pages/register';

import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login"> <Login /> </Route>
        <Route path="/register"> <Register /> </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
