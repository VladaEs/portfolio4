import styles from './ArticleHint.module.css'

const ArticleHing=(props)=>{

    return(<div className={styles.ArticleHint}>{props.children}</div>) 
}
export default ArticleHing;
