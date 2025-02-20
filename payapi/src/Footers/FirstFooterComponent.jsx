import bank from "../assets/home/desktop/icon-banking-and-coverage.svg"
import finance from "../assets/home/desktop/icon-personal-finances.svg"
import payment from "../assets/home/desktop/icon-banking-and-coverage.svg"
export default function FirstFooterComponent(){

    return(
        <div>
            <div className="allContentContainer">
                <div className="firstIconHeadingParagraphContainer">
                    <div className="firstIconContainer">
                        <img src={finance} alt="" />

                    </div>

                    <div className="firstHeadingContainer">
                        <h5>Personal Finances</h5>
                    </div>

                    <div className="firstParagraphContainer">
                        <p> Consolidate financial data from multiple sources and categorize transactions up to 2 years of history. Analyze reports to reconcile activities in your account.</p>
                        
                    </div>

                </div>

                <div className="secondIconHeadingParagraphContainer">
                    <div className="secondIconContainer">
                        <img src={bank} alt="bank" />

                    </div>

                    <div className="secondHeadingContainer">
                        <h5>Banking and Coverage</h5>
                        
                    </div>

                    <div className="secondParagraphContainer">
                        <p>With our platform, you can speed up account onboarding and support ongoing payments for checking, savings, credit card, and brokerage accounts.</p>
                    </div>

                </div>


                <div className="thirdIconHeadingParagraphContainer">
                    <div className="thirdIconContainer">
                        <img src={payment} alt="payment" />

                    </div>

                    <div className="thirdHeadingContainer">
                        <h5>Consumer Payments</h5>
                    </div>

                    <div className="thirdParagraphContainer">
                        <p> It's easier to set up secure bank payments with us through a flow designed with the user experience in mind. Customers could instantly authenticate their account.</p>
                    </div>

                </div>
            </div>
        </div>
    )
}