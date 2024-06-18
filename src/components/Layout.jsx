import { Grid } from "@mui/material";
import Card from "./Cards";

export const skeleton = (weather) => {
  console.log(weather)
  return (

    <Grid container spacing={2}>
      <Grid item xs={4}>
        <Card teste />
      </Grid>
      <Grid item xs={8}>
        <Card teste />
      </Grid>
    </Grid>
  );
};
