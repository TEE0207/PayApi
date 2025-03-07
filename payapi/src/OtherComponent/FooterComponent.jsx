import styles from "./footer.module.css"
import facebook from "../assets/shared/desktop/facebook.svg"
import twitter from "../assets/shared/desktop/twitter.svg"
import linkedin from "../assets/shared/desktop/linkedin.svg"
import logo from "../assets/shared/desktop/logo.svg"
import { NavLink } from "react-router-dom"




export default function FooterComponent(){
    NavLink

    return(
        
            <div className={styles.allContentContainer}>
                <div className={styles.logoAndTheThreeTextContainer}>
                    <div className={styles.logoContainer}>
                      <NavLink to={"/"}><img src={logo} alt="logo" className={styles.logoImage} />
                      </NavLink>
                    </div>

                    <div className={styles.theThreeTextContainer}>
                        <div>

                            <NavLink to={"/pricing"}>Pricing</NavLink>
                            {/* <a href="#">Pricing</a> */}
                        </div>

                        <div>
                        <NavLink to={"/about"}>About</NavLink>

                            {/* <a href="#">About</a> */}
                        </div>

                        <div>
                        <NavLink to={"/contact"}>Contact</NavLink>

                            {/* <a href="#">Contact</a> */}
                        </div>
                    </div>
                </div>

                <div className={styles.theThreeSocialMediaContainer}>
                    <div className={styles.socialMediaContainer}>
                        <img src={facebook} alt="logo" className={styles.socialImage}/>
                    </div>

                    <div className={styles.socialMediaContainer}>
                        <img src={twitter} alt="logo" className={styles.socialImage} />
                    </div>

                    <div className={styles.socialMediaContainer}>
                        <img src={linkedin} alt="logo" className={styles.socialImage} />
                    </div>

                </div>
            </div>
        
    )
}