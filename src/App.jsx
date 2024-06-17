// api: http://api.weatherapi.com/v1/current.json?key=3ddb335117434888ae5133729232605&q=itabira

import { useState } from "react";
import Cards from "./components/cards";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");

  async function checkCity() {
    let resp;
    try {
      resp = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=3ddb335117434888ae5133729232605&q=${city}&lang=pt`
      );
    } catch (error) {
      console.log(error);
    }

    if (resp?.ok) {
      const data = await resp.json();
      setWeather(data);      
    } else {
      console.log(resp);
    }
  }

  return (
    <>
      <h1>Bem Vindo ao LampWeather</h1>
      <h3>Entre com a sua cidade</h3>
      <input
        placeholder="Cidade"
        onChange={(e) => {
          setCity(e.target.value);
        }}
      ></input>
      <button onClick={checkCity}>Pesquisar</button>
      {weather && <Cards {...weather}/>}
    </>
  );
}

export default App;
