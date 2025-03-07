import styles from "./firstabouthero.module.css"
import desktopPicture from "../../src/assets/about/desktop/image-team-members.jpg"
import tabletPicture from "../../src/assets/about/tablet/image-team-members.jpg"
import mobilePicture from "../../src/assets/about/mobile/image-team-members.jpg"
import { IoAdd } from "react-icons/io5";
import CountUp from 'react-countup';


export default function FirstAboutHeroComponent(){

    return(
        
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
                    <picture className={styles.pictureContainer}>
                        <source media="(max-width: 480px)" srcSet={mobilePicture} />
                        <source media="(max-width: 1120px)" srcSet={tabletPicture} className={styles.picImage}/>
                        <img src={desktopPicture}alt="members picture" className={styles.picImage}/>                        
                    </picture>
                        {/* <img src={picture}alt="members picture" className={styles.picImage}/> */}


                    </div>

                </div>

                <div className={styles.theThreeContentContainer}>

                    <div className={styles.firstTextAndNumberContainer}>

                        <div className={styles.textContainer}>
                            <p>Team Member</p>
                        </div>

                        <div className={styles.numberAndIconContainer}>
                            
                            <div className={styles.numberContainer}>
                            <h1> <CountUp start={101} end={300} duration={10} delay={2}/></h1>

                            </div>
                            <div className={styles.iconContainer}>
                            <IoAdd />

                            </div>
                        </div>

                    </div>

                    <div className={styles.secondTextAndNumberContainer}>
                    <div className={styles.textContainer}>
                            <p>Offices in the US</p>
                        </div>

                        <div className={styles.numberContainer}>
                        <h1> <CountUp start={0} end={3} duration={5} delay={2}/></h1>
                        </div>
                        
                    </div>

                    <div className={styles.thirdTextAndNumberContainer}>

                        <div className={styles.textContainer}>
                                <p>Transaction Analyzed</p>
                            </div>
                            <div className={styles.numberAndIconContainer}>
                                <div className={styles.numberContainer}>
                                <h1> <CountUp start={1} end={10} duration={5} delay={2}/>M</h1>
                                </div>
                                <div className={styles.iconContainer}>
                                <IoAdd />

                                </div>
                            </div>
                            
                    </div>

                </div>


            </div>

        
    )
}