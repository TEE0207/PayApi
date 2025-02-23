import styles from "./thirdhero.module.css"
import phones from "../../assets/home/desktop/illustration-simple-ui.svg"
export default function ThirdHeroComponent(){

    return(
        <div>
            <div className={styles.allContentContainer}>

                <div className={styles.headingAndParagraphContainer}>

                   <div className={styles.headingContainer}>
                       <h1>Simple UI & UX</h1>
                   </div>

                   <div className={styles.paragraphContainer}>

                        <p> Our pre-built form is easy to integrate in your app or website's checkout flow and designed to optimize conversion.</p>
                   </div>
                </div>

                <div className={styles.the2phonesContainer}>

                    <img src={phones} alt="Phones" className={styles.phonesImage}/>
                </div>

            </div>
        </div>
    )
}