import styles from "./secondabouthero.module.css"

export default function SecondAboutHeroComponent(){

    return(
        <div>
            <div className={styles.allContentContainer}>

                <div className={styles.firstTitleAndTextContainer}>

                    <div className={styles.titleOneContainer}>
                        <h1>The Culture</h1>
                    </div>

                    <div className={styles.textOneContainer}>
                        <p>We strongly believe there's always an opportunity to learn from each other outside of day-to-day work, whether it's company-wide offsites, internal hackathons, or co-worker meetups. We always value cross-team collaboration and diversity of thought, no matter the job title.</p>
                    </div>

                </div>

                <div className={styles.secondTitleAndTextContainer}>
                    
                    <div className={styles.titleTwoContainer}>
                        <h1>The People</h1>

                    </div>
                    <div className={styles.textTwoContainer}>
                        <p>The People We're all passionate about building a more efficient and inclusive financial infrastructure together. At PayAPI, we have diverse backgrounds and skills.</p>

                    </div>
                </div>
            </div>
        </div>
    )
}