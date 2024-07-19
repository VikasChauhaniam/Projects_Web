const inputSlider   = document.querySelector("[data-lengthSlider]");
const lengthDisplay  = document.querySelector("[data-lengthNumber]");
const passwordDisplay   = document.querySelector("[data-passwordDisplay]");

const copyBtn = document.querySelector("[data-copy]");
const copyMsg = document.querySelector("[data-copyMsg]");

const uppercaseCheck = document.querySelector("#uppercase");
const lowercaseCheck = document.querySelector("#lowercase");
const numberCheck = document.querySelector("#numbers");
const symbolCheck = document.querySelector("#symbols");

const allCheckBox = document.querySelectorAll("input[type=checkbox]");

const indicator = document.querySelector("[data-indicator]");
const generatorBtn = document.querySelector(".generatorButton");
const symbols = `~@#$%^&*()-_=+[{]}\|;:'",<.>/?]`;




let password = "";
let passwordLength = 10;
let checkCount = 0;

handleSlider();


//set passwrod length
function handleSlider(){
    inputSlider.value = passwordLength;
    lengthDisplay.innerText = passwordLength;

    const min = inputSlider.min;
    const max = inputSlider.max;

    inputSlider.style.backgroundSize = ( (passwordLength-min)*100/(max-min)) + "% 100%";
   

     

}

//set indicator
function setIndicator(color){

    indicator.style.backgroundColor = color;
    indicator.style.boxShadow = `0px 0px 12px 1px ${color}`;
}

//random interger
function getRndInteger(min, max){

    let a = Math.floor(Math.random() * (max-min)) + min
   
   return a;
}


//random Number
function generateRandomNumber(){

    return getRndInteger(0, 9);
}

//random  lowercase
function generateLowerCase(){
    
    let a = String.fromCharCode(getRndInteger(97,123))
    
    return a;
}



//random Uppercase
function generateUpperCase(){

    let a = String.fromCharCode(getRndInteger(65,91));
    
    return a;
}



//random specialSYmbol
function generateSymbol(){

    let a = symbols.charAt(getRndInteger(0,symbols.length));
    
    return a;
}



// calculate Strength of password
function calcStrength(){

    let hasNumber = false;
    let hasLower = false;
    let hasUpper = false;
    let hasSymbol = false;

    if(uppercaseCheck.checked) hasUpper = true;
    if(lowercaseCheck.checked) hasLower = true;
    if(numberCheck.checked) hasNumber = true;
    if(symbolCheck.checked) hasSymbol = true;

    if(hasUpper && hasLower && (hasNumber || hasSymbol) && passwordLength >= 8){
        setIndicator("#0f0");
    }
    else if((hasLower || hasUpper) && (hasNumber || hasSymbol) && passwordLength >= 6){
        setIndicator("#ff0");
    }
    else{
        setIndicator("#f00");
    }

}

async function copyContent(){

    try{
       await navigator.clipboard.writeText(passwordDisplay.value);
       copyMsg.innerText = "copied";
    }
    catch(e){
        copyMsg.innerText = "failed";
    }   

    //copy span visible
    copyMsg.classList.add("active");

    setTimeout(() => {
        copyMsg.classList.remove("active");
    }, 1000);
}


function shufflePassword(array){
    for (let i = array.length -1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i+1));
        let k = array[i];
        array[i] = array[j];
        array[j] = k;
    } 
    let str = "";
    array.forEach( (el) => (str += el) );

    return str;

}

function handleCheckBoxChange(){

    checkCount = 0;
    allCheckBox.forEach( (checkbox) => {
        if(checkbox.checked){
            checkCount++;
        }
    });

     
    if(passwordLength < checkCount){
        passwordLength = checkCount;
        handleSlider();
    }
}

allCheckBox.forEach( (checkbox) => {

    checkbox.addEventListener('change', handleCheckBoxChange);
})


inputSlider.addEventListener( 'input' , (e) => {

    passwordLength = e.target.value;
    handleSlider();
}) 


 
copyBtn.addEventListener('click', () => {
    if(passwordDisplay.value){
        copyContent();
    }
}) 







generatorBtn.addEventListener('click', () => {

    console.log("1");
    //if no check box
    if(checkCount == 0)return;

    if(passwordLength < checkCount){
        passwordLength = checkCount;
        handleSlider();
    }
    console.log("2");
    //-----------------------------------------------------------------newpassword
     
    //remove old pass
    password = "";

    //put checkbox value

    let funcArr = [];
    console.log("3");

    if(uppercaseCheck.checked){
        funcArr.push(generateUpperCase);
        
    }
    console.log("4");
    if(lowercaseCheck.checked){
        funcArr.push(generateLowerCase);
    }

    if(numberCheck.checked){
        funcArr.push(generateRandomNumber);
    }

    if(symbolCheck.checked){
        funcArr.push(generateSymbol);
    }

    //compulasary addition
    for(let i=0; i<funcArr.length; i++){
        console.log(funcArr[i]());
        password += funcArr[i]();
    }

    //remaining addition
    for(let i=0; i<passwordLength - funcArr.length; i++){

        let randIndx = getRndInteger(0, funcArr.length);
        console.log(funcArr[randIndx]());
        password += funcArr[randIndx]();
    }


    

    //Shuffle the password
    password = shufflePassword(Array.from(password));


    passwordDisplay.value = password;

    //strength display
    calcStrength();
    
    
});












