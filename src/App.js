import Singup from './signup';
import Otpscreen from './otpscreen';
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/otp'>
            <Otpscreen /> 
          </Route>
          <Route path='/'>
            <Singup />   
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
