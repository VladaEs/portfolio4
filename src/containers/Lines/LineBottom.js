import styles from './LineBottom.module.css'
const LineBottom= (props)=>{
    return(<div className={styles.LinePage} style={{width:props.width+"%"}}></div>)
}
export default LineBottom