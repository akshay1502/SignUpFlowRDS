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
                        required />
                    <input type="text" name="number" maxLength="1" onChange={checkinput} required/>
                    <input type="text" name="number" maxLength="1" onChange={checkinput} required />
                    <input type="text" name="number" maxLength="1" onChange={checkinput} required />
                    <input type="text" name="number" maxLength="1" onChange={checkinput} required />
                    <input type="text" name="number" maxLength="1" onChange={checkinput} required />
                </div>
            </form>
            <button data-testid="submitotp">Submit</button>
        </div>
    );
}
 
export default Otpscreen;