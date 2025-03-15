import { useState } from "react";

function Login(){
    const[passwd1,setpasswd1]=useState("")
    const[passwd2,setpasswd2]=useState("")
    const[same,setsame]=useState(true)

    function handlepasswd1(event){
        setpasswd1(event.target.value)        
    }

    function handlepasswd2(event){
        setpasswd2(event.target.value)
        if(passwd1===event.target.value) setsame(true)
        else setsame(false)
    }

    return(
        <form className='my-5' style={{width:"50%", margin:"auto"}}>
            <div className="mb-3">
                <label className="form-label">Email address</label>
                <input type="email" className="form-control"/>
            </div>
            <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="password" value={passwd1} onChange={handlepasswd1} className="form-control" id="exampleInputPassword1"/>
            </div>
            <div className="mb-3">
                <label className="form-label">Re-Enter Password</label>
                <input type="password" value={passwd2} onChange={handlepasswd2} className="form-control" id="exampleInputPassword2"/>
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input"/>
                <label className="form-check-label">I Agree</label>
            </div>
            {!same && <p>Password's don't match</p>}
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}

export default Login;