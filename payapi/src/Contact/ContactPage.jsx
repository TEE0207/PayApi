import InputNschduleComponent from "../OtherComponent/InputNSchduleComponent"
import ContactHeaderComponent from "./ContactHeaderComponent"
import ContactHeroOne from "./ContactHeroOne"
import ContactHeroTwo from "./ContactHeroTwo"
import styles from "./contactpage.module.css"

const ContactPage = ()=>{

    return(
        <div>
                <ContactHeaderComponent />


                <div className={styles.heroContainers}>
                    <ContactHeroOne />
                    <ContactHeroTwo />
                </div>

                <div className={styles.firstFooterContainer}>

                    <div className={styles.titleContainer}>
                        <h1>Ready To Start ?</h1>
                    </div>
                    <InputNschduleComponent />
                

                </div>


        </div>
    )
}

export default ContactPage