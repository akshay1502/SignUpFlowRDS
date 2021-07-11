import { useState } from "react";
import { Link } from 'react-router-dom';

const Signup = () => {
    const [ msg, setMsg] = useState('');
    const [ passwordmsg, setPasswordmsg] = useState('');
    const emailRegex = /\S+@\S+\.\S+/;
    const validateEmail = () => {
        const email = document.getElementById('email');
        if (emailRegex.test(email.value)) {
            email.style.border = `2px solid green`;
            setMsg('');
        } else {
            email.style.border = `2px solid red`;
            setMsg('Please enter a valid email!');
        }
    };

    const passwordcheck = () => {
        const password = document.getElementById('password').value;
        const repassword = document.getElementById('repassword').value;
        const passmsg = document.getElementById('passmsg');
        if(password === repassword){
            setPasswordmsg('Passwords Matched');
            passmsg.style.color = 'green';
        }
        else{
            setPasswordmsg('Passwords not matching');
            passmsg.style.color = 'red'
        }
        console.log(password, repassword);
    }

    return ( 
        <div>
            <form method="post">
                <div className="inputfields">
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="type your mail here..." id="email" name="email" onBlur={validateEmail} required/>
                    <p style={{color:"red"}}>{msg}</p>
                </div>
                <div className="inputfields">
                    <label htmlFor="password">Password</label>
                    <input type="password" data-testid="Password" id="password" name="password" required/>
                    <p>password strength</p>
                </div>
                <div className="inputfields">
                    <label htmlFor="repassword">Re-enter Password</label>
                    <input type="password" data-testid="rePassword" id="repassword" name="repassword" required onChange={passwordcheck}/>
                    <p id="passmsg" data-testid="msg">{passwordmsg}</p>
                </div>
                <button className="submit"><Link to='/otp'>Submit</Link></button>
                <button id="submit">Submit</button>
            </form>
        </div>
    );
}
 
export default Signup;