

export async function SendLocation(search) {
    const response = await fetch(`http://localhost:5000/data/${search}`);
    const data = await response.json();
    return data;
}

export async function Vertaile(search){
    const response = await fetch(`http://localhost:5000/data/vertaile/${search}`);
    const data = await response.json();
    return data;
}


