import "./Features.css";
const Features = () => {
    return ( 
        <div className="feature-section">
            <h1 className="section-heading">Why send flowers with Floom?</h1>
        <div className="feature-container">
            <div className="left-feature">
                     <div className="image-container">
                          <img className="feature-logo" src="https://d3c3go6eq7r80g.cloudfront.net/products/200px-Flower-eye.gif" alt="" />
                     </div>
                    <h1 className="feature-heading">What you see is what you get</h1>
                    <div className="feature-text-container">
                        <p className="feature-text">Love the bouquet on your screen? That’s exactly what our local florist will prepare freshly for your order… or your money back!</p>
                    </div>
            </div>
            <div className="center-feature">
                    <div className="image-container">
                          <img className="feature-logo" src="https://d3c3go6eq7r80g.cloudfront.net/products/200px-Florist_180126_140531.gif" alt="" />
                     </div>
                    <h1 className="feature-heading">Always unique, never generic</h1>
                    <div className="feature-text-container">
                        <p className="feature-text">We only work with the most talented and unique artisans, and we’re passionate about supporting our skilled family of florists.</p>
                    </div>
            </div>  
            <div className="right-feature">
                    <div className="image-container">
                          <img className="feature-logo" src="https://d3c3go6eq7r80g.cloudfront.net/general/HandsGIFoptimise.gif" alt="" />
                     </div>
                    <h1 className="feature-heading">Hand-delivered with care and attention</h1>
                    <div className="feature-text-container">
                        <p className="feature-text">Each of our orders is professionally arranged, wrapped and safely delivered with a hand-written card… on the exact day that you need it.</p>
                    </div>
            </div>
        </div>
        </div>
     );
}
 
export default Features;