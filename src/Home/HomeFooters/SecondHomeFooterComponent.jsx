import InputNschduleComponent from "../../OtherComponent/InputNSchduleComponent";
import styles from "./secondfooter.module.css"


export default function SecondHomeFooterComponent(){

    return(
        
            <div className={styles.allContentContainer}>

                <div className={styles.theHeadingText}>
                    <h1>Ready To Start?</h1>
                </div>

                <div className={styles.buttonContainer}>
                    <InputNschduleComponent />
                </div>

            </div>
        
    )
}