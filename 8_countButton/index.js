 const countTag = document.querySelector('.valCounter');



 
 const add  = () => {
    let val = parseInt(countTag.innerText);
    val +=1;

    countTag.innerText = val;
};



const sub = () => {
    let val = parseInt(countTag.innerText);
    val -=1;

    countTag.innerText = val;
};

