import "./Navbar.css"
import { Menu } from "../../data/data";
import { Colors } from "../../assets/color";
import SlideDownNav from "./SlideDownNav";
import SlideOutNav from "./SlideOutNav";

import {IconContext} from "react-icons";
import { BsBasket3,BsPerson,BsTelephone,BsTruck } from 'react-icons/bs';

import { useState } from "react";


const Navbar = () => {

    



    const [open,setOpen] = useState(false);
    const [isHover,setIsHover] = useState(false);
    const [id,getId] = useState(0);

    const setMouseEnter =(id)=>{
        getId(id);
        setIsHover(true);
        console.log(isHover)
    }
    
    return ( 
        <div className="navbar-container">
            <nav >
                <div className="nav-top-container">

                    {/* for desktop */}
                    <div className="left-nav-icons">
                        <p>Ship To:</p>
                        <img className="flag-img" src="https://d34g78fsj6jubz.cloudfront.net/images/en_gb-flag.png" alt="uk" />
                        <img className="flag-img" src="https://d34g78fsj6jubz.cloudfront.net/images/en_us-flag.png" alt="us" />      
                    </div>
                    {/* for tablet and mobiles */}
                    <div className="left-nav-burger">
                    
                        <i  class="fa-solid fa-bars burger-icon" onClick={()=>{setOpen(!open)}}></i>
                    </div>
                    
                     {/* logo */}
                    <div className="center-nav-logo">
                        <h1 className="logo">FLOOM</h1>
                    </div>


                    <div className="right-nav-icons"> 
                    <IconContext.Provider value={{color: Colors.secondary, size: 24}}>
                        <BsPerson className="nav-icons"/>
                        <BsTelephone  className="nav-icons nav-mobile"/>
                        <BsTruck className="nav-icons nav-mobile" />
                        <BsBasket3 className="nav-icons" />
                    </IconContext.Provider>
                    


                    </div>
                </div>
                
                
        {/* BOTTOM NAV */}
                <div  className="nav-bottom-container">
                     <ul className="nav-items">
                        {Menu.map(item=>{
                            
                            return(
                                <li 
                                    onMouseEnter={()=>setMouseEnter(item.id)} 
                                    onMouseLeave={()=>setIsHover(false)}
                                    className={item.class}>{item.name}
                                    
                                </li>
                            )
                        })}
                     </ul>
                     
                </div>
                
            </nav>
            <SlideOutNav menuflag={open} />
            <SlideDownNav dataId={id} slideDownFlag={isHover}/>     
        </div>
     );
}
 
export default Navbar;