

export async function ApiHaku(){
    const response = await fetch("http://localhost:5000/data");
    const data = await response.json();
    return data;
}

export async function SendLocation(search) {
    await fetch(`http://localhost:5000/data/${search}`);
    // await fetch(`http://localhost:5000/data/${search}`, {
    //   method: "POST",
    //   headers: {'Content-Type': 'application/json'},
    //   body: JSON.stringify(search)
    // })
    return id;
  }