import styles from './ContactsSocial.module.css'
const ContactsSocial =(props)=>{

    return(
        <a href={props.item.link} target="_blank">
            <div className={styles.ItemContacts}>
                <img src={props.item.img} className={styles.imgContacts}/>
                <span>{props.item.name}</span>
            </div>
        </a>
    )
}
export default ContactsSocial;