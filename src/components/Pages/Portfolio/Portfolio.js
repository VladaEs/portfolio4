import styles from './Portfolio.module.css'
import LineName from '../../../containers/Lines/LineName'
import Backgroung from '../../../containers/Background/background'
import PortfolioHeadig from '../../../containers/Texthints/PortfolioHeading'
import LeftSideTemplate from './ProjectsTemplates/LeftSideTemplate'
import RightSIdeTemplate from './ProjectsTemplates/RightSideTemplate'
const Portfolio = ()=>{
    const PureJs=[
        {img:"images/projects/pureJs/3dLayout.png" ,name:"3D-Layout", description:"I made this website using only JavaScript without any other frameworks. All elements moves in 3D dimension", repo: "https://github.com/VladaEs/3dLayout", view:"https://vladaes.github.io/3dLayout/"},
        {img:"images/projects/pureJs/calculator.png" ,name:"Apple calculator", description:"The website I created is a user-friendly calculator that performs basic arithmetic operations. It provides an easy-to-use interface for users to input numbers and perform calculations quickly. This calculator can be a helpful tool for anyone who needs to perform basic math operations.", repo: "https://github.com/VladaEs/calculator", view:"https://vladaes.github.io/calculator/"},
        {img:"images/projects/pureJs/keyboard.png" ,name:"Key press checker", description:"I build this model of keyboard to train my skills in making up websites. This website is a virtual keyboard that can show which button user pressed.", repo: "https://github.com/VladaEs/VladaEs.keyboard.github.io", view:"https://vladaes.github.io/VladaEs.keyboard.github.io/"},
        {img:"images/projects/pureJs/weather.png" ,name:"Weather app", description:"I have created this website to improve my skills in work with API. On the website, you can enter the name of a city or town in the search bar, and the website will display the current weather conditions for that location.", repo: "https://github.com/VladaEs/weather.api.github.io", view:"https://vladaes.github.io/weather.api.github.io/"},
        {img:"images/projects/pureJs/Rock Paper Scissors.png" ,name:"Rock Paper Scissors game", description:"I built this game just for fun, but while creating this app, I trained my skills in design and animation.", repo: "https://github.com/VladaEs/RockPaperScissors", view:"https://vladaes.github.io/RockPaperScissors/"},
        {img:"images/projects/pureJs/intersectionObserver.png" ,name:"Design, Based on intersection Observer", description:"I tried something new by using Intersection Observer to make a website. I mainly used CSS, with just a bit of JavaScript. It shows my ability to use different tools for effective solutions.", repo: "https://github.com/VladaEs/IntersectionObserver", view:"https://vladaes.github.io/IntersectionObserver/"},

    ]
    const ReactJs=[
        {img:"images/projects/react/todoApp.png" ,name:"React to-do app", description:"It is my first react app. I used here 'UseState' and props. It's just my first project and further more", repo: "https://github.com/VladaEs/GradientDesign3", view:"https://vladaes.github.io/GradientDesign3/"},
        {img:"images/projects/react/ChinaCart.png" ,name:"Online store`s cart", description:"I have created a cafe's page for ordering food. I have used useContext, useState, useRef, useEffect. In short, all useful hooks", repo: "https://github.com/VladaEs/chinacartreact", view:"https://vladaes.github.io/chinacartreact/"},
        {img:"images/projects/react/GradientDesign.png" ,name:"Ready to go gradient website", description:"I built a fully responsive landing page using React. I used the useState and useEffect hooks here.", repo: "https://github.com/VladaEs/GradientDesign3", view:"https://vladaes.github.io/GradientDesign3/"},
        
    ]

    return(
        <div className={styles.pageWrapper}>
            <LineName>Vladyslav Voronin</LineName>
            <Backgroung />
            <PortfolioHeadig>Pure js</PortfolioHeadig>
            {PureJs.map((item,index)=>(
                index%2==0?<LeftSideTemplate item={item} key={index}/>:<RightSIdeTemplate item={item} key={index}/>
            ))} 
            <PortfolioHeadig>React JS</PortfolioHeadig>
            {ReactJs.map((item,index)=>(
                index%2==0?<LeftSideTemplate item={item} key={index}/>:<RightSIdeTemplate item={item} key={index}/>
            ))}
        </div>
    )

}
export default Portfolio