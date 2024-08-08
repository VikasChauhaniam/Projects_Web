import React,{useState} from 'react';
import Card from './Card';
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi';

const Testimonial = (props) =>{

    let reviews = props.reviews;
    //console.log(reviews[1]);
  
    let [i,seti] = useState(0);
    //console.log(i);
    //console.log(reviews[i]);

    function leftClickhandler(){
        i--;
        if(i<0){
            seti(reviews.length - 1);
        }
        else{
            seti(i);
        }
        
    }

    function rightClickhandler(){
        i++;
        if(i>=reviews.length){
            seti(0);
        }
        else{
            seti(i);
        }
    }

    function randomClickhandler(){
        let i = Math.floor(Math.random() * reviews.length);
        seti(i);
    }

    return(
        <div className='w-[700px] md:w-[700px] bg-gray-100 mt-12 p-11 shadow-xl rounded-md'>
            
            <Card review = {reviews[i]}></Card>




            <div className='text-3xl mt-5 flex gap-5 justify-center font-bold text-violet-400'>
                <button onClick={leftClickhandler} className='hover:text-violet-900' >
                    <FiChevronLeft/>
                </button>

                <button onClick={rightClickhandler} className='hover:text-violet-900' >
                    <FiChevronRight/>
                </button>
            </div>





            <div className='text-white font-bold m-4 text-lg'>
                <button onClick={randomClickhandler} className='bg-violet-400 rounded-md py-2 px-6 hover:bg-violet-900  duration-300'>Chose Random</button>
            </div>
        </div>
    )
}

export  default Testimonial