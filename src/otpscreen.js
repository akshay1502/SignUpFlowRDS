import { Link } from 'react-router-dom';

const Otpscreen = () => {
    const checkinput = (e) => {
        console.log(e.target.value);
    }
    return (
        <div style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}}>
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
            <button className="submit"><Link to=''>Submit</Link></button>
        </div>
    );
}
 
export default Otpscreen;