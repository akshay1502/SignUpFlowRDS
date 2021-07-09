/* eslint-disable jsx-a11y/aria-role */
const Otpscreen = () => {
    const checkinput = (e) => {
        console.log(e.target.value);
    }
    return (
        <div>
            <h2>Enter OTP</h2>
            <form>
                <div className="otpinput">
                    <input 
                        type="text" 
                        name="number" 
                        maxLength="1" 
                        onChange={checkinput} 
                        data-testid="number1"
                        // eslint-disable-next-line jsx-a11y/aria-role
                        role="input"
                        required />
                    <input type="text" role="input" name="number" maxLength="1" onChange={checkinput} required />
                    <input type="text" role="input" name="number" maxLength="1" onChange={checkinput} required />
                    <input type="text" role="input" name="number" maxLength="1" onChange={checkinput} required />
                    <input type="text" role="input" name="number" maxLength="1" onChange={checkinput} required />
                    <input type="text" role="input" name="number" maxLength="1" onChange={checkinput} required />
                </div>
            </form>
            <button data-testid="submitotp">Submit</button>
        </div>
    );
}
 
export default Otpscreen;