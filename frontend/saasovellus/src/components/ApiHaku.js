

export async function ApiHaku(){
    const response = await fetch("http://localhost:5000/data");
    const data = await response.json();
    return data;
}