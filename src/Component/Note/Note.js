import React from 'react'
import './Note.css'
function Note() {
    return (
        <div classNam="note">
            <div className="note__header">Header</div>
            <div className="note__data">
                <div>
                   <input type="checkbox" />Item 1
                </div>
                <div>
                  <input type="checkbox" />Item 2              
                </div>
                
            </div>
        </div>
    )
}

export default Note
