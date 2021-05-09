import './App.css';
import { BrowserRouter as Router, Route, Switch,} from 'react-router-dom'
import Login from './Login/Login';
import Home from './Home/Home';
import Error from './Error/Error'
import Signin from './Login/Signin'
import Signup from './Login/Signup'

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <Router>
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/signup" component={Signup}/>
          <Route exact path="/signin" component={Signin}/> 
          <Route path="*" component={Error}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
