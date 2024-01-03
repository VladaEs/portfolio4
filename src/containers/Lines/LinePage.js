import styles from './LinePage.module.css'

const LinePage=(props)=>{

    return(<div className={styles.LinePage} style={{width:props.width+"%"}}></div>) 
}
export default LinePage;