import styles from './AboutPage.module.css'
import LineName from '../../../containers/Lines/LineName';
import ImageWrapper from './ImageWrapper/ImageWrapper';
import TextWrapper from './TextWrapper/TextWrapper';
import Backgroung from '../../../containers/Background/background';
import { Link } from 'react-router-dom';
const AboutPage = ()=>{
    const TextData=[
        {title: "About me", description:"I am a highly motivated student who is currently pursuing a master's degree in IT. My university gives me a solid foundation in the math, written communication and digital marketing skills ."},
        {title: "My skills", description:"I am actively mastering C++ with a focus on object-oriented programming, while also delving into web development through JavaScript with expertise in React and Next.js. Additionally, I am proficient in PHP, and have a solid foundation in HTML, CSS, and vanilla JavaScript."},
        {title: "What I am looking for", description:"As a junior React developer entering the workforce, I am eager to join a collaborative team that values continuous learning, offers challenging projects, and provides mentorship opportunities. I seek an environment that fosters growth, embraces diversity, and fuels innovation in web development."},

    ]

    return(
    <div className={styles.pageWrapper}>
        <Backgroung/>

        
        <LineName>Vladyslav Voronin</LineName>
        <div className={styles.ImgDescr}>
            <ImageWrapper/>
            <TextWrapper textData={TextData}/>
        </div>
    </div>
    )}
export default AboutPage;