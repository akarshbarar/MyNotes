import React from 'react'
import './Login.css'
import { useHistory} from 'react-router-dom'


function Login() {

    const history=useHistory();

    function signupPage(e){
        e.preventDefault();
        history.push('/signup')
    }
    function signinPage(e){
        e.preventDefault();
        history.push('/signin')
    }

    return (
        <div className="login">
            <div className="login_content">
                login_content
            </div>
            <div className="login_form">
                <h1>Keep Your Notes on the Go</h1>
                <h2>MyNotes</h2>
                <button className="btn" onClick={signupPage}>Signup</button>
                <button className="btn" onClick={signinPage}>Login</button>
            </div>
        </div>
    )
}

export default Login
