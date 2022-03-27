import "./DeliveryLocations.css"

const DeliveryLocations = () => {
    return ( 
        <div className="delivery-container">
            <div className="delivery-heading">
                <p className="delivery-text">FLOWER DELIVERY IN THE UNITED KINGDOM</p>
            </div>
            <div className="delivery-body">
                <div className="sec1">
                <ul className="city-list">
                <a href="/"><li className="city-name">London</li></a>
                <a href="/"> <li>Cambridge</li></a>
                <a href="/"><li>Brighton</li></a>
                <a href="/"><li>Norwich</li></a>  
                </ul>
                </div>
                <div className="sec2">
                    <ul className="city-list">
                    <a href="/"><li className="city-name">Bristol</li></a>
                    <a href="/"> <li>Cardiff</li></a>
                    <a href="/"><li>Liverpool</li></a>
                    <a href="/"><li>Manchester</li></a>  
                    </ul>
                </div>
                <div className="sec3">
                <ul className="city-list">
                    <a href="/"><li className="city-name">Edinburgh</li></a>
                    <a href="/"> <li>Aberdeen</li></a>
                    <a href="/"><li>Leeds</li></a>
                    <a href="/"><li>Newcastle</li></a>  
                    </ul>
                </div>
                <div className="sec4">
                <ul className="city-list">
                    <a href="/"><li >Nottingham</li></a>
                    <a href="/"> <li>Birmingham</li></a>
                    <a href="/"><li>Leicester</li></a>
                    <a href="/"><li>Sheffield</li></a>  
                    </ul>
                </div>
            </div>
        </div>
     );
}
 
export default DeliveryLocations;