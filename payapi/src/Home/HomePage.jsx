import SecondHeaderComponent from "./Headers/FirstHeaderComponent"
import style from "./homepage.module.css"
export default function HomePage(){

    return(
        <div className={style.headings}>
           <SecondHeaderComponent />
        </div>
    )
}