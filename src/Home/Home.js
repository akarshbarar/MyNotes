import React from 'react'
import Navbar from '../Component/Navbar/Navbar'
import Note from '../Component/Note/Note'
import './Home.css'
import SidebarLeft from './SidebarLeft'
import SidebarRight from './SidebarRight'


function Home() {

    function addNewNotes(e){
        e.preventDefault();
        
    }

    return (
        <div className="home">
            <Navbar/>
            <div className="home__data">
                <div className="home__left">
                   <SidebarLeft/>
                </div>
                <div className="home__main">

                        <div className="flexsearch">
                                <div className="flexsearch--wrapper">
                                    <form className="flexsearch__form" action="#" method="post">
                                        <div className="flexsearch--input-wrapper">
                                            <input className="flexsearch--input" type="search" placeholder="search"></input>
                                        </div>
                                        <input className="" type="submit" value="&#10140;"/>
                                    </form>
                                </div>
                                <div>
                                    <button className="btn add" onClick={addNewNotes}>ADD</button>
                                </div>
                        </div>
                        <div className="notes__container">
                           <div className="notes__content">
                                <Note/>
                           </div>
                      

                        </div>
                </div>
                <div className="home__right">
                  <SidebarRight/> 
                </div>
            </div>
        </div>
    )
}

export default Home
