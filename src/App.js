import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import Post from './components/pages/Post'
import Register from './components/pages/Register'
import Login from './components/pages/Login'
import ManageOrder from './components/pages/ManageOrder'
import Order from './components/pages/Order'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/post" component={Post}/>
        <Route path="/register" component={Register}/>
        <Route path="/login" component={Login}/>
        <Route path="/manage_order" component={ManageOrder}/>
        <Route path="/order" component={Order}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;


