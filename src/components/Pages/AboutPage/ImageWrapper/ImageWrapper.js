import styles from './ImageWrapper.module.css'
const ImageWrapper=()=>{

    return(
        <div className={styles.ImageWrapper}>
            <img src='images/ImageMe.jpg' className={styles.image} />
        </div>
    );
}
export default ImageWrapper;