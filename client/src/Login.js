import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify"
 
const Login = () => {
    const [username, usernameupate] = useState('');
    const [password, passwordupdate] = useState('');

    const usenavigate = useNavigate()


    const ProceedLogin = (e) => {
        e.preventDefault();
        if(validate()){

            fetch("http://localhost:8000/user/" + username).then((res)=>{
                return res.json();
            }).then((resp)=>{
                if(Object.keys(resp).length===0){
                    toast.error('Please enter valid username');
                }else{
                    if (resp.password === password) {
                        toast.success('Success');
                        sessionStorage.setItem('username', username);
                        usenavigate('/')
                    }
                    else{
                        toast.error('please etner valid credit')
                    }
                }
            }).catch((err)=>{
                toast.error('Login Failed due to: ' + err.message)
            });
        
        
        }

    }

    const validate=()=>{
        let result=true;
        if(username === '' || username === null) {
            result=false;
            toast.warning('Please Enter Username');
        }
        if(password === '' || password === null){
            result=false;
            toast.warning('Please Enter Passowrd');
        }
        return result;
    }

    return (
        <div className="row">
            <div className="offset-lg-3 col-lg-6">
                <form onSubmit={ProceedLogin} className="container">
                    <div className="card">
                        <div className="card-header">
                            <h2>User Login</h2>
                        </div>
                        <div className="card-body">
                            <div className="form-group">
                                <label>User Name <span className="errmsg">*</span></label>
                                <input value={username} onChange={e=>usernameupate(e.target.value)} className="form-control"></input>
                            </div>
                            <div className="form-group">
                                <label>Passowrd <span className="errmsg">*</span></label>
                                <input type="password" value={password} onChange={e=>passwordupate(e.target.value)} className="form-control"></input>
                            </div>
                        </div>
                        <div className="card-footer">
                            <button type="submit" className="btn btn-primary">Login</button>
                            <Link className="btn btn-success" to={'./register'}>New User</Link>
                        </div>
                    </div>
                </form>

            </div>

        </div>
    )

}
export default Login;