import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Text from "@mui/material/Typography";

export default function BasicCard(weather) {
  const { ...rest } = weather;
  
  return (
    <Card sx={{ maxWidth: 275 }}>
      <CardContent>
        <Text sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Temperatura Cº: {rest.weather.current.temp_c}
        </Text>
        <Text sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Condição: {rest.weather.current.condition.text}
        </Text>        
        <Text sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          País: {rest.weather.location.country}<br/>

          Região: {rest.weather.location.region}<br/>
          
          Cidade: {rest.weather.location.name}
        </Text>
        <img src={rest.weather.current.condition.icon}></img>
      </CardContent>
      <CardActions>
        <Button size="small">ME MAMA</Button>
      </CardActions>
    </Card>
  );
}
