import React,{useState,useRef} from 'react'
import './Signup.css'
import {useHistory} from 'react-router-dom'
import supabase from '../utils/supabase';

function Signup() {


    const [name,setname]=useState('')
    const [email,setemail]=useState('')
    const [password,setpassword]=useState('')

    const nameRef=useRef()
    const emailRef=useRef()
    const passwordref=useRef()


    const history=useHistory()

  
  

    async function signupSubmit(e){
        e.preventDefault();
        nameRef.current.setAttribute("disabled", "disabled");
        emailRef.current.setAttribute("disabled", "disabled");
        passwordref.current.setAttribute("disabled", "disabled");
        let { user, error } = await supabase.auth.signUp({
            email: email,
            password: password
            })

        if(user){
            console.log("user Signed up")
            console.log(user)
           let {data,error}= await supabase
                                .from("UsersTable")
                                .insert(
                                    [
                                       {
                                            
                                            Name:name,
                                            Email:email,
                                            Password:password,
                                            UserId:user.id
                                       }
                                    ]
                                 );
            if(error){
                alert(error.message)
            }
            else{
                console.log("data",data)
                alert("We have sent you a confirmation mail. Please Confirm your email.")
                history.push('/signin');
            }
        }
        if(error){
            console.log("error")
            console.log(error)
             nameRef.current.removeAttribute("disabled");
             emailRef.current.removeAttribute("disabled");
             passwordref.current.removeAttribute("disabled");
        }

    }
    return (
        <div className="signup">
            <form onSubmit={signupSubmit}>
                <label>
                    Enter Name
                </label>
                <input type="text" placeholder="Enter Name" 
                ref={nameRef}
                onChange={e=>setname(e.target.value)}/>

                <label>
                    Enter Email
                </label>
                <input type="email" ref={emailRef} placeholder="Enter Email" onChange={(e)=>setemail(e.target.value)}/>

                <label>Password</label>
                <input type="password" ref={passwordref} placeholder="Enter Password" onChange={e=>setpassword(e.target.value)}/>

                <button className="btn" type="submit">Signup</button>
                
            </form>
        </div>
    )
}

export default Signup
