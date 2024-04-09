

export async function SendLocation(search) {
    const response = await fetch(`http://localhost:5000/data/${search}`);
    const data = await response.json();
    return data;
}

export async function Vertaile(kaupunki1, kaupunki2){
    const response = await fetch(`http://localhost:5000/vertaile/${kaupunki1}/vs/${kaupunki2}`);
    const data = await response.json();
    return data;
}

