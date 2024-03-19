

export async function ApiHaku(){
    const response = await fetch("http://localhost:5000/data");
    const data = await response.json();
    return data;
}

export async function SendLocation(search) {
    const response = await fetch(`http://localhost:5000/data/${search}`);
    const data = await response.json();
    return data;
}