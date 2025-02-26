import { useState } from "react"
import styles from "./contactheroone.module.css"

 const ContantHeroOne = () => {
    const [nameValue, setNameValue] = useState("")
    const [nameError, setNameError] = useState(false); // Track if error name exists

    const [emailValue, setEmailValue] = useState ("")
    const [emailError, setEmailError] = useState(false); // Track if error email exists

    const [companyNameValue, setCompanyNameValue] = useState ("")
    const [companyNameError, setCompanyNameError] = useState(false); // Track if error CompanyName exists

    const [titleValue, setTitleValue] = useState ("")
    const [titleError, setTitleError] = useState(false); // Track if error CompanyName exists

    const manageName = (e) => {
        const inputNameValue = e.target.value;
        setNameValue(inputNameValue);

        // Show error message if input is empty
        if (inputNameValue.trim().length === 0) {
            setNameError(true);
        } else {
            setNameError(false);
        }
    };

    const manageEmail = (e) => {
        const inputEmailValue = e.target.value
        setEmailValue(inputEmailValue)


        if (inputEmailValue.trim().length === 0) {
            setEmailError("This field can't be empty");
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputEmailValue)) {
            setEmailError("Enter a valid email address");
        } else {
            setEmailError(false);
        }


    }

    const manageCompanyName = (e) =>{
        const inputCompanyNameValue = e.target.value 
        setCompanyNameValue(inputCompanyNameValue)

        if (inputCompanyNameValue.trim().length === 0){
            setCompanyNameError(true)
        }else{
            setCompanyNameError(false)
        }

    }

    const manageTitleValue = (e) => {
        const inputTitleValue = e.target.value
        setTitleValue(inputTitleValue)

        if (inputTitleValue.trim().length === 0) {
            setTitleError(true);
        } else {
            setTitleError(false);
        }
    }

    const formSubmitter = (e) => {
        e.preventDefault()

        let isValid = true;

        if (nameValue.trim() === "") {
            setNameError(true);
            isValid = false;
        }

        if (emailValue.trim() === "") {
            setEmailError("This field can't be empty");
            isValid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
            setEmailError("Enter a valid email address");
            isValid = false;
        }

        if (companyNameValue.trim() === "") {
            setCompanyNameError(true);
            isValid = false;
        }
        if (titleValue.trim() === "") {
            setTitleError(true);
            isValid = false;
        }
        if (isValid) {
            console.log("Form submitted:", { nameValue, emailValue, companyNameValue, titleValue });
        }

         // Reset form values after successful submission
         setNameValue("");
         setEmailValue("");
         setCompanyNameValue("");
         setTitleValue("");


         // ✅ Clear all error states
        setNameError(false);
        setEmailError(false);
        setCompanyNameError(false);
        setTitleError(false);
    }

    return(
        <div>
            <form onSubmit={formSubmitter}>

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
                    placeholder="Email Address"
                    value= {emailValue}
                    name="email"
                    onChange={manageEmail}
                    className={`inputField ${emailError ? "error" : ""}`}
                    />
                    {emailError && <p className="errorMessage">{emailError}</p>}
                </div>


                <div className="companyNameContainer">
                        <input
                         type="text"
                         placeholder="Company Name"
                         name="CompanyName"
                         value={companyNameValue}
                         onChange={manageCompanyName}
                         className={`inputField ${companyNameError ? "error" : ""}`}
                        />
                       {companyNameError && <p className="errorMessage">This Field cannot be empty</p>}

                </div>

                <div className="titleContainer">
                    <input 
                    type="text"
                    placeholder="Title"
                    name="Title"
                    value = {titleValue}
                    onChange={manageTitleValue}
                    className={`inputField ${titleError ? "error" : ""}`}
                    />
                    {titleError && <p className="errorMessage">This  Title Field cannot be empty</p>}
                </div>

                <div className="textAreaContainer">
                    <textarea name="essay" placeholder="Message"></textarea>
                </div>

                 <div className="checkAndTextContainer">

                    <div className="checkContainer">

                    </div>
                    <div className="textContainer">
                        <p>Stay up-to-date with company announcements and updates to our API</p>

                    </div>

                 </div>
                  
                  <div className="buttonContainer">
                    <button type="submit" className={styles.button}>Submit</button>
                  </div>

            </form>

        </div>
    )
}

export default ContantHeroOne