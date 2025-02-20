
import style from "./inputnschdule.module.css"

export default function InputNschduleComponent(){


  


    // const back = {
    //     backgroundColor : "pink",
    //     height : "500px"
    // }

    return(
        <div  >
            <div className={style.inputAndSchduleContainer}>
                <div><input type="email" name="email" placeholder="Enter email address" className={style.input}/></div>
                <div><button className={style.buttonS}>Schedule a Demo</button></div>
                
            </div>
        </div>
    )
}