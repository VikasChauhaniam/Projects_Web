import React, {useState} from "react";
import Card from "./Card";

const Cards = (props) =>{

    let imageData = props.imageData.data;
    let category = props.category;
   const[likedTech, setLikedTech] = useState([]);

    let allTech = [];
    const getAllTech = () =>{

        if(category === "All"){
            Object.values(imageData).forEach( (Tech) =>{
                Tech.forEach( (singleTech) =>{
                    allTech.push(singleTech);
                })
            })
    
            return allTech;
        }
        else{
            return imageData[category];
        }
        
        
    }


    return(
        <div className="flex  flex-wrap justify-center gap-4 mb-4">
            
            {
                getAllTech().map( (data) =>{

                    return <Card key={data.id} data = {data}
                                    likedTech = {likedTech}
                                    setLikedTech = {setLikedTech}>
                            </Card>
                })
            }
        </div>
    )
}

export default Cards;