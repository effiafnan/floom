import "./Header.css";


const Header = () => {
    return ( 


        <div className="header-container">
            <div className="left-container">
                    <div className="top-content">
                        <h1 className="text-center">
                        Flower delivery from independent florists in the U.K.
                        </h1>
                        <button className="button-send">SEND NOW</button>
                    </div>
              </div>

            <div className="right-container">
                    <div className="top-right-container" >
                    
                        <div className="top-content">
                                <p>Collection</p>
                                <h1>Birthday Flowers</h1>
                                <a href="www.google.com">SEND FLOWERS</a>
                        </div>
                     </div>

                    <div className="bottom-right-container">
                        <div className="top-content">
                                <p>Collection</p>
                                <h1>Mother's Day Flowers</h1>
                                <a href="">SEND FLOWERS</a>
                        </div>
                    </div>
            </div>
        </div>
     );
}
 
export default Header;


