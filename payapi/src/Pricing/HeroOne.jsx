import { FaCheck } from "react-icons/fa6";
import { useState, useEffect } from "react";
import styles from "./heroone.module.css"

export default function HeroOneComponent(){


    const [showParagraph, setShowParagraph] = useState(true);

    useEffect(() => {
        const screenWidth = window.innerWidth;

        // If it's a mobile device (<480px), hide paragraph immediately
        if (screenWidth < 480) {
            setShowParagraph(false);
            return;
        }

        // If it's a desktop (>1120px), remove after 2 seconds
        if (screenWidth > 1120) {
            const timer = setTimeout(() => setShowParagraph(false), 2000);
            return () => clearTimeout(timer); // Cleanup function
        }

        // If it's a tablet (780px - 1120px), do nothing (keep it visible)
    }, []); // Runs only once when the component mounts


    return(

        <div>
            <div className={styles.allContentContainer}>

                <div className={styles.headingParagraphMoneyContainer}>

                    <div className={styles.headingContainer}>
                        <h3>Free Plan</h3>

                    </div>

                    <div className={styles.paragraphContainer}>
                        {<p> Build and test using our core set of products with up to 100 API requests</p>}

                    </div>

                    <div className={styles.moneyContainer}>
                        <h1>$0.00</h1>

                    </div>
                </div>

                <div className={styles.allTextAndMarkIcon}>

                    <div className={styles.markAndTextContainer}>
                        <FaCheck style={{color : "#BA4270"}}  />
                        <p>Transaction</p>
                        
                    </div>

                    <div className={styles.markAndTextContainer}>
                        <FaCheck style={{color : "#BA4270"}} />
                        <p>Auth</p>
                    </div>

                    <div className={styles.markAndTextContainer}>
                        <FaCheck  style={{color : "#BA4270"}}/>
                        <p>Identity</p>
                    </div>

                    <div className={styles.markAndTextContainer}>
                        <FaCheck style={{display : "none"}} />
                        <p style={{paddingLeft: "1.5rem", color : "#36536B"}}>Investment</p>
                    </div>

                    <div className={styles.markAndTextContainer}>
                        <FaCheck style={{display : "none"}}  />
                        <p style={{paddingLeft: "1.5rem", color : "#36536B"}}>Assets </p>
                    </div>

                    <div className={styles.markAndTextContainer}>
                        <FaCheck style={{display : "none"}} />
                        <p style={{paddingLeft: "1.5rem", color : "#36536B"}}>Liabilities</p>
                    </div>

                    <div className={styles.markAndTextContainer}>
                        <FaCheck style={{display : "none"}} />
                        <p style={{paddingLeft: "1.5rem", color : "#36536B"}}>Income</p>
                    </div>

                </div>

                <div className="buttonContainer">
                    <button>
                        Request Assess

                    </button>
                </div>


            </div>
        </div>
    )
}