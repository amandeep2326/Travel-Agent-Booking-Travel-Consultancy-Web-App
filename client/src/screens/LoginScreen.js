import React ,{useState} from "react";
import axios from "axios";
function LoginScreen(){
    const [email,setemail] = useState('');
    const [password,setpassword] = useState('');
    const [error, seterror] = useState();
    async function login(){
            const user = {
                email,
                password
            }
            try {
                const result = (await axios.post('/api/users/login',user)).data
             
                localStorage.setItem('currentUser',JSON.stringify(result));
                window.location.href = '/home'
            } catch (error) {
                console.log(error);
                seterror(true)
            }
    }
    return (
        <div>

           <div className="row justify-content-center mt-5">
            <div className="col-md-5 mt-5">
                {error && (<h1>Invalid Credentials</h1>)}
                <div className="bs">
                    <h2>Login Now</h2>
                    <input type = "email" className="form-control" placeholder="Email" value = {email} onChange={(e)=>{setemail(e.target.value)}}/>
                    <input type = "password" className="form-control" placeholder="Password" value = {password} onChange={(e)=>{setpassword(e.target.value)}}/>
                    <button className="btn btn-primary mt-3" onClick={login}>Login</button>
                </div>
            </div>
           </div>
        </div>
    )
}

export default LoginScreen
