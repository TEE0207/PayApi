import tesla from "../assets/shared/desktop/tesla.svg"
import microsoft from "../assets/shared/desktop/microsoft.svg"
import hewlett from "../assets/shared/desktop/hewlett-packard.svg"
import oracle from "../assets/shared/desktop/oracle.svg"
import google from "../assets/shared/desktop/google.svg"
import nvidia from "../assets/shared/desktop/nvidia.svg"
import styles from "./firsthero.module.css"


export default function FirstHeroComponent(){

    return(
        <div>
            <div className={styles.allContentContainer}>

                <div className={styles.headingParagraphAboutContainer}>
                    <div className={styles.headingContainer}>
                        <h1>Who we work with</h1>

                    </div>

                    <div className={styles.paragraphContainer}>
                        <p> Today, millions of people around the world have successfully connected their accounts to apps they love using our API. We provide developers with the tools they need to create easy and accessible experiences for their users.</p>


                    </div>

                    <div className={styles.aboutButtonContainer}>
                        <button className={styles.button}>About Us</button>

                    </div>
                </div>

                <div className={styles.allLogoContainer}>

                    <div className={styles.first2LogoContainer}>

                        <div className={styles.teslaContainer}>
                            <img src={tesla} alt="teslaLogo" className={styles.teslaLogoImg} />

                        </div>

                        <div className={styles.oracleContainer}>
                            <img src={oracle} alt="oracleLogo" className={styles.oracleLogoImg}/>
                        </div>

                    </div>

                    <div className={styles.second2LogoContainer}>

                           <div className="microsoftContainer">
                                <img src={microsoft} alt="microsoftLogo" />
                                
                            </div>

                            <div className="GoogleContainer">
                                <img src={google} alt="googleLogo" />
                                
                            </div>
                    </div>

                    <div className={styles.last2LogoContainer}>

                        <div className="hewlettContainer">
                            <img src={hewlett} alt="hewlettLogo" />
                            
                        </div>

                        <div className="nvidiaContainer">
                            <img src={nvidia} alt="nvidiaLogo" />
                            
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}