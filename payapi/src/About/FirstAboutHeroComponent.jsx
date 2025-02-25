import styles from "./firstabouthero.module.css"
import picture from "../../src/assets/about/desktop/image-team-members.jpg"
import { IoAdd } from "react-icons/io5";

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

                <div className={styles.theThreeContentContainer}>

                    <div className="firstTextAndNumberContainer">
                        <div className="textContainer">
                            <p>Team Member</p>
                        </div>
                        <div className="numberAndIconContainer">
                            <div className="numberContainer">
                                <h1>300</h1>
                            </div>
                            <div className="iconContainer">
                            <IoAdd />

                            </div>
                        </div>

                    </div>

                    <div className="secondTextAndNumberContainer">
                    <div className="textContainer">
                            <p>Offices in the US</p>
                        </div>

                        <div className="numberContainer">
                                <h1>3</h1>
                            </div>
                        
                    </div>

                    <div className="thirdTextAndNumberContainer">

                        <div className="textContainer">
                                <p>Transaction Analyzed</p>
                            </div>
                            <div className="numberAndIconContainer">
                                <div className="numberContainer">
                                    <h1>10M</h1>
                                </div>
                                <div className="iconContainer">
                                <IoAdd />

                                </div>
                            </div>
                            
                    </div>

                </div>


            </div>

        </div>
    )
}