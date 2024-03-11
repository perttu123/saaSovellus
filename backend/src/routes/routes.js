
import express from 'express'

const router = express.Router();


router.get('/data/:search', async (req, res)=>{

    const search = req.params.search;
    const coordinates = await getCoordinates({search});

    const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${coordinates.latitude}&longitude=${coordinates.longitude}&hourly=temperature_2m&timezone=Europe%2FBerlin`);
    const data = await response.json();
    res.send(data);

});

async function getCoordinates({search}){
    
    const response2 = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${search}`)

    const data = await response2.json();

    const coordinates = {latitude: data[0].lat, longitude: data[0].lon}
        
    return coordinates;
    
}

export default router;