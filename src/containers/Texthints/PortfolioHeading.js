import styles from './PortfolioHeading.module.css'
const PortfolioHeadig=(props)=>{

    return(
        <span className={styles.Heading} >{props.children}</span>
    )
}
export default PortfolioHeadig;