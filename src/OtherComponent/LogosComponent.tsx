// import tesla from "../public/desktopshared/tesla.svg"
// import microsoft from "../assets/shared/desktop/microsoft.svg"
// import hewlett from "../assets/shared/desktop/hewlett-packard.svg"
// import oracle from "../assets/shared/desktop/oracle.svg"
// import google from "../assets/shared/desktop/google.svg"
// import nvidia from "../assets/shared/desktop/nvidia.svg"
import styles from "./logo.module.css"


export default function LogoComponent(){

    return(
        
                <div className={styles.allLogoContainer}>
             
                    <div className={styles.first2LogoContainer}>
             
                        <div className={styles.teslaContainer}>
                            <img src="/desktopshared/tesla.svg" alt="teslaLogo" className={styles.teslaLogoImg} />

                        </div>

                        <div className={styles.oracleContainer}>
                            <img src="/desktopshared/oracle.svg" alt="oracleLogo" className={styles.oracleLogoImg}/>
                        </div>
             
                    </div>
             
                    <div className={styles.second2LogoContainer}>

                        <div className={styles.microsoftContainer}>
                                <img src="/desktopshared/microsoft.svg" alt="microsoftLogo" className={styles.microsoftLogoImg} />
                                
                        </div>

                        <div className={styles.googleContainer}>
                            <img src="/desktopshared/google.svg" alt="googleLogo" className={styles.googleLogoImg} />
                            
                        </div>

                    </div>
             
                    <div className={styles.last2LogoContainer}>

                        <div className={styles.hewlettContainer}>
                            <img src= "/desktopshared/hewlett-packard.svg" alt="hewlettLogo" className={styles.hewlettLogoImg} />
                            
                        </div>

                        <div className={styles.nvidiaContainer}>
                            <img src="/desktopshared/nvidia.svg" alt="nvidiaLogo" className={styles.nvidiaLogoImg}/>
                            
                        </div>

                    </div>
              </div>
        
    )
}