import SecondHomeFooterComponent from "../Home/HomeFooters/SecondHomeFooterComponent";
import AboutHeader from "./AboutHeader";
import FirstAboutHeroComponent from "./FirstAboutHeroComponent";
import SecondAboutHeroComponent from "./SecondAboutHeroComponent";
import styles from "./aboutpage.module.css"

export default function AboutPage(){

    return(
        <div className={styles.parentContainer}>
            <AboutHeader />
            <FirstAboutHeroComponent />
            {/* <SecondAboutHeroComponent />
            <SecondHomeFooterComponent /> */}
        </div>
    )
}