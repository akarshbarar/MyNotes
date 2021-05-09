import React,{useEffect} from 'react'
import './Login.css'
import { useHistory} from 'react-router-dom'

import supabase from '../utils/supabase';
function Login() {

    const history=useHistory();

    useEffect(()=>{
        const user = supabase.auth.user();
        if(user){
            history.push('/home')
        }
    },[]);
    
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
