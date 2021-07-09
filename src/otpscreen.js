const Otpscreen = () => {
    const checkinput = (e) => {
        console.log(e.target.value);
    }
    return (
        <div>
            <h2>Enter OTP</h2>
            <form>
                <div className="otpinput">
                    <input type="text" id="number" name="number" maxLength="1" onChange={checkinput} required />
                    <input type="text" id="number" name="number" maxLength="1" onChange={checkinput} required />
                    <input type="text" id="number" name="number" maxLength="1" onChange={checkinput} required />
                    <input type="text" id="number" name="number" maxLength="1" onChange={checkinput} required />
                    <input type="text" id="number" name="number" maxLength="1" onChange={checkinput} required />
                    <input type="text" id="number" name="number" maxLength="1" onChange={checkinput} required />
                </div>
            </form>
            <button>Submit</button>
        </div>
    );
}
 
export default Otpscreen;