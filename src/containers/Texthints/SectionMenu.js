import styles from './SectionMenu.module.css'
import { Link } from 'react-router-dom';
const SectionMenu =(props)=>{

    return(
        <Link to={props.item.link}>
        <div className={`${styles.MenuSection}  ${props.length - props.index>=2? styles.MenuUnderscore:''}`}>
            
        {props.item.name}
            <img src='images/arrow_white.png' className={styles.arrow} />
            </div>
            </Link>
    )

}
export default SectionMenu;