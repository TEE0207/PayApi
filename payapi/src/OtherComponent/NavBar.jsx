import logo from "../assets/shared/desktop/logo.svg"
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import {NavLink} from "react-router-dom"
import styles from "./navbar.module.css"

export default function NavBar(){


    const openMenu = (e)=>{
        moblieMenuContainer.style.display = "flex"
    }

    const closeMenu = (e) => {
        moblieMenuContainer.style.display = "none"

    }

    return (

        


            <div className={styles.logoNavScheduleContainer}>

                <div className={styles.logoNavContainer}>
                    <div className={styles.logoContainer}>
                      <NavLink to ={"/"}><img src={logo} alt="logo" className={styles.logoImage} /></NavLink>

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


                  <IoMdMenu className={styles.barMenu} onClick={openMenu} />


                  <div className={styles.moblieMenuContainer}>
                       <ul className={styles.moblieListContainer}>

                            <IoClose className={styles.closeBar} onClick={closeMenu} />

                            <NavLink to ={"/pricing"}><li className={styles.mPage}>Pricing</li></NavLink>
                            <NavLink to ={"/about"}><li className={styles.mPage}>About</li></NavLink>
                            <NavLink to = {"/contact"}><li className={styles.mPage}>Contact</li></NavLink>
                        </ul>
                       
                        <div className={styles.schduleContainer}>
                             <button className={styles.mButton}>Schdule a Demo</button>

                        </div>
                  </div>



         </div>
        
    )
}