import styles from './ImageWrapper.module.css'
import imageMe from '../../../../images/ImageMe.jpg'
const ImageWrapper=()=>{

    return(
        <div className={styles.ImageWrapper}>
            <img src={imageMe} className={styles.image} />
        </div>
    );
}
export default ImageWrapper;