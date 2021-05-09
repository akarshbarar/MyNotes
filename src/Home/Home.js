import React from 'react'
import Navbar from '../Component/Navbar/Navbar'
import './Home.css'
function Home() {
    return (
        <div className="home">
            <Navbar/>
            <div className="home__data">
                <div className="home__left">
                   <li>Notes</li> 
                   <li>Reminder</li> 
                   <li>Complete</li> 
                </div>
                <div className="home__main">

                        <div class="flexsearch">
                                <div class="flexsearch--wrapper">
                                    <form class="flexsearch__form" action="#" method="post">
                                        <div class="flexsearch--input-wrapper">
                                            <input class="flexsearch--input" type="search" placeholder="search"></input>
                                        </div>
                                        <input class="flexsearch--submit" type="submit" value="&#10140;"/>
                                    </form>
                                </div>
                        </div>
                        <div className="notes__container">
                           <div className="notes__content">aaaa</div>
                           <div className="notes__content">aaaa</div>
                           <div className="notes__content">aaaa</div>
                           <div className="notes__content">aaaa</div>
                           <div className="notes__content">aaaa</div>
                           <div className="notes__content">aaaa</div>
                           <div className="notes__content">aaaa</div>
                           <div className="notes__content">aaaa</div>
                           <div className="notes__content">aaaa</div>
                           <div className="notes__content">aaaa</div>
                           <div className="notes__content">aaaa</div>
                           <div className="notes__content">aaaa</div>
                           <div className="notes__content">aaaa</div>
                           <div className="notes__content">aaaa</div>
                           <div className="notes__content">aaaa</div>

                        </div>
                </div>
                <div className="home__right">
                    <h3>ALL</h3>
                    <ul>
                        <li>1111</li>
                        <li>2222</li>
                        <li>3333</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Home
