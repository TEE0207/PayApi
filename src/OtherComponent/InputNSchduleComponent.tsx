
import style from "./inputnschdule.module.css"

export default function InputNschduleComponent(){


  


    // const back = {
    //     backgroundColor : "pink",
    //     height : "500px"
    // }

    return(
        
            <div className={style.inputAndSchduleContainer}>
                <input type="email" name="email" placeholder="Enter email address" className={style.input}/>
                <button className={style.buttonS}>Schedule a Demo</button>
                
            </div>
        
    )
}