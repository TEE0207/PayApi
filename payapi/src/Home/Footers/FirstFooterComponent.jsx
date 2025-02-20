import bank from "../assets/home/desktop/icon-banking-and-coverage.svg"
import finance from "../assets/home/desktop/icon-personal-finances.svg"
import payment from "../assets/home/desktop/icon-banking-and-coverage.svg"
import styles from "./firstfooter.module.css"


export default function FirstFooterComponent(){

    return(
        <div>
            <div className={styles.allContentContainer}>

                <div className={styles.firstIconHeadingParagraphContainer}>
                    <div className={styles.firstIconContainer}>
                        <img src={finance} alt="Finance" className={styles.iconContainer}/>

                    </div>

                    <div className={styles.firstHeadingContainer}>
                        <h5>Personal Finances</h5>
                    </div>

                    <div className={styles.firstParagraphContainer}>
                        <p> Consolidate financial data from multiple sources and categorize transactions up to 2 years of history. Analyze reports to reconcile activities in your account.</p>
                        
                    </div>

                </div>

                <div className={styles.secondIconHeadingParagraphContainer}>
                    <div className={styles.secondIconContainer}>
                        <img src={bank} alt="bank" className={styles.iconContainer} />

                    </div>

                    <div className={styles.secondHeadingContainer}>
                        <h5>Banking and Coverage</h5>
                        
                    </div>

                    <div className={styles.secondParagraphContainer}>
                        <p>With our platform, you can speed up account onboarding and support ongoing payments for checking, savings, credit card, and brokerage accounts.</p>
                    </div>

                </div>


                <div className={styles.thirdIconHeadingParagraphContainer}>
                    <div className={styles.thirdIconContainer}>
                        <img src={payment} alt="payment" className={styles.iconContainer} />

                    </div>

                    <div className={styles.thirdHeadingContainer}>
                        <h5>Consumer Payments</h5>
                    </div>

                    <div className={styles.thirdParagraphContainer}>
                        <p> It's easier to set up secure bank payments with us through a flow designed with the user experience in mind. Customers could instantly authenticate their account.</p>
                    </div>

                </div>
            </div>
        </div>
    )
}