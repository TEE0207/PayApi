import { useState } from "react"
import styles from "./contactheroone.module.css"

 const ContantHeroOne = () => {
    const [nameValue, setNameValue] = useState("")
    const [nameError, setNameError] = useState(false); // Track if error exists

    const manageName = (e) => {
        const inputValue = e.target.value;
        setNameValue(inputValue);

        // Show error message if input is empty
        if (inputValue.trim().length === 0) {
            setNameError(true);
        } else {
            setNameError(false);
        }
    };

    return(
        <div>
            <form>

               <div className="nameContainer">
                    <input
                        type="text"
                        placeholder="Name"
                        value={nameValue}
                        name="name"
                        onChange={manageName}
                        className={`inputField ${nameError ? "error" : ""}`} // Add error class if needed
                    />
                    {nameError && <p className="errorMessage">This field can't be empty</p>}
                </div>

                <div className="emailContainer">
                    <input type="email"
                    
                    
                    />
                </div>


                <div className="companyNameContainer">
                        <input type="text"
                        
                        
                        />
                </div>

                <div className="titleContainer">
                    <input type="text"
                    
                    
                    />
                </div>

                <div className="textAreaContainer">
                    <textarea name="essay" placeholder="Message"></textarea>
                </div>

               
                  
                  <div className="buttonContainer">
                    <button className={styles.button} onClick={(e)=>formSubmitter(e)}>Submit</button>
                  </div>

            </form>

        </div>
    )
}
export default ContantHeroOne