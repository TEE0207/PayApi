import styles from "./aboutheader.module.css"
export default function AboutHeader(){

    return(
        
            <div className={styles.contentContainer}>
                <div className={styles.headingOneContainer}>
                  <h1> We empower innovators by delivering access to the financial system</h1>

                </div>

                 <div className={styles.headingAndParagraphContainer}>
                
                                    <div className={styles.headingContainer}>
                                        <h1>Our Vision</h1>
                                    </div>
                
                                    <div className={styles.paragraphContainer}>
                                        Our main goal is to build beautiful consumer experiences along with developer-friendly infrastructure. The result is an intelligent tool that gives everyone the ability to create amazing products that solve big problems. We are deeply focused on democratizing financial services through technology.
                
                                    </div>
                
                 </div>
            </div>
        
    )
}