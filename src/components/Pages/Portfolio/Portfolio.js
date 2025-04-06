import styles from './Portfolio.module.css'
import LineName from '../../../containers/Lines/LineName'
import Backgroung from '../../../containers/Background/background'
import PortfolioHeadig from '../../../containers/Texthints/PortfolioHeading'
import LeftSideTemplate from './ProjectsTemplates/LeftSideTemplate'
import RightSIdeTemplate from './ProjectsTemplates/RightSideTemplate'
import phantomGunImg from '../../../images/projects/react/phantom.png'
import todoApp from '../../../images/projects/react/todoApp.png'
import chinaCart from '../../../images/projects/react/ChinaCart.png'
import gradientDesign from '../../../images/projects/react/GradientDesign.png'
import pasteBin from '../../../images/projects/react/PasteBin.png'


import layoutEffect from '../../../images/projects/pureJs/3dLayout.png'
import calculator from '../../../images/projects/pureJs/calculator.png'
import keyboardImage from '../../../images/projects/pureJs/keyboard.png'
import weatherImage from '../../../images/projects/pureJs/weather.png'
import RockPaperScissord from '../../../images/projects/pureJs/Rock Paper Scissors.png'
import IntersectionObserver from '../../../images/projects/pureJs/intersectionObserver.png'


const Portfolio = ()=>{

    const ReactJs=[
        {img:pasteBin ,name:"Pastebin Clone – Laravel-Based Text Sharing Platform", 
            description:"I built a fully functional Pastebin clone using the Laravel framework, enabling users to paste, store, and share text snippets effortlessly. The platform supports syntax highlighting, expiration settings, and privacy controls (public, unlisted, private pastes). To ensure optimal performance, I implemented a cron job for automatic cleanup of expired pastes. The project follows best practices in security, authentication, and database management, delivering a seamless user experience. Tech Stack: Laravel, MySQL, Blade Templates, JavaScript",
             repo: "https://github.com/VladaEs/pasteBin", view:"https://pastebin.codeforge.org.uk/"},
        {img:phantomGunImg ,name:"Commercial project", description:"This website was built for a customer on freelance, i have used 123-reg domain to host this website and i had an experience with using ftp connections", repo: "https://phantomgunsmiths.co.uk/", view:"https://phantomgunsmiths.co.uk/"},
        {img:gradientDesign ,name:"Ready to go gradient website", description:"I built a fully responsive landing page using React. I used the useState and useEffect hooks here.", repo: "https://github.com/VladaEs/GradientDesign3", view:"https://vladaes.github.io/GradientDesign3/"},  
        {img:todoApp ,name:"React to-do app", description:"It is my first react app. I used here 'UseState' and props. It's just my first project and further more", repo: "https://github.com/VladaEs/React-app", view:"https://vladaes.github.io/React-app/"},
        {img:chinaCart ,name:"Online store`s cart", description:"I have created a cafe's page for ordering food. I have used useContext, useState, useRef, useEffect. In short, all useful hooks", repo: "https://github.com/VladaEs/chinacartreact", view:"https://vladaes.github.io/chinacartreact/"},
        
    ];


    const PureJs=[
        {img: IntersectionObserver ,name:"Design, Based on intersection Observer", description:"I tried something new by using Intersection Observer to make a website. I mainly used CSS, with just a bit of JavaScript. It shows my ability to use different tools for effective solutions.", repo: "https://github.com/VladaEs/IntersectionObserver", view:"https://vladaes.github.io/IntersectionObserver/"},
        {img:layoutEffect ,name:"3D-Layout", description:"I made this website using only JavaScript without any other frameworks. All elements moves in 3D dimension", repo: "https://github.com/VladaEs/3dLayout", view:"https://vladaes.github.io/3dLayout/"},
        {img: calculator ,name:"Apple calculator", description:"The website I created is a user-friendly calculator that performs basic arithmetic operations. It provides an easy-to-use interface for users to input numbers and perform calculations quickly. This calculator can be a helpful tool for anyone who needs to perform basic math operations.", repo: "https://github.com/VladaEs/calculator", view:"https://vladaes.github.io/calculator/"},
        {img: keyboardImage ,name:"Key press checker", description:"I build this model of keyboard to train my skills in making up websites. This website is a virtual keyboard that can show which button user pressed.", repo: "https://github.com/VladaEs/VladaEs.keyboard.github.io", view:"https://vladaes.github.io/VladaEs.keyboard.github.io/"},
        {img: weatherImage ,name:"Weather app", description:"I have created this website to improve my skills in work with API. On the website, you can enter the name of a city or town in the search bar, and the website will display the current weather conditions for that location.", repo: "https://github.com/VladaEs/weather.api.github.io", view:"https://vladaes.github.io/weather.api.github.io/"},
        {img: RockPaperScissord ,name:"Rock Paper Scissors game", description:"I built this game just for fun, but while creating this app, I trained my skills in design and animation.", repo: "https://github.com/VladaEs/RockPaperScissors", view:"https://vladaes.github.io/RockPaperScissors/"},
        

    ]


    return(
        <div className={styles.pageWrapper}>
            <LineName>Vladyslav Voronin</LineName>
            <Backgroung />
            <PortfolioHeadig>PHP Laravel & React JS</PortfolioHeadig>
            {ReactJs.map((item,index)=>(
                index%2==0?<LeftSideTemplate item={item} key={index}/>:<RightSIdeTemplate item={item} key={index}/>
            ))}
            <PortfolioHeadig>Pure js</PortfolioHeadig>
            {PureJs.map((item,index)=>(
                index%2==0?<LeftSideTemplate item={item} key={index}/>:<RightSIdeTemplate item={item} key={index}/>
            ))} 
            
        </div>
    )

}
export default Portfolio