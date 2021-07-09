import { useState } from "react";

const Signup = () => {
    const [ msg, setMsg] = useState('');
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
    return ( 
        <div>
            <form>
                <div className="inputfields">
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="type your mail here..." id="email" name="email" onBlur={validateEmail} required/>
                    <p style={{color:"red"}}>{msg}</p>
                </div>
                <div className="inputfields">
                    <label>Password</label>
                    <input type="password" required/>
                    <p>password strength</p>
                </div>
                <div className="inputfields">
                    <label>Re-enter Password</label>
                    <input type="password" required/>
                    <p>success or error message</p>
                </div>
                <button>Submit</button>
            </form>
        </div>
    );
}
 
export default Signup;