import express from 'express';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.get('/data', async (req, res)=>{
    const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=64&longitude=26&hourly=temperature_2m&timezone=Europe%2FBerlin');
    const data = await response.json();
    console.log(data);
    res.send(data);
});

app.listen(port, ()=>{
    console.log("listening port: "+port);
});