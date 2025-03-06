import {Outlet} from "react-router-dom"
import NavBar from "./NavBar"
import FooterComponent from "./FooterComponent"
import styles from "./rootlayout.module.css"



export default function RootLayout(){

    return(
        <div className={styles.parentContainer}>
            <div className={styles.mainPageContainer}>

                <div className={styles.navBarContainer}>
                    <NavBar />

                </div>

                <div className={styles.outletContainer}>
                    <Outlet />

                </div>

                {/* <div className={styles.footerContainer}>
                    <FooterComponent />

                </div> */}
            </div>

        </div>
    )
}