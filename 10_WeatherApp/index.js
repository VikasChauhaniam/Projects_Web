const userTab = document.querySelector("[data-userWeather]");
const searchTab = document.querySelector("[data-searchWeather]");

const userConatiner = document.querySelector(".weather-container");

const  grantAccessConatiner =  document.querySelector(".grantLocation-conatiner");

const  searchForm =  document.querySelector("[data-searchForm]");
const  loadingScreen =  document.querySelector(".loading-container");
const  userInfoConatiner =  document.querySelector(".user-info-conatiner");



//----------------------------------------------------------------------initialise variables
let currentTab = userTab;
const API_KEY  = "9744c9cf1a69e2d50427315506874397";
currentTab.classList.add("current-tab");


getfromSessionStorage();//------------------------------------------------------------------------------------------super 1



//---------------------------------------------------------------------------------------------------switch tab fxn
function switchTab(clickedTab){                                                      //2

    if(currentTab != clickedTab){

        currentTab.classList.remove("current-tab");
        currentTab = clickedTab;
        currentTab.classList.add("current-tab");

        if(!searchForm.classList.contains("active")){

            //if search from is invisible -->make it visible
            grantAccessConatiner.classList.remove("active"); 
            userInfoConatiner.classList.remove("active");

            searchForm.classList.add("active");

        }else{

            //if im in seaarch weather tab --> make data visible if session has data or else visble grant access page.
            searchForm.classList.remove("active");
            userInfoConatiner.classList.remove("active");

            getfromSessionStorage();
            
        }

    }
    
}



function getfromSessionStorage(){                                                       
    const localCoordinates = sessionStorage.getItem("user-coordinates");

    if(!localCoordinates){
        grantAccessConatiner.classList.add("active"); 
        
    }
    else{
        const coordinates = JSON.parse(localCoordinates);
        fetchUserWeatherInfo(coordinates);

        // userInfoConatiner.classList.add("active");
    }
}

async function fetchUserWeatherInfo(coordinates){                                         

    const {lat, lon} = coordinates;
    

    grantAccessConatiner.classList.remove("active"); 
    //loader visible
    
    loadingScreen.classList.add("active");         
    

    //api call
    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`);

        const data = await response.json();

        //remove loader
        loadingScreen.classList.remove("active");
        userInfoConatiner.classList.add("active");

        //put api data into UI
        renderWeatherInfo(data);
    }
    catch{
        loadingScreen.classList.remove("active");
        ////////////////////////////////////////////////////////////////////////////////////////////////////
    }
}


function renderWeatherInfo(data){

    //fetching UI element
    const cityName = document.querySelector("[data-cityName]");
    const countryIcon = document.querySelector("[data-countryIcon]");
    const desc = document.querySelector("[data-weatherDisc]");
    const weatherIcon = document.querySelector("[data-weatherIcon]");
    const temp = document.querySelector("[data-temp]");
    const windspeed = document.querySelector("[data-windSpeed]");
    const humidity = document.querySelector("[data-humidity]");
    const cloudiness = document.querySelector("[data-cloudiness]");


    //put values on UI
    cityName.innerText = data?.name;
    countryIcon.src = `https://flagcdn.com/144x108/${data?.sys?.country.toLowerCase()}.png`;
    desc.innerText = data?.weather?.[0]?.description;
    weatherIcon.src = `https://openweathermap.org/img/w/${data?.weather?.[0]?.icon}.png`;
    temp.innerText = data?.main?.temp + " °C";
    windspeed.innerText = data?.wind?.speed+ " m/s";
    humidity.innerText = data?.main?.humidity+ "%";
    cloudiness.innerText = data?.clouds?.all+ "%";

}

userTab.addEventListener("click", () => {                                                      //1

    switchTab(userTab);
});
searchTab.addEventListener("click", () => {                                                      //1

    switchTab(searchTab);
});



//----------------------------------------------grand access
async function getLocation(){                                        //3

        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        }
        else{

            console.log("bad error");
        }
}

function showPosition(position){                                            //4
    const userCoordinates = {
        lat : position.coords.latitude,
        lon : position.coords.longitude,
    }

   

    sessionStorage.setItem("user-coordinates", JSON.stringify(userCoordinates));
    fetchUserWeatherInfo(userCoordinates);
}

//-----------------------------------------------------------------------------------------------------grant access

const grantAccessBtn = document.querySelector("[data-grantAccess]");  //1


grantAccessBtn.addEventListener("click", getLocation);              //2


//-----------------------------------------------------------------------------search form

const searchInput= document.querySelector("[data-searchInput]");          //1

searchForm.addEventListener("submit", (e) => {                               //2

    e.preventDefault();

    let cityName =  searchInput.value;
    
    
    if(cityName === ""){
        return;
    }
    else{
        fetchSearchWeatherInfo(cityName);
    }
});                             


async function fetchSearchWeatherInfo(cityName){

    loadingScreen.classList.add("active");
    userInfoConatiner.classList.remove("active");
    grantAccessConatiner.classList.remove("active");

    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`);
        
        const data = await response.json();

        //remove loader
        loadingScreen.classList.remove('active');
         
        userInfoConatiner.classList.add("active");

        //put api data into UI
        renderWeatherInfo(data);
    }
    catch{
        
    }

}
