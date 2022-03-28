import "./Carousal.css"
import { SlideMenu } from "../../data/data";
import Slider from "./Slider";

const Carousal = () => {

    return ( 
        <div className="carousal-container">
            <div className="heading-carousal">
                <h1>Send Flowers</h1>
            </div>
            {SlideMenu.map((item,index)=>{
                return (<Slider key = {item.id} SlideHeading={item.slideheading} headings={item.heading} imageUrls={item.images} descriptions={item.description} prices={item.price}/>)
                
            })}
        </div>
        
     );
}
 
export default Carousal;