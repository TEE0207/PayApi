import logo from "../assets/shared/desktop/logo.svg"
import {NavLink} from "react-router-dom"

export default function NavBar(){

    return (

        <div>


            <div className="logo-nav-schdule-container">
                <div className="logo-nav-container">
                    <div className="logo-container">
                        <img src={logo} alt="logo" />

                    </div>
                    <div className="nav-container">
                        <ul>
                            <NavLink to ={"/"}><li>index</li></NavLink>
                            <NavLink to ={"pricing"}><li>Pricing</li></NavLink>
                            <NavLink to ={"/about"}><li>About</li></NavLink>
                            <NavLink to = {"/contact"}><li>Contact</li></NavLink>
                        </ul>


                        
                    </div>

                </div>
               <div className="schdule-container">
                <button>Schdule a Demo</button>

               </div>
            </div>
        </div>
    )
}