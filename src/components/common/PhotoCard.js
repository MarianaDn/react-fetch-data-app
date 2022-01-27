import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  styled,
} from "@mui/material";

const PREFIX = "PhotoCard";

const StyledCard = styled(Card, {
  name: `${PREFIX}-StyledCard`,
})(({ theme }) => ({
  height: 380,

  [theme.breakpoints.down("md")]: {
    height: "auto",
  },
}));

const StyledCardMedia = styled(CardMedia, {
  name: `${PREFIX}-StyledDivider`,
})(({ theme }) => ({
  height: 300,

  [theme.breakpoints.down("md")]: {
    height: 175,
  },
}));

export const PhotoCard = ({ image, title }) => (
  <StyledCard>
    <StyledCardMedia component="img" image={image} alt={title} />
    <CardContent>
      <Typography
        gutterBottom
        variant="h2"
        component="div"
        sx={{ fontSize: 16 }}
      >
        {title[0].toUpperCase() + title.slice(1)}
      </Typography>
    </CardContent>
  </StyledCard>
);
