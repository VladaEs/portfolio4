import styles from './LeftSideTemplate.module.css'
import styles2 from './RightSideTemplate.module.css'

const RightSIdeTemplate=(props)=>{
    return(
    <div className={styles2.TemplateWrapperRight}>
        <img src={props.item.img} className={styles.imgProj}/>
        <div className={styles.DescrAll}>
            <span>{props.item.name}</span> 
            <span>{props.item.description}</span> 
            <div className={styles.buttons}>
                <button className={styles.btnSource}><a href={props.item.repo} target='_blank'> Source Code</a></button>
                <button className={styles.btnPreview}><a href={props.item.view} target='_blank'>Live preview</a></button>
            </div>
        </div>
    </div>
    
)}
export default RightSIdeTemplate;