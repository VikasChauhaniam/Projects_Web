import Card from './Card';
import './Tours.css';

function Tours({tours, ignoreBtnHandler, interestBtnHandler}){
    return(
        <div className="Containers">
            <div>
                <h2 className="Title">Developers Profile</h2>
            </div>
        
            <div className="cards-window">
            {
                tours.map( (tour) => {
                    return <Card key={tour.id} {...tour} ignoreBtnHandler={ignoreBtnHandler} interestBtnHandler={interestBtnHandler}></Card>
                })
            }
            </div>
        </div>
    );
}

export default Tours; 