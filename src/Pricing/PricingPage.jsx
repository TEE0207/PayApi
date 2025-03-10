import SecondHomeFooterComponent from "../Home/HomeFooters/SecondHomeFooterComponent";
import HeaderComponent from "./Header";
import HeroOneComponent from "./HeroOne";
import HeroThreeComponent from "./HeroThree";
import HeroTwoComponent from "./HeroTwo";
import styles from "./pricingpage.module.css"


export default function PricingPage(){

    return(
        <div className={styles.pricingPageContainer}>
            <HeaderComponent />

            <div className={styles.herosContainer}> 
                    <HeroOneComponent />
                    <HeroTwoComponent />
                    <HeroThreeComponent />
            
            </div>

            <SecondHomeFooterComponent />
            
            
        </div>
    )
}