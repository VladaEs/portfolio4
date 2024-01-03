import styles from './MainPage.module.css'
import LinePage from '../../../containers/Lines/LinePage';
import ArticleHint from '../../../containers/Texthints/ArticleHint';
import SectionMenu from '../../../containers/Texthints/SectionMenu';
import LineBottom from '../../../containers/Lines/LineBottom';
import Backgroung from '../../../containers/Background/background';
const MainPage= ()=>{
const Menu=[
    {name: "About", link:"/about"},
    {name: "contacts", link:"/contacts"},
    {name: "portfolio", link:"/portfolio"},
];
    return(
        <div className={styles.MainPageWrapper}>
            <Backgroung/>
            
            
        <LinePage width={90}/>
        <div className={styles.ArticlePosition}>
        <ArticleHint>In a world where every moment is a weave of possibilities, my creative portfolio unfolds as
             a harmony of abstractions and ideas. 
            Each piece is not merely a work of art but a revelation of my perspective on the boundless realms
             of imagination
        </ArticleHint>
        </div>
        <div className={styles.MenuPages}>
            {Menu.map((item,index)=>(<SectionMenu index={index} length={Menu.length} item={item} key={index}></SectionMenu>))}
        </div>

        <div className={styles.ArticlePosition2}>
        <ArticleHint>Within the tapestry of creativity, my portfolio serves as a kaleidoscope of abstract expressions and conceptual musings.
             Each composition is a dance between the tangible and the ethereal, a testament to the limitless possibilities
              that unfold when imagination takes flight.
        </ArticleHint>
        </div>

        
        <LineBottom width={100}/>
        
        </div>
    )
}
export default MainPage;