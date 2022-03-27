import "./SlideOutNav.css";
import { Menu } from "../../data/data";


const SlideOutNav = ({menuflag}) => {
    return ( 

        <div className="slide-out-container" style={{  transform: menuflag ? "translateX(0px)" : "translateX(-500px)"}}>
                <ul className="nav-items">
                        {Menu.map(item=>{
                            return(
                                <li >{item.name}</li>
                            )
                        })}
                    </ul>
        </div>






                
     );
}
 
export default SlideOutNav;