import SecondHeaderComponent from "./SecondHeaderComponent"
import style from "./theheadings.module.css"
export default function TheHeadings(){

    return(
        <div className={style.headings}>
           <SecondHeaderComponent />
        </div>
    )
}