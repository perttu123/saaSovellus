import express from 'express'
import {get7Hours, getCurrentData, getWeeklyData} from '../jsonQueries/queries.js';

const router = express.Router();


router.get('/localip', (req,res) =>{
    res.send(JSON.stringify(ipAddress))}) 

router.get('/data/vertaile/:search', async (req, res)=>{
    const search = req.params.search;
    console.log(search);
    const coordinates = await getCoordinates(search);

    const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${coordinates.latitude}&longitude=${coordinates.longitude}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&hourly=temperature_2m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=Africa%2FCairo`);
    const data = await response.json();

    const response2 = getCurrentData({data});
    const currentData ={
        city: search,
        temperature: data.current.temperature_2m,
        image: response2.image,
        saatyyppi: response2.saaTyyppi

    }
    res.send(currentData);
})

router.get('/data/:search', async (req, res)=>{

    const search = req.params.search;

    const coordinates = await getCoordinates(search);
    

    if(coordinates=="error"){
        res.send({error: "error"});
    }
    else{
        
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${coordinates.latitude}&longitude=${coordinates.longitude}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&hourly=temperature_2m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=Africa%2FCairo`);
        const data = await response.json();

        const sevenHours = get7Hours({data});
        const weekly = getWeeklyData({data});
        const weatherData = {
            hours: sevenHours,
            current: data.current,
            daily: weekly,
            city: search
        }
        res.send(weatherData);
    }    
});

async function getCoordinates(search){
    
    const response2 = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${search}`)
    const data = await response2.json();
    if(data && data.length === 0){

        return "error";
    }
    else{
        const coordinates = {latitude: data[0].lat, longitude: data[0].lon}
        return coordinates;
    }
}

export default router;