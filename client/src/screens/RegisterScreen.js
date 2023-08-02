import React ,{useState,useEffect} from "react";
import axios from "axios";
function RegisterScreen(){
    const [name,setname] = useState('');
    const [email,setemail] = useState('');
    const [password,setpassword] = useState('');
    const [cpassword,setcpassword] = useState('');
    const [loading, setloading] = useState(false);
    const [error, seterror] = useState();
    const [success,setsuccess] = useState();
    async function register(){
        if(password === cpassword){
            const user = {
                name,
                email,
                password,
                cpassword
            }
            try {
                setloading(true);
                const result = (await axios.post('/api/users/register',user)).data
                console.log(result);
                setloading(false)
                setsuccess(true)
                setname('')
                setemail('')
                setpassword('')
                setcpassword('')
            } catch (error) {
                console.log(error);
                setloading(false);
                seterror(true)
                
            }
        }
        else {
            alert('Password is not matching');
        }
    }
    return (
        <div>
            {loading && (<h1>loading</h1>)}
            {error && (<h1>Error</h1>)}
            
           <div className="row justify-content-center mt-5">
            <div className="col-md-5 mt-5">
            {success && (<h1>Registered Successfully</h1>)}
                <div className="bs">
                    <h2>Register Now</h2>
                    <input type = "text" className="form-control" placeholder="Name" value = {name} onChange={(e)=>{setname(e.target.value)}}/>
                    <input type = "email" className="form-control" placeholder="Email" value = {email} onChange={(e)=>{setemail(e.target.value)}}/>
                    <input type = "password" className="form-control" placeholder="Password" value = {password} onChange={(e)=>{setpassword(e.target.value)}}/>
                    <input type = "password" className="form-control" placeholder="Confirm Password" value = {cpassword} onChange={(e)=>{setcpassword(e.target.value)}}/>
                    <button className="btn btn-primary mt-3" onClick={register}>Register</button>
                </div>
            </div>
           </div>
        </div>
    )
}

export default RegisterScreen
