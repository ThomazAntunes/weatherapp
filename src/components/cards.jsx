//import winter from "../assets/bgCards/summer.jpg";
import iso31661 from "iso-3166-1";
import styles from "../assets/css/Cards.module.css";
import { FaTemperatureArrowDown, FaTemperatureArrowUp } from "react-icons/fa6";

export default function BasicCard(weather) {
  const { location, current, forecast } = weather;
  const { temp_c, condition } = current;
  const { text, icon } = condition;
  const { name, country, localtime } = location;

  const getCountryCode = (country) => {
    const countryData = iso31661.whereCountry(country);
    return countryData ? countryData.alpha2 : country;
  };

  // Obtém o código do país
  const countryCode = getCountryCode(country);
  const timeOnly = localtime.slice(11, 16);
  const firstDayForecast = forecast.forecastday[0];
  const { maxtemp_c, mintemp_c } = firstDayForecast.day;

  return (
    <div className={styles.mainCard}>
      <div className={styles.cardHeader}>
        <h3>
          {name}, {countryCode}
        </h3>
        <span className={styles.localTime}>{timeOnly}</span>
      </div>
      <div className={styles.cardBody}>
        <span>{temp_c}Cº</span>
        <p>{text}</p>
      </div>
      <div className={styles.cardFooter}>
        <div className={styles.addionalTemp}>
          <>
            <spam className={styles.spamClass}>
              <FaTemperatureArrowUp size="25px" color="#E32727" />
              {maxtemp_c}{"º"}
            </spam>
            <scam className={styles.spamClass}>
              <FaTemperatureArrowDown size="25px" color="#08CEFF" />
              {mintemp_c}{"º"}
            </scam>
          </>
          <p>Sensação: SENSACIONAL</p>
        </div>
        <img src={icon} alt="weather icon" width="101" height="101" />
      </div>
    </div>
  );
}

