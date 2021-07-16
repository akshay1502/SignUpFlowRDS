// import { Link } from '@reach/router';
import { useState } from 'react';
import { referral_data } from '../../data/referraldata';

const Referral = () => {
    const [errmsg, setErrmsg] = useState('');
    const checkcode = (e) => {
        const reg = /[A-Z0-9]|[A-Z0-9]{6}/;
        if(reg.test(e.target.value)){
            setErrmsg('');
        }else{
            setErrmsg(`can't use lower case in referral code`);
        }
        console.log(e.target.value);
    }

    const showreferral = () => {
        const code = document.getElementById('code').value.trim();
        referral_data.forEach(referral => {
            if(code === referral.code){
                alert(`from ${referral.user}`);
            }
        })
    }

    return ( 
        <form className="centercontent">
            <input type="text" name="code" id="code" onChange={checkcode} maxLength="6" required/>
            <p>{errmsg}</p>
            <button className="submit" style={{margin:"1.5rem 0"}} onClick={showreferral}>Submit</button>
            <button>Don't have referral code? Skip</button>
        </form>
    );
}
 
export default Referral;