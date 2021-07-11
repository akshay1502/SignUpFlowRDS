import Singup from './components/signup/signup';
import Otpscreen from './components/otp/otpscreen';
import { BrowserRouter,Switch,Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/otp'>
            <Otpscreen /> 
          </Route>
          <Route path='/'>
            <Singup />   
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
