import SecondHomeFooterComponent from "../Home/HomeFooters/SecondHomeFooterComponent";
import AboutHeader from "./AboutHeader";
import FirstAboutHeroComponent from "./FirstAboutHeroComponent";
import SecondAboutHeroComponent from "./SecondAboutHeroComponent";

export default function AboutPage(){

    return(
        <div style={{width : "100%"}}>
            <AboutHeader />
            <FirstAboutHeroComponent />
            <SecondAboutHeroComponent />
            <SecondHomeFooterComponent />
        </div>
    )
}