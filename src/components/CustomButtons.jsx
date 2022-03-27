import "./CustomButtons.css"

const CustomButtons = ({ next, previous}) => {
    
    return ( 
        <div className="button-container">
            <div onClick={() => previous()} className="button1 btn-style ">
                <i class="fa-solid fa-chevron-left"></i>
            </div>
            <div onClick={() => next()} className="button1 btn-style ">
                <i class="fa-solid fa-chevron-right"></i>
            </div>
        </div>
     );
}
 
export default CustomButtons;