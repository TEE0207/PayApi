import picture from "../assets/home/desktop/illustration-easy-to-implement.svg"
import styles from "./secondhero.module.css"
export default function SecondHeroComponent(){

    return(
        <div>
            <div className={styles.allContentContainer}>

                <div className={styles.pictureContainer}>
                    <img src={picture} alt="image" className={styles.picImage}/>

                </div>

                <div className={styles.headingAndParagraphContainer}>
                    <div className={styles.headingContainer}>
                        <h1>Easy To Implement</h1>

                    </div>

                    <div className={styles.paragraphContainer}>
                    Our API comes with just a few lines of code. You'll be up and running in no time. We built our documentation page to integrate payments functionality with ease. 

                    </div>
                </div>
            </div>
        </div>
    )
}