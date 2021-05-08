import React from 'react'
import './Error.css'
import {Link} from 'react-router-dom'
function Error() {
    return (
        <div className="error_body">
        <h1 className="h1">404 Error Page #2</h1>
            <p class="zoom-area"><b>YOU</b> Lost Your Way. </p>
            <section class="error-container">
            <span class="four"><span class="screen-reader-text">4</span></span>
            <span class="zero"><span class="screen-reader-text">0</span></span>
            <span class="four"><span class="screen-reader-text">4</span></span>
            </section>
            <div class="link-container">
            <Link  to="/" class="more-link">Go Home</Link>
            </div>
        
        </div>
    )
}

export default Error;
