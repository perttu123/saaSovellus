import express from 'express'
import {get7Hours, getWeeklyData} from '../jsonQueries/queries.js';
import os from 'os'

const networkInterfaces = os.networkInterfaces();
const ipAddress = networkInterfaces.WLAN.find(entry => entry.family === 'IPv4').address;

const router = express.Router();


router.get('/localip', (req,res) =>{
    res.send(JSON.stringify(ipAddress))}) 

router.get('/vertaile/:kaupunki1/vs/:kaupunki2', async (req, res)=>{
    const kaupunki1 = req.params.kaupunki1;
    const kaupunki2 = req.params.kaupunki2;
    let coordinates1, coordinates2;
    
    coordinates1 = await getCoordinates(kaupunki1);
    coordinates2 = await getCoordinates(kaupunki2);
    

    console.log(coordinates2, coordinates1);
    if(coordinates1=="error" || coordinates2=="error"){
        res.send({error: "error"});
    }
    else{
        
        const response1 = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${coordinates1.latitude}&longitude=${coordinates1.longitude}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&hourly=temperature_2m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=Africa%2FCairo`);
        const data1 = await response1.json();

        // const sevenHours1 = get7Hours({data1});
        // const weekly1 = getWeeklyData({data1});
        // const weatherData1 = {
        //     hours: sevenHours1,
        //     current: data1.current,
        //     daily: weekly1,
        //     city: kaupunki1
        // }

        const response2 = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${coordinates2.latitude}&longitude=${coordinates2.longitude}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&hourly=temperature_2m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=Africa%2FCairo`);
        const data2 = await response2.json();

        // const sevenHours2 = get7Hours({data2});
        // const weekly2 = getWeeklyData({data2});
        // const weatherData2 = {
        //     hours: sevenHours2,
        //     current: data1.current,
        //     daily: weekly2,
        //     city: kaupunki2
        // }
        
        const body ={
            data1: data1,
            data2: data2
        }
        res.status(200).send(body) 
    }    

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