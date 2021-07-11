<<<<<<< HEAD
import Singup from './signup';
import Otpscreen from './otpscreen';
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";

=======
import Singup from './components/signup/signup';
import Otpscreen from './components/otp/otpscreen';
>>>>>>> 875aa6427e9bc208f5472ebfec96263a4d479b03
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
