
const apikey ="a9876c6e67e32ff24a9c8d25613c7730";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
// yeh dono link ha Api ka 

const searchBox = document.querySelector(".search input"); // ais line ha hum na input ko target kiya ha jo html ma hai
const searchBtn = document.querySelector(".search button"); // ais line ha hum na button ko target kiya ha  jo html ma hai 
const weatherIcon = document.querySelector(".weather-icon"); // ais line ha hum na images ko target kiya ha  jo html ma hai 


// yeh ek fuction ha 
async function checkweather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
// yeh link ko hum na add karwa yeh ha api ka link ko 
    
// phr if else ki condition lagi ha agr 404 erron ho to invalid city naam show hoga agr city naam sahi ha to phr else ki condition chala gi 
    if(response.status == "404"){
        document.querySelector(".error").style.display="block";// yeh phr error block hoga or weather none ho ga 
        document.querySelector(".weather").style.display="none"
    }else{

        let data = await response.json(); 
   
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    // yeh sab apna apna weather ka hisab sa change hogi images

        if(data.weather[0].main == "Clouds"){ 
         weatherIcon.src = "images/clouds.png";
        }
        else if(data.weather[0].main == "Clear"){
         weatherIcon.src = "images/clear.png";
        }
        else if(data.weather[0].main == "Rain"){
         weatherIcon.src = "images/rain.png";
        }
        else if(data.weather[0].main == "Drizzle"){
         weatherIcon.src = "images/drizzle.png";
        }
        else if(data.weather[0].main == "Mist"){
         weatherIcon.src = "images/mist.png";
        }
       
        document.querySelector(".weather").style.display="block"// yeh phr weather block hoga or error none ho ga 
        document.querySelector(".error").style.display="none";
    }

}

// yeh input or btn ha jab koy input ma koy bi city k name input karga to phr search phr click karga to output show hoga 
searchBtn.addEventListener("click" , ()=>{
    checkweather(searchBox.value);
})
