// import logo from "../assets/shared/desktop/logo.svg"
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import {NavLink} from "react-router-dom"
import styles from "./navbar.module.css"
import { useState } from "react";

export default function NavBar(){

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
      };



    // const openMenu = (e)=>{
    //     moblieMenuContainer.style.display = "flex"
    // }

    // const closeMenu = (e) => {
    //     moblieMenuContainer.style.display = "none"

    // }

    return (

        


            <div className={styles.logoNavScheduleContainer}>
                
                <div className={styles.desktopLogoNavScheduleContainer}>

                        <div className={styles.logoNavContainer}>
                            <div className={styles.logoContainer}>
                            <NavLink to ={"/"}><img src="/desktopshared/logo.svg" alt="logo" className={styles.logoImage} /></NavLink>

                            </div>

                            <div className={styles.navContainer}>
                                <ul className={styles.listContainer}>
                                    <NavLink to ={"/pricing"}><li className={styles.page}>Pricing</li></NavLink>
                                    <NavLink to ={"/about"}><li className={styles.page}>About</li></NavLink>
                                    <NavLink to = {"/contact"}><li className={styles.page}>Contact</li></NavLink>
                                </ul>
                            </div>

                        </div>
                        <div className={styles.schduleContainer}>
                            <button className={styles.button}>Schdule a Demo</button>

                        </div>


                </div>
               


                 <div className={styles.barMenuContainer}>  <IoMdMenu className={styles.barMenu} onClick={toggleMenu} /> </div>


                  <div  className={`${styles.mobileMenuContainer} ${menuOpen ? styles.showMenu : ""}`}>

                       <div className={styles.closeBarContainer}> <IoClose className={styles.closeBar}  onClick={toggleMenu} /> 
                       </div>


                       <ul className={styles.mobileListContainer}>

                            

                            <NavLink to ={"/pricing"}><li className={styles.mPage}>Pricing</li></NavLink>
                            <NavLink to ={"/about"}><li className={styles.mPage}>About</li></NavLink>
                            <NavLink to = {"/contact"}><li className={styles.mPage}>Contact</li></NavLink>
                        </ul>
                       
                        <div className={styles.mSchduleContainer}>
                             <button className={styles.mButton}>Schdule a Demo</button>

                        </div>
                  </div>



         </div>
        
    )
}