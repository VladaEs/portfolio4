import styles from './SectionMenu.module.css'
import { Link } from 'react-router-dom';
import arrowWhite from '../../images/arrow_white.png'
const SectionMenu =(props)=>{

    return(
        <Link to={props.item.link}>
        <div className={`${styles.MenuSection}  ${props.length - props.index>=2? styles.MenuUnderscore:''}`}>
            
        {props.item.name}
            <img src={arrowWhite} className={styles.arrow} />
            </div>
            </Link>
    )

}
export default SectionMenu;