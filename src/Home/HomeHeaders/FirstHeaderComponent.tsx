// import phone from "../../assets/home/desktop/illustration-phone-mockup.svg"
import InputNschduleComponent from "../../OtherComponent/InputNSchduleComponent"
import styles from "./firstheader.module.css"

export default function FirstHeaderComponent (){

    return(

    

        

            <div className={styles.allContentContainer}>

                <div className={styles.headingEmailContactContainer}>

                    <div className={styles.headingContainer}>
                        <h1> Start building with our APIs for absolutely free.</h1>

                    </div>

                    <div className={styles.emailContactContainer}>
                        <InputNschduleComponent />

                        <div className={styles.questionAndContact}>
                            <p> Have any questions? <span className={styles.contact}>Contact Us</span></p>
                            
                        </div>

                    </div>

                </div>

                <div className={styles.phoneDeviceContainer}>
                    <img src="/desktop/illustration-phone-mockup.svg" alt="Phone" className={styles.phoneImage} />

                </div>

            </div>
        
        
    )
}