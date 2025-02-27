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

        </div>
    )
}

export default ContactPage