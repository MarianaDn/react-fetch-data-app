import { Grid } from "@mui/material";
import { PhotoCard } from "./common/PhotoCard";

export const PhotoList = ({ data }) => (
  <Grid container spacing={2}>
    {data.map(({ id, urls, alt_description }) => (
      <Grid item key={id} xs={12} md={6}>
        <PhotoCard image={urls.full} title={alt_description} />
      </Grid>
    ))}
  </Grid>
);
