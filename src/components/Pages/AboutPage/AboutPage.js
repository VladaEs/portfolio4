import styles from './AboutPage.module.css'
import LineName from '../../../containers/Lines/LineName';
import ImageWrapper from './ImageWrapper/ImageWrapper';
import TextWrapper from './TextWrapper/TextWrapper';
import Backgroung from '../../../containers/Background/background';
import { Link } from 'react-router-dom';
const AboutPage = ()=>{
    const TextData = [
        {
            title: "About Me",
            description: "I am a Full Stack Developer with hands-on experience in web development and IT support. Currently based in the UK, I have a strong foundation in front-end and back-end technologies, including React.js, Laravel, and PHP. Passionate about problem-solving and continuous learning, I thrive in dynamic environments where I can contribute to innovative projects."
        },
        {
            title: "My Skills",
            description: "I have expertise in building and optimizing web applications using React.js, Next.js, and Tailwind CSS for front-end development. On the back end, I work with PHP, Laravel, Node.js, and MySQL. I am also skilled in C++, Python, and Docker, with experience managing Linux servers and developing RESTful APIs."
        },
        {
            title: "What I Am Looking For",
            description: "As a Full Stack Developer, I am eager to join a team that values innovation and collaboration. I seek opportunities where I can apply my technical skills, contribute to impactful projects, and continue growing as a developer. I am particularly interested in roles that involve web application development, system optimization, and problem-solving in a fast-paced environment."
        }
    ];

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