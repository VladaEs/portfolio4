import styles from './LineName.module.css'
import LinePage from './LinePage';
import arrowImage from '../../images/arrow.png'
import { Link } from 'react-router-dom';
const LineName=(props)=>{


    return(
        <div className={styles.LineNameWrapper}>
            <Link to="/"><img src={arrowImage} className={styles.ArrowBack}/></Link>
            <div className={styles.LineName}>{props.children}</div>
            <div className={styles.line} />
        </div>
    )
}
export default LineName;