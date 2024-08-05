import { useState } from 'react';
import './Card.css'

function Card({id, image, job, name, info, ignoreBtnHandler, interestBtnHandler}){


    const [readmore, setReadMore] = useState(false);
    const description = readmore ? info : `${info.substring(0,100)}....`;

    function readmoreHandler(){
        setReadMore(!readmore);
    }

    
    return(
        <div className="single-card">

            <img src={image} className="user-image"></img>
            <div className='info'>
                <div className="user-details">
                    <h4 className="user-Jobprofile">{job}</h4>
                    <h4 className="user-name">{name}</h4>
                </div>

                <div className="user-description">
                    {description}
                    <span className='read-more' onClick={readmoreHandler}>{readmore ? `Show Less` : `Read More`}</span>
                </div>
            </div>
            <button className="btn" onClick={() => ignoreBtnHandler(id)}>IGNORE</button>
            <button className="btn" onClick={() => interestBtnHandler(id)}>INTERESTED</button>



        </div>

    );
}

export default Card;