import { Link } from "react-router-dom";

function NotFound() {
    return(
        <div style={{width:'50%', margin:'20%'}}>
            <p>Oops the url you try to get in is not available</p>
            <Link className="btn btn-primary" to='/' style={{marginLeft:'15%'}}>Home</Link>
        </div>
    )
}

export default NotFound;