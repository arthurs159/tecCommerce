import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Catalog from './pages/Catalog';
import Category from './pages/Category';
import Home from './pages/Home';


const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/catalog" exact> 
        <Catalog />
      </Route>
      <Route path="/categories">
        <Category />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
