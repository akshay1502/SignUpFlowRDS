const Signup = () => {
    return ( 
        <div>
            <form>
                <div className="inputfields">
                    <label>Email</label>
                    <input type="email" placeholder="type your mail here..." required/>
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