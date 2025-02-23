import logo from "../assets/shared/desktop/logo.svg"
import {NavLink} from "react-router-dom"
import styles from "./navbar.module.css"

export default function NavBar(){

    return (

        <div>


            <div className={styles.logoNavScheduleContainer}>

                <div className={styles.logoNavContainer}>
                    <div className={styles.logoContainer}>
                        <img src={logo} alt="logo" className={styles.logoImage} />

                    </div>
                    <div className={styles.navContainer}>
                        <ul className={styles.listContainer}>
                            <NavLink to ={"/"}><li></li></NavLink>
                            <NavLink to ={"pricing"}><li className={styles.page}>Pricing</li></NavLink>
                            <NavLink to ={"/about"}><li className={styles.page}>About</li></NavLink>
                            <NavLink to = {"/contact"}><li className={styles.page}>Contact</li></NavLink>
                        </ul>


                        
                    </div>

                </div>
               <div className={styles.schduleContainer}>
                <button className={styles.button}>Schdule a Demo</button>

               </div>
            </div>
        </div>
    )
}