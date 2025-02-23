
import LogoComponent from "../../OtherComponent/LogosComponent"
import styles from "./firsthero.module.css"


export default function FirstHeroComponent(){

    return(
        <div>
            <div className={styles.allContentContainer}>

                <div className={styles.headingParagraphAboutContainer}>
                    <div className={styles.headingContainer}>
                        <h1>Who we work with</h1>

                    </div>

                   <div className={styles.paragraphAndLogoContainer}>

                       <div className={styles.paragraphContainer}>
                            <p> Today, millions of people around the world have successfully connected their accounts to apps they love using our API. We provide developers with the tools they need to create easy and accessible experiences for their users.</p>

                        </div>

                        <div className={styles.logoContainer}>
                            <LogoComponent />

                        </div>
                   </div>

                    <div className={styles.aboutButtonContainer}>
                        <button className={styles.button}>About Us</button>

                    </div>
                </div>

              
            </div>
        </div>
    )
}