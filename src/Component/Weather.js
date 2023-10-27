import React, { useState } from 'react'
import search_icon from '../Assets/search.png'
import clear from '../Assets/clear.png'
import cloud from '../Assets/cloud.png'
import drizzle from '../Assets/drizzle.png'
import snow from '../Assets/snow.png'
import rain from '../Assets/rain.png'
import scattered_cloud from '../Assets/scattered.png'
import broken_cloud from '../Assets/broken_cloud.png'
import thunderstorm from '../Assets/thunderstorm.png'
import mist from '../Assets/mist.png'
import wind from '../Assets/wind.png'
import humidity from '../Assets/humidity.png'



export const Weather = () => {

  let api_key="679bbc5147f3a1cf8c97751246d6aac9";
  const[icon,seticon]=useState(cloud);
  const [weather, setweather] = useState("weather")

  const search = async () =>{
    const input= document.getElementsByClassName("searchbar");
    if(input[0].value===""){
      return 0;
    }
    let url =`https://api.openweathermap.org/data/2.5/weather?q=${input[0].value}&appid=${api_key}`;

    let response = await fetch(url);
    let data = await response.json();
    const humidity=document.getElementsByClassName("humidity-percent")
    const wind=document.getElementsByClassName("wind-speed")
    const temperature = document.getElementsByClassName("temp")
    const location =document.getElementsByClassName("location")

    humidity[0].innerHTML=data.main.humidity;
    wind[0].innerHTML=data.wind.speed;
    temperature[0].innerHTML=(data.main.temp - 273.15).toFixed(2) ;
    location[0].innerHTML=data.name;

    if (data.weather[0].icon==="01d"|| data.weather[0].icon==="01n"){
      seticon(clear);
      setweather("Clear Sky")
    }
   else if (data.weather[0].icon==="02d"|| data.weather[0].icon==="02n"){
      seticon(cloud)
      setweather("Few Cloud")
    }
    else if (data.weather[0].icon==="03d"|| data.weather[0].icon==="03n"){
      seticon(scattered_cloud)
      setweather("Scattered Cloud")
    }
    else if (data.weather[0].icon==="04d"|| data.weather[0].icon==="04n"){
      seticon(broken_cloud)
      setweather("Broken Cloud")
    }
    else if (data.weather[0].icon==="09d"|| data.weather[0].icon==="09n"){
      seticon(rain)
      setweather("Shower Rain")
    }
    else if (data.weather[0].icon==="10d"|| data.weather[0].icon==="10n"){
      seticon(drizzle)
      setweather("Rain")
    }
    else if (data.weather[0].icon==="11d"|| data.weather[0].icon==="11n"){
      seticon(thunderstorm)
      setweather("Thunderstorm")
    }
    else if (data.weather[0].icon==="13d"|| data.weather[0].icon==="13n"){
      seticon(snow)
      setweather("Snow")
    }
    else{
      seticon(mist)
      setweather("Mist")
    }

    

  }
  return (
    <div>
    <div className='position-absolute top-50 start-50 translate-middle  text-light bg-dark wcard'>
          <div className="content">
            <div className="top mx-3 my-4">
                <div className="input d-flex" >
                    <input type="text" name="" id="" className='fs-5 fw-bold px-4 searchbar'></input>
                    <div className="img bg-light p-2 rounded mx-3 " onClick={()=>{search()}}>
                    <img src={search_icon} alt="" className=''/>
                    </div>
                </div>
            </div>
            <div className="body">
              <img src={icon} alt="" srcset="" className='w-50 d-flex mx-auto'/>
              <p className='text-center fs-4 fw-semibold'>{weather}</p>
              
              <p className='text-center fs-1 fw-bold d-flex justify-content-center'><div className='temp'></div>&deg;C</p>
              <h2 className='text-center fs-3 fw-bold location'>India</h2>
            </div>
            <div className="bottom d-flex justify-content-around my-4">
              <div className="humidity mt-1  w-25">
                <div className="head d-flex">
                  <img src={humidity} alt=""  className="h-50 w-25 mt-2 pt-1 me-2"/>
                  <div className='d-flex'><p className='fs-4 fw-bold humidity-percent'></p><div className='fs-4 fw-bold'>%</div></div>
                </div>
                <p className='text-center'>Humidity</p>
              </div>
              <div className="wind    ">
              <div className="head d-flex">
                  <img src={wind} alt="" srcset="" className="wind-img mt-2 pt-1 me-2"/>
                  <div className='d-flex mt-2'><p className='fs-4 fw-bold  wind-speed'></p><div className='fs-4 fw-bold'>km/h</div></div>
                </div>
                <p className='text-center'>Wind Speed</p>
              </div>
            </div>
            </div>
    </div>

    </div>
  )
}
