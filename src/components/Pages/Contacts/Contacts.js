import styles from './Contacts.module.css'
import Backgroung from '../../../containers/Background/background';
import LineName from '../../../containers/Lines/LineName';
import ContactsSocial from './ContactsSocials';
import githubImage from '../../../images/social/github.png'
import instagramImage from '../../../images/social/instagram.png'
import linkedInImage from '../../../images/social/linkedIn.png'
import emailImage from '../../../images/social/email.png'


import { useRef ,useState} from 'react';
const Contacts =()=>{
    const links= [
        {img:githubImage, name: "GitHub" , link:"https://github.com/VladaEs"},
        {img:instagramImage, name: "Instagram", link:"https://www.instagram.com/_vlad.voronin_/"},
        {img:linkedInImage, name: "LinkedIn", link:"https://linkedin.com/in/vladyslav-voronin-fs"},
    ];

    const [PopUpActive, SetPopUpActive]=useState(false);

    const ref= useRef("lalalal");
    const popUp =useRef(false);
    const MailHandler=()=>{
        console.log(ref.current.textContent);
        
            navigator.clipboard.writeText(ref.current.textContent).then(function() {

            }).catch(function(error) {
                console.error('CannotCopy');
            });
            SetPopUpActive(true);
            setTimeout(()=>{
                SetPopUpActive(false);               
            },1500);

    }
    return(
        <div className={styles.pageWrapper}>
            <Backgroung />
            <LineName>Vladyslav Voronin</LineName>
            <div className={styles.center}>
                <span >Feel free to contact me via these social-media:</span>
                <div className={styles.links}>
                    {links.map((item,index) =>(<ContactsSocial key={index} item={item}/>))}
                </div>
                <div className={styles.EmailWrapper} onClick={MailHandler}>
                    <span className={`${styles.popUp} ${PopUpActive==true?styles.popUpActive:''}` } >Copied to clipboard</span>
                    <img src={emailImage}/>
                    <span>My email:</span>
                    <span ref={ref}>vooronin2005@gmail.com</span>
                </div>
            </div>
        </div>
    )
}
export default Contacts;