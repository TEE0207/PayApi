import FirstHeaderComponent from "./HomeHeaders/FirstHeaderComponent"
import FirstHeroComponent from "./HomeHeros/FirstHeroComponent"
import SecondHeroComponent from "./HomeHeros/SecondHeroComponent"
import ThirdHeroComponent from "./HomeHeros/ThirdHeroComponent"
import FirstFooterComponent from "./HomeFooters/FirstFooterComponent"
import SecondHomeFooterComponent from "./HomeFooters/SecondHomeFooterComponent"
import styles from "./homepage.module.css"


export default function HomePage(){

    return(
        <div className={styles.headings}>
           <FirstHeaderComponent />
           <FirstHeroComponent />
           <SecondHeroComponent />
           <ThirdHeroComponent />
           <FirstFooterComponent />
           {/* <SecondHomeFooterComponent /> */}
        </div>
    )
}