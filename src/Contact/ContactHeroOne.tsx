import { useState } from "react"
import styles from "./contactheroone.module.css"
import { IoMdCheckbox, IoMdSquareOutline } from "react-icons/io"; 

 const ContactHeroOne: React.FC = () => {

    const [nameValue, setNameValue] = useState <string>("")
    const [nameError, setNameError] = useState<boolean>(false); // Track if error name exists

    const [emailValue, setEmailValue] = useState <string> ("")
    const [emailError, setEmailError] = useState<string | false> (false); // Track if error email exists

    const [companyNameValue, setCompanyNameValue] = useState <string> ("")
    const [companyNameError, setCompanyNameError] = useState<boolean>(false); // Track if error CompanyName exists

    const [titleValue, setTitleValue] = useState<string> ("")
    const [titleError, setTitleError] = useState <boolean>(false); // Track if error Title exists

    const [messageValue, setMessageValue] = useState <string>("")
    const [messageError, setMessageError] = useState <boolean>(false); // Track if error Message exists

    const [isChecked, setIsChecked] = useState<boolean>(false); // Track checkbox state

    const toggleCheckbox = () => {
        setIsChecked((prev) => !prev); // Toggle state
    };


    const manageName = (e : React.ChangeEvent<HTMLInputElement> ) => {
        const inputNameValue = e.target.value;
        setNameValue(inputNameValue);

        // Show error message if input is empty
        if (inputNameValue.trim().length === 0) {
            setNameError(true);
        } else {
            setNameError(false);
        }
    };

    const manageEmail = (e : React.ChangeEvent<HTMLInputElement>) => {
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

    const manageCompanyName = (e : React.ChangeEvent<HTMLInputElement>) =>{
        const inputCompanyNameValue = e.target.value 
        setCompanyNameValue(inputCompanyNameValue)

        if (inputCompanyNameValue.trim().length === 0){
            setCompanyNameError(true)
        }else{
            setCompanyNameError(false)
        }

    }

    const manageTitleValue = (e : React.ChangeEvent<HTMLInputElement>) => {
        const inputTitleValue = e.target.value
        setTitleValue(inputTitleValue)

        if (inputTitleValue.trim().length === 0) {
            setTitleError(true);
        } else {
            setTitleError(false);
        }
    }


    const manageMessageValue = (e : React.ChangeEvent<HTMLInputElement>) => {
        const inputMessageValue = e.target.value
        setMessageValue(inputMessageValue)

        if (inputMessageValue.trim().length === 0) {
            setMessageError(true);
        } else {
            setMessageError(false);
        }
    }

    const formSubmitter = (e : React.FormEvent<HTMLFormElement>) => {
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

        if (messageValue.trim() === "") {
            setTitleError(true);
            isValid = false;
        }
        if (isValid) {
            console.log("Form submitted:", { nameValue, emailValue, companyNameValue, titleValue, messageValue});
        }

         // Reset form values after successful submission
         setNameValue("");
         setEmailValue("");
         setCompanyNameValue("");
         setTitleValue("");
         setMessageValue("")


         // ✅ Clear all error states
        setNameError(false);
        setEmailError(false);
        setCompanyNameError(false);
        setTitleError(false);
        setMessageError(false)
    }

    return(
        <div className={styles.allContentContainer}>
            <form onSubmit={formSubmitter} className={styles.formContainer}>

                <div className={styles.allInputField}>    
                    <div className={styles.nameContainer}>
                        <input
                            type="text"
                            placeholder="Name"
                            value={nameValue}
                            name="name"
                            onChange={manageName}
                            className={`${styles.inputField} ${nameError ? styles.error : ""}`} // Add error class if needed
                        />
                        {nameError && <p className={styles.errorMessage}>This field can't be empty</p>}
                    </div>

                    <div className={styles.emailContainer}>
                        <input type="email"
                        placeholder="Email Address"
                        value= {emailValue}
                        name="email"
                        onChange={manageEmail}
                        className={`${styles.inputField} ${emailError ? styles.error : ""}`}
                        />
                        {emailError && <p className={styles.errorMessage}>{emailError}</p>}
                    </div>


                    <div className={styles.companyNameContainer}>
                            <input
                            type="text"
                            placeholder="Company Name"
                            name="CompanyName"
                            value={companyNameValue}
                            onChange={manageCompanyName}
                            className={`${styles.inputField} ${companyNameError ? styles.error : ""}`}
                            />
                        {companyNameError && <p className={styles.errorMessage}>This Field cannot be empty</p>}

                    </div>

                    <div className={styles.titleContainer}>
                        <input 
                        type="text"
                        placeholder="Title"
                        name="title"
                        value = {titleValue}
                        onChange={manageTitleValue}
                        className={`${styles.inputField} ${titleError ? "error" : ""}`}
                        />
                        {titleError && <p className={styles.errorMessage}>This  Title Field cannot be empty</p>}
                    </div>

                    <div className={styles.messageContainer}>
                        <input 
                        type="text"
                        placeholder="Message"
                        name="message"
                        value = {messageValue}
                        onChange={manageMessageValue}
                        className={`${styles.MessageInputField} ${messageError ? "error" : ""}`}
                        />
                        {messageError && <p className={styles.errorMessage}>This Field cannot be empty</p>}
                    </div>
                </div>

                <div className={styles.checkAndTextContainer}>

                    {/* <div className={styles.checkContainer} onClick={toggleCheckbox} >

                        {isChecked ? (
                            <IoMdCheckbox className={styles.iconContainer} /> // Checked icon
                        ) : (
                            <IoMdSquareOutline className={styles.UncheckedIconContainer} /> // Unchecked icon
                        )}
                    </div> */}

                    <label className={styles.checkContainer}>
                        <input 
                            type="checkbox" 
                            checked={isChecked} 
                            onChange={toggleCheckbox} 
                            className={styles.hiddenCheckbox} 
                        />
                        {isChecked ? (
                            <IoMdCheckbox className={styles.iconContainer} /> // Checked icon
                        ) : (
                            <IoMdSquareOutline className={styles.UncheckedIconContainer} /> // Unchecked icon
                        )}
                    </label>

                    <div className={styles.textContainer}>
                        <p>Stay up-to-date with company announcements and updates to our API</p>

                    </div>

                </div>
                  
                <div className={styles.buttonContainer}>
                  <button type="submit" className={styles.button}>Submit</button>
                </div>

            </form>

        </div>
    )
}

export default ContactHeroOne