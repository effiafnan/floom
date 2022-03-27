import "./Slider.css"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "./Card";
import CustomButtons from "./CustomButtons";
import {responsive} from "../data/data"

const Slider = ({SlideHeading,headings,imageUrls,descriptions,prices}) => {
  
    
    return ( 
        <div className="carousal-main">
                            <div className="carousal-info-btns">
                                    <h2>{SlideHeading}</h2>
                                    <a href="/"><p>See all</p></a>
                            </div>
                            
                            <div className="carousal-content">
                            <Carousel autoPlay={false} responsive={responsive} arrows={false} renderButtonGroupOutside={true} customButtonGroup={<CustomButtons />}>
                                    {headings.map((item,index)=>{
                                      return(
                                        <Card key={index} name={item} url={imageUrls[index]} desc={descriptions[index]} price={prices[index]} />
                                      );
                                    })}
                            
                            </Carousel>
                            </div>
                        </div>
     );
}
 
export default Slider;