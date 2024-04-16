
export function get7Hours({data}){

    const array = [];
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Adding 1 because months are zero-based
    const day = String(currentDate.getDate()).padStart(2, '0');
    const hour = String(currentDate.getHours()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}T${hour}:00`;
  
    if (data.hourly){
      let currentIndex = data.hourly.time.indexOf(formattedDate);

      for (let index = 0; index < 7; index++) {
        let image = "";
        const weatherCode = data.hourly.weather_code[index];
        console.log(weatherCode)
        switch (weatherCode) {

          case 0: 
            image = "Static/clear-day.svg"
            break;
    
          case 1: case 2:
            image = "Static/partly-cloudy-day.svg"
            break;
    
          case 3: case 45: case 48:
            image = "Static/cloudy.svg"
            break;
    
            case 51: case 53: case 55: case 56: case 57: case 61: case 63: case 65: case 66: case 67: case 80: case 81: case 82:
            image = "Static/rain.svg";
            break;
    
            case 71: case 73: case 75: case 77: case 85: case 86:
            image = "Static/snow.svg";
            break;

          case 95: case 96: case 99:
            image = "Static/thunderstorms.svg";
            break;
          
          default:
            break;

        }
        const newHourData = { time: data.hourly.time[currentIndex], temp: data.hourly.temperature_2m[currentIndex], image: image};
        array.push(newHourData);
        currentIndex++;
      }
    }
    
    return array;
}

export function getWeeklyData({data}){
  console.log(data.daily.weather_code)
  let array = [];
  for (let index = 0; index < data.daily.weather_code.length; index++) {
    let image = "";
    const weatherCode = data.daily.weather_code[index];
    switch (weatherCode) {
        case 0:
        image = "Static/clear-day.svg"
        break;

      case 1: case 2:
        image = "Static/partly-cloudy-day.svg"
        break;

      case 3: case 45: case 48: case 55:
        image = "Static/cloudy.svg"
        break;


      case 51: case 53: case 55: case 56: case 57: case 61: case 63: case 65: case 66: case 67: case 80: case 81: case 82:

        image = "Static/rain.svg";
        break;

      case 71: case 73: case 75: case 77: case 85: case 86:
        image = "Static/snow.svg";
        break;

      case 95: case 96: case 99:
        image = "Static/thunderstorms.svg";
        break;

      default:

    }
    const newHourData = {date: data.daily.time[index], max: data.daily.temperature_2m_max[index], min: data.daily.temperature_2m_min[index], image: image};
    array.push(newHourData);
  
  }

  return array;
}
 
export function getCurrentData({data}){

  let image = "";
  let saaTyyppi = "";
  switch (data.current.weather_code) {
    case 0:
    image = "Gifit/clear-day.svg"
    saaTyyppi = "Aurinkoista"
    break;

  case 1: case 2:
    image = "Gifit/partly-cloudy-day.svg"
    saaTyyppi = "Puolipilvistä"
    break;

  case 3: case 45: case 48: case 55:
    image = "Gifit/cloudy.svg"
    saaTyyppi = "Pilvistä"
    break;


  case 51: case 53: case 55: case 56: case 57: case 61: case 63: case 65: case 66: case 67: case 80: case 81: case 82:

    image = "Gifit/rain.svg";
    saaTyyppi = "Sateista";
    break;

  case 71: case 73: case 75: case 77: case 85: case 86:
    image = "Gifit/snow.svg";
    saaTyyppi = "Lumisadetta";
    break;

  case 95: case 96: case 99:
    image = "Gifit/thunderstorms.svg";
    saaTyyppi = "Myrsky";
    break;

  default:
    break;
}
  return {image, saaTyyppi};
}