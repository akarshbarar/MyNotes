import React from 'react'
import './Navbar.css'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import supabase from '../../utils/supabase';
import { useHistory} from 'react-router-dom'

function Navbar() {


    const history=useHistory();

    async function signout(e){
        e.preventDefault();
        console.log('LOGOUT')
        let { error } = await supabase.auth.signOut()
        if(error){
            alert(error.message)
        }
        else{
            history.push('/')
        }

    }

    return (
        <Router>

        <div className="navbar">
            <div className="navbar_logo">MyNotes</div>
            <ul className='navbar_content'>
                <l1><Link onClick={signout}>SignOut</Link></l1>                
            </ul>
        </div>
        </Router>
    )
}

export default Navbar
