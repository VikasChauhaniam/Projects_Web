import React from 'react';
import {FaQuoteLeft, FaQuoteRight} from 'react-icons/fa';

const Card = (props) =>{

    let review = props.review;
    console.log(review);
    console.log("HI");

    return(
        <div className='flex flex-col md:relative'>

            <div className='absolute top-[-5rem] left-[1rem] z-[10] mx-auto'>
                <img className='rounded-full w-[140px] h-[140px] z-[10]' 
                    src={review.image} alt="something"></img>

                <div className='w-[140px] h-[140px] rounded-full bg-purple-500 absolute top-[-6px] right-[-6px] z-[-10]'></div>    
            </div>

            <div className='text-center mt-7'>
                <p className='font-bold text-2xl tracking-wider'>{review.name}</p>
            </div>

            <div className='text-center mt-2'>
                <p className='text-violet-500 text-sm'>{review.emailId}</p>
            </div>

            <div className='mx-auto mt-7 text-violet-500'>
                <FaQuoteLeft/>
            </div>
            <div className='text-center mt-4 text-slate-500'>
                {review.text}
            </div>
            <div className='mx-auto mt-7 text-violet-500'>
                <FaQuoteRight/>
            </div>

            


        </div>
    )
}

export  default Card