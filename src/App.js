import Signup from './components/signup/signup';
import Otpscreen from './components/otp/otpscreen';
import Referral from './components/referral/referral';
// import { BrowserRouter,Switch,Route } from "react-router-dom";
import {
  Router
} from '@reach/router'

function App() {
  return (
    <div>
      <Router>
        <Otpscreen exact path="/otp" /> 
        <Referral exact path="/referral" />
        <Signup path="/" /> 
      </Router>
    </div>
  );
}

export default App;
