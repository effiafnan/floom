import "./SlideDownNav.css"
import { Menu } from "../../data/data";
import NavList from "./NavList";

const SlideDownNav = ({slideDownFlag,dataId}) => {

    
    return ( 
        <div className="slide-down-container" style={{ transform: slideDownFlag ? "translateY(0px)" : "translateY(-500px)"}}>
            <div className="slide-down-nav">
                
                
                    {Menu.map((item,index)=>{
                        if(dataId===item.id){
                            return(
                                <div className="slide-down-content"> 
                                       <NavList index="0" item={item} category={item.categories1}  />          
                                       <NavList index="1" item={item} category={item.categories2}  />          
                                       <NavList index="2" item={item} category={item.categories3}  />          
                                       <NavList index="3" item={item} category={item.categories4}  />          
                                </div>
                                
                                 
                            );
                            

                            
                        }
                        {/* else{
                            return(
                                <div></div>
                            )
                        } */}
                        
                    })}
                         
                         {/* <div className="dv2">
                         <p>
                                SHOP
                            </p>
                            <ul className="td">
                                <li>Flowers</li>
                                <li>Flowers</li>
                                <li>Flowers</li>
                                <li>Flowers</li>
                            </ul>
                         </div>
                         <div className="dv3" >
                         <p>
                                SHOP
                            </p>
                            <ul className="td">
                                <li>Flowers</li>
                                <li>Flowers</li>
                                <li>Flowers</li>
                                <li>Flowers</li>
                            </ul>
                         </div>
                         <div className="dv4">
                         <p>
                                SHOP
                            </p>
                            <ul className="td">
                                <li>Flowers</li>
                                <li>Flowers</li>
                                <li>Flowers</li>
                                <li>Flowers</li>
                            </ul>
                         </div> */}
                
            </div>    
        </div>
     );
}
 
export default SlideDownNav;


{/* <div style={{color:"red", width:"50px", height:"50px"}} >
                                {check(value)}
                                <ul>
                                    <li><p>{value}</p></li>
                                </ul>
                                
                                {/* <p>
                                    {value}
                                </p>
                                <ul className="td">
                                    <li>{item.categories[index]}</li>
                                    <li>{item.categories[index+1]}</li>
                                    <li>{item.categories[index+2]}</li>
                                    <li>{item.categories[index+3]}</li>
                                </ul> */}
                            //  </div> */}