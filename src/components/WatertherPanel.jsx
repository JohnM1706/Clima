import React,{useState} from "react";
import Fromulario from "./Formulario";
import Card from "./Card";

const WatertherPanel = () =>{
    
    let urlweather = "https://api.openweathermap.org/data/2.5/weather?appid=1020b37431b9251cb3d7ecd7864f10c5&lang=es";
    let ciudadurl = "&q=";

    let urlForecast = "https://api.openweathermap.org/data/2.5/forecast?appid=1020b37431b9251cb3d7ecd7864f10c5&lang=es";

    const [weather,setWeather]= useState([]);
    const [forecast,setForecast]= useState([]);
    const [loading,setLoading]= useState(false);
    const [show,setShow]= useState(false);
    const [location,setLocation]= useState(""); 

    const getLocation = async(loc) =>{
        setLoading(true);
        setLocation(loc);
        //weather
        urlweather = urlweather + ciudadurl + loc;
        //apifes para la llamada\
        await fetch(urlweather).then((response)=>{
            if(!response.ok) throw{response}
            return response.json();

        }).then((weatherData)=>{
            console.log(weatherData);
            setWeather(weatherData);
        }).catch(error =>{
            console.log(error);
            setLoading(false);
            setShow(false);
        });
        //forscast
        urlForecast = urlForecast + ciudadurl + loc;
        await fetch(urlForecast).then((response)=>{
            if(!response.ok) throw{response}
            return response.json();

        }).then((forecastData)=>{
            console.log(forecastData);
            setForecast(forecastData);

            setLoading(false);
            setShow(true);

        }).catch(error =>{
            console.log(error);
            setLoading(false);
            setShow(false);
        });

    }
    return(
        <React.Fragment>
            <Fromulario
                newLocation = {getLocation}
            />
            <Card
                showData = {show}
                loadingData = {loading}
                weather = {weather}
                forecast = {forecast}
            />
        </React.Fragment>
    );
}
export default WatertherPanel;