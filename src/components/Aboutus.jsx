import "./Aboutus.css"
import {AboutDetails} from "../data/data" 
const About = () => {
    return ( 
        <div className="about-container">
            <div className="about-heading">
                <p>A LITTLE ABOUT US</p>
            </div>
            <div className="about-body">
                {AboutDetails.map((detail,index)=>{
                    return (
                        detail.description.map((item)=><p className="about-text">{item}</p>)
                    );
                })}
            </div>
            
            
        </div>
     );
}
 
export default About;