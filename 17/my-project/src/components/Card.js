import React from "react";
import { FcLike,FcLikePlaceholder } from "react-icons/fc";
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Card = (props) =>{
   // console.log(String(data.url));
    // console.log("hi");

    //const notify = () => toast("Wow so easy !");

    let data = props.data;
    let likedTech = props.likedTech;
    let setLikedTech = props.setLikedTech;


    function clickhandler(){

        //console.log('clicked');
        if(likedTech.includes(data.id)){
            setLikedTech( (prev) => prev.filter((cid) => (cid !== data.id)) );
            toast.warning("Like Removed");
            console.log("Like Removed");
        }
        else{
           // console.log('liked');
            if(likedTech.length === 0){
                setLikedTech([data.id]);
            }
            else{
                setLikedTech( (prev) => [...prev, data.id]);
            }
            
            toast.success("Liked Successfully");
            console.log("Liked Successfully");
        }
    }

    //console.log(data);
    return(
        <div className="relative bg-[#27263C] w-[300px] rounded-lg overflow-hidden text-white">

            <div >
                {/* <img src= {require(`${data.url}`)}></img> */}
                
                <img className="w-screen h-[250px] " src={data.url} alt="hi"></img>
                
            </div>

            <div className="absolute right-2 bottom-28 w-[40px] h-[40px] rounded-full bg-white grid place-items-center">  
                <button onClick={clickhandler}>
                    {
                        !likedTech.includes(data.id) ?
                            <FcLikePlaceholder fontSize = "1.75rem"/> :
                            <FcLike fontSize = "1.75rem"/>
                    }
                    {/* <FcLike fontSize = "1.75rem"/> */}
                    
                </button>
            </div>
          
           <div className="p-4">
                <p className="text-white font-semibold text-lg leading-6">{data.title}</p>
                <p className="mt-2 text-white">
                    {
                       data.description.length >100 ?
                       data.description.substr(0,100) + "..." :
                       data.description
                    }</p>
           </div>
           

        </div>
    )
}

export default Card;


