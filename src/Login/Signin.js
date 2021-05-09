import React,{useState,useRef} from 'react'
import './Signin.css'
import {useHistory} from 'react-router-dom';
import supabase from '../utils/supabase';

function Signin() {

    const [email,setemail]=useState('')
    const [password,setpassword]=useState('')

    const emailRef=useRef()
    const passRef=useRef();

    const history=useHistory()

   async function signinSubmit(e){
        e.preventDefault();
        emailRef.current.setAttribute("disabled","disabled");
        passRef.current.setAttribute("disabled","disabled");
       
        let { user, error } = await supabase.auth.signIn({
                email: email,
                password: password
                })

            if(user){
                console.log("SIGNED IN")
                console.log(user);
                history.push('/home')
            }
            if(error){
                console.log("eror")
                console.log(error)
                alert(error.message)

        emailRef.current.removeAttribute("disabled");
        passRef.current.removeAttribute("disabled");
            }

    }
    return (
        <div className="signin">
            <form onSubmit={signinSubmit}>


               
                <label>
                    Enter Email
                </label>
                <input type="email" ref={emailRef} placeholder="Enter Email" onChange={e=>setemail(e.target.value)}/>

                <label>Password</label>
                <input type="password" ref={passRef} placeholder="Enter Password" onChange={e=>setpassword(e.target.value)}/>

                <button className="btn" type="submit">Signup</button>
                
            </form>
        </div>
    )
}

export default Signin
