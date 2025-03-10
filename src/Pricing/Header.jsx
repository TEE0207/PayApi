import styles from "./header.module.css"
export default function HeaderComponent(){

    return(
        
            <div className={styles.contentContainer}>
                <div className={styles.headingContainer}>
                    <h1>Pricing</h1>
                </div>
            </div>
        
    )
}