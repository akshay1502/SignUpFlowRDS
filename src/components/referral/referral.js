import { Link } from '@reach/router';

const Referral = () => {
    return ( 
        <div className="centercontent">
            <input type="text" />
            <button className="submit" style={{margin:"1.5rem 0"}}><Link to="/">Submit</Link></button>
            <button>Don't have referral code? Skip</button>
        </div>
    );
}
 
export default Referral;