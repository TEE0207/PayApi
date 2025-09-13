
import styles from "./contactherotwo.module.css"
import LogoComponent from "../OtherComponent/LogosComponent"

const ContactHeroTwo = function(){
    return(
        <div className={styles.contentContainer}>
            <div className={styles.headingContainer}>
                <h3>
                  Join the thousands of innovators already building with us
                </h3>

            </div>
            <LogoComponent />
        </div>
    )
}

export default ContactHeroTwo