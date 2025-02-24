import styles from "./firstabouthero.module.css"
import picture from "../../src/assets/about/desktop/image-team-members.jpg"
export default function FirstAboutHeroComponent(){

    return(
        <div>
            <div className={styles.allContentContainer}>

                <div className={styles.headingParagraghImageContainer}>

                    <div className={styles.headingAndParagraphContainer}>

                        <div className={styles.headingContainer}>
                            <h1>Our Business</h1>

                        </div>

                        <div className={styles.paragraphContainer}>
                            At the core of our platform is the technical infrastructure APIs that connect consumers. Our innovative product provides key insights for businesses and individuals, as well as robust reporting for traditional financial institutions and developers.
                        </div>
                    </div>

                    <div className={styles.imageContainer}>
                        <img src={picture}alt="members picture" className={styles.picImage}/>


                    </div>

                </div>

          


            </div>

        </div>
    )
}