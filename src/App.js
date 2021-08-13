import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import Post from './components/pages/Post'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/post" component={Post}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;


