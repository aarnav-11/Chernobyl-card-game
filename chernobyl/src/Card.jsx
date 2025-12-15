
import "./Card.css"

function Card ({suit, value, color}){
    return(
        <div className="Card box">
            <div className={`card ${color}`}>
                <div className="corner top-left">
                    {value}<br />{suit}
                </div>
                <div className="suit">
                    {suit}
                </div>
                <div className="corner bottom-right">
                    {value}<br />{suit}
                </div>
            </div>
        </div>
    );
}

export default Card;
