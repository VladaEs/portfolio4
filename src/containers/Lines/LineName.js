import styles from './LineName.module.css'
import LinePage from './LinePage';
import { Link } from 'react-router-dom';
const LineName=(props)=>{


    return(
        <div className={styles.LineNameWrapper}>
            <Link to="/"><img src='images/arrow.png' className={styles.ArrowBack}/></Link>
            <div className={styles.LineName}>{props.children}</div>
            <div className={styles.line} />
        </div>
    )
}
export default LineName;