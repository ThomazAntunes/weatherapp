import { useState } from "react";
import Card from "./components/cards";
import checkCity from "./helpers/getCity";
import Forecast from "./components/forecast";
import styles from "./assets/css/App.module.css";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  async function cityData(city) {
    try {
      const data = await checkCity(city);
      if (typeof data === "string") {
        setError(data);
        setWeather(null);
      } else {
        setWeather(data);
        setError("");
      }
    } catch (err) {
      setError("Falha ao fazer a requisição, favor tentar novamente");
      setWeather(null);
    }
  }

  return (
    <>
      <div>
        <h1>Bem Vindo ao LampWeather</h1>
        <h3>Entre com a sua cidade</h3>
        <input
          placeholder="Cidade"
          onChange={(e) => {
            setCity(e.target.value);
          }}
        />
        <button onClick={() => cityData(city)}>Pesquisar</button>
        {error && <p>{error}</p>}
        {weather && (
          <>
            <div>
              <Card {...weather} />
              <Forecast {...weather} />
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
