import { useState } from "react";
import { Box, styled, Typography } from "@mui/material";
import unsplash from "../api/unsplash";
import { SearchField } from "./SearchField";
import { PhotoList } from "./PhotoList";

const PREFIX = "Form";

const StyledForm = styled(Box, {
  name: `${PREFIX}-StyledForm`,
})(({ theme }) => ({
  border: `1px solid ${theme.palette.secondary.main}`,
  padding: theme.spacing(3),
  borderRadius: 15,
  margin: theme.spacing(3, 0),
}));

export const Form = () => {
  const [value, setValue] = useState("");
  const [images, setImages] = useState([]);

  const handleChange = (event) => setValue(event.target.value);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await unsplash.get("search/photos", {
      params: { query: value },
    });

    setImages(response.data.results);
  };

  return (
    <StyledForm
      component="form"
      noValidate
      autoComplete="off"
      sx={{ width: "70%" }}
      data-testid="form"
      onSubmit={handleSubmit}
    >
      <Typography sx={{ fontSize: 36, fontWeight: "bold" }}>
        Image search
      </Typography>
      <SearchField value={value} onChange={handleChange} />
      {images.length > 0 && <PhotoList data={images} />}
    </StyledForm>
  );
};
