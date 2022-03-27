import "./Card.css"

const Card = ({url,desc,name,price}) => {
    return ( 
        <div className="card-container">
            <div className="card-image">
                <img src={url} alt="" />
            </div>
            <div className="card-body">
            <div className="card-details">
            <a href="/">
                    <h4>{name}</h4>
                    <p>{desc}</p>
                </a>
            </div>
                
                <div className="card-buttons">
                    <a href="/"><p>{price}</p></a>
                    <hr />
                    <a href="/"><p>View</p></a>
                </div>
            </div>
        </div>
     );
}
 
export default Card;