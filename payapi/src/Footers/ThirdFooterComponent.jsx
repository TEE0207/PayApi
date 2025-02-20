import styles from "./thirdfooter.module.css"
import facebook from "../assets/shared/desktop/facebook.svg"
import twitter from "../assets/shared/desktop/twitter.svg"
import linkedin from "../assets/shared/desktop/linkedin.svg"
import logo from "../assets/shared/desktop/logo.svg"




export default function ThirdFooterComponent(){

    return(
        <div>
            <div className={styles.allContentContainer}>
                <div className={styles.logoAndTheThreeTextContainer}>
                    <div className={styles.logoContainer}>
                        <img src={logo} alt="logo" className={styles.logoImage} />

                    </div>

                    <div className={styles.theThreeTextContainer}>
                        <div>
                            <a href="#">Pricing</a>
                        </div>

                        <div>
                            <a href="#">About</a>
                        </div>

                        <div>
                            <a href="#">Contact</a>
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
        </div>
    )
}