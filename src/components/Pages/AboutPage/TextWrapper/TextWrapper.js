import styles from './TextWrapper.module.css'
import { useState } from 'react';
const TextWrapper=(props)=>{
    const [ActiveMenu, setActiveMenu]=useState(0);
    const clickHandler=(event)=>{
        setActiveMenu(event.target.getAttribute("value"));
    }
    
    let liElem=[];
    for(let i = 0; i< props.textData.length;i++){
        if(i==ActiveMenu){
            liElem.push(<li onClick={clickHandler} value={i} className={styles.active} key={i}></li>)
            continue;
        }
        liElem.push(<li onClick={clickHandler} value={i} key={i}></li>)
    }
    return(
    <div className={styles.TextWrapper}>
        <div className={styles.title}>{props.textData[ActiveMenu].title}</div>
        <div className={styles.description}>{props.textData[ActiveMenu].description}</div>

        <div className={styles.controls}>
            <ul>
                {liElem}
            </ul>
        </div>
    </div>
)}
export default TextWrapper;