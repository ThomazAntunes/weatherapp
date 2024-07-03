export default async function checkCity(city) {
  try {
    const resp = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=3ddb335117434888ae5133729232605&q=${city}&days=5&aqi=no&alerts=no&lang=pt`
    );
    if (resp.ok) {
      const data = await resp.json();
      return data;
    } else {
      return "Cidade não encontrada";
    }
  } catch (error) {
    return "Falha ao fazer a requisição, favor tentar novamente";
  }
}

