import phone from "../assets/home/desktop/illustration-phone-mockup.svg"
import InputNschduleComponent from "../../OtherComponent/InputNSchduleComponent"
import styles from "./secondheader.module.css"

export default function SecondHeaderComponent (){

    return(

    

        <div>

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

                <div className="phoneDeviceContainer">
                    <img src={phone} alt="Phone" />

                </div>

            </div>
        
        </div>
    )
}