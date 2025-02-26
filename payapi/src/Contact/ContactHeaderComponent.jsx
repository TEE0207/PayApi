import styles from "./contactheader.module.css"

const ContactHeaderComponent = function(){

    return(
        <div>
            <div className={styles.contentContainer}>

                    <div className={styles.headingContainer}>
                        <h1> Submit a help request and we’ll get in touch shortly.</h1>

                    </div>
            </div>


        </div>

    )
}
export default ContactHeaderComponent