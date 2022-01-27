import { TextField, styled } from "@mui/material";

const PREFIX = "SearchField";

const StyledTextField = styled(TextField, {
  name: `${PREFIX}-StyledTextField`,
})(({ theme }) => ({
  margin: theme.spacing(2, 0),
  width: "100%",
}));

export const SearchField = ({ value, onChange }) => (
  <StyledTextField
    id="outlined-basic"
    label="Search..."
    variant="outlined"
    value={value}
    onChange={onChange}
  />
);
