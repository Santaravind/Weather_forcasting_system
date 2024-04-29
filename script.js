const apikey="3db74b11ac4e48c8bfce5cdfee169480";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const  searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");
 
async function checkweather(city){
 const response=await fetch(apiUrl+ city +`&appid=${apikey}`);

 //if city is not correnct than
 if(response.status== 404){
      document.querySelector(".error").style.display="block";
      document.querySelector(".weather").style.display="none";
 }
 else{
      var Data=await response.json();
   
   //Display the weather data
    console.log(Data);

   //Select the all weather paramiters 
   document.querySelector(".city").innerHTML=Data.name;
   document.querySelector(".country").innerHTML=Data.sys.country;
   document.querySelector(".temp").innerHTML=Math.round(Data.main.temp)+"°c";
   document.querySelector(".humidity").innerHTML=Data.main.humidity+"%";
   document.querySelector(".wind").innerHTML=Data.wind.speed+"km/h";
   
   //Chenge the weather icons when it mach the condition
   if(Data.weather[0].main=="Snow"){
     weatherIcon.src="images/snow.png"
   }
   else if(Data.weather[0].main=="Clear"){
     weatherIcon.src="images/clear.png"
   }
   else if(Data.weather[0].main=="Rain"){
     weatherIcon.src="images/rain.png"
   }
   else if(Data.weather[0].main=="Dizzle"){
     weatherIcon.src="images/dizzle.png"
   }
   else if(Data.weather[0].main=="Mist"){
     weatherIcon.src="images/mist.png"
   }
   else if(Data.weather[0].main=="Clouds"){
     weatherIcon.src="images/clouds.png"
   }
   else if(Data.weather[0].main=="Fog"){
     weatherIcon.src="images/clouds.png"
   } 
 
   //Display the weather details when it search
   document.querySelector(".weather").style.display="block";
   document.querySelector(".error").style.display="none";
  
 }


}

searchBox.addEventListener("keypress", function(event) {
if (event.key === "Enter") {
    // Prevent the default action of the Enter key (e.g., form submission)
    event.preventDefault();
    
    // Call the checkweather function with the value from the search box
    checkweather(searchBox.value);
}
});


 searchBtn.addEventListener("click",()=>{
      
      checkweather(searchBox.value);
 });
//checkweather();

