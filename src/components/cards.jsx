import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Text from "@mui/material/Typography";

export default function BasicCard(weather) {
  const {location, current} = weather
  const {temp_c, condition} = current
  const {text, icon} = condition
  const {region, name, country} = location

  return (
    <Card sx={{ maxWidth: 275 }}>
      <CardContent>
        <Text sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Temperatura Cº: {temp_c}
        </Text>
        <Text sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Condição: {text}
        </Text>
        <Text sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          País: {country}
          <br />
          Região: {region}
          <br />
          Cidade: {name}
        </Text>
        <img src={icon}></img>
      </CardContent>
      <CardActions>
        <Button size="small">EU SOU UM BOTÃO</Button>
      </CardActions>
    </Card>
  );
}
