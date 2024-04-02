

export async function SendLocation(search) {
    const response = await fetch(`http://localhost:5000/data/${search}`);
    const data = await response.json();
    return data;
}

export async function Vertailu(search){
    const response = await fetch(`http://localhost:5000/vertaile/${search.kaupunki1}vs${search.kaupunki2}`);
    const data = await response.json();
    return data;
}

