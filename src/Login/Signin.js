import React,{useState,useEffect,useRef} from 'react'
import './Signin.css'
import { createClient } from '@supabase/supabase-js'
import {useHistory} from 'react-router-dom';


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
        const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyMDUwMjc5MSwiZXhwIjoxOTM2MDc4NzkxfQ.1o_H_VtxuTf-iQawWz8WEVquOVPF7ms1797M_Nl_UF8'
        const SUPABASE_URL = "https://uctkwlswlcabzouaekxn.supabase.co"
        const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
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
