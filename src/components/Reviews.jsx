import "./Reviews.css"
import { Ratings } from "../data/data";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const ReviewsSection = () => {

    const check  = (item)=>{
        console.log(item)
    }


    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1280 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1280, min: 770 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 770, min: 0 },
          items: 1
        }
      };


    return (

        <div className="review-container">
            <div className="review-count-container">
                <h1>Hear what our happy customers have to say</h1>
                <div className="reviews-box">
                    <div className="review-box-header">
                        <h3>Floom on</h3>
                        <img style={{height:"50%" , width:"50%"}} src="https://d34g78fsj6jubz.cloudfront.net/images/reviews-logo.svg" alt="" />
                    </div>
                    <div className="review-box-body">
                        <p>✰✰✰✰✰</p>
                        <p>4.49 from 16004 reviews</p>
                    </div>
                </div>
            </div>
            <div className="review-slider-container">

                <Carousel responsive={responsive}>
                {Ratings.map((ratings)=>{
                        check(ratings)
                        return (
                                <div className="review-carousal">
                                     <p className="review-rating">"{ratings.rating}"</p>
                                     <p className="review-content">{ratings.content}</p>
                                     <p className="review-name">{ratings.name}</p>
                                  </div>
                        )
                    })}
                </Carousel>
                
                    
                 
                
                
            </div>
        </div>


        
     );
}
 
export default ReviewsSection;