import styles from "../assets/css/Forecast.module.css";
import { format, addDays, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale"; // Importando o locale para português
import { FaTemperatureArrowDown, FaTemperatureArrowUp } from "react-icons/fa6";


export default function Forecast(weather) {
  const { forecast } = weather;

  const getDayTitle = (dateString, index) => {
    const date = parseISO(dateString);
    if (index === 0) return "Hoje";
    if (index === 1) return "Amanhã";
    return format(date, "eeee", { locale: ptBR });
  };

  const formatDate = (dateString) => {
    const date = parseISO(dateString);
    return format(date, "d MMM", { locale: ptBR });
  };

  return (
    <div className={styles.forecastContainer}>
      {forecast.forecastday.map((day, index) => (
        <div key={index} className={styles.dayCard}>
          <h3>{getDayTitle(day.date, index)}</h3>
          <p>{formatDate(day.date)}</p>
          <div className={styles.minMax}>
          <spam className={styles.spamClass} >
            <FaTemperatureArrowUp size="25px" color="#E32727" />
            {day.day.maxtemp_c}
            {"º"}
          </spam>
          <scam className={styles.spamClass}>
            <FaTemperatureArrowDown size="25px" color="#08CEFF" />
            {day.day.mintemp_c}
            {"º"}
          </scam>
          </div>

          <img src={day.day.condition.icon} alt={day.day.condition.text} width="70" height="70"/>
        </div>
      ))}
    </div>
  );
}
