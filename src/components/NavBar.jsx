import { AppBar, Toolbar, Typography, Button, Stack } from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router-dom";
import ListAltIcon from "@mui/icons-material/ListAlt";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import NoteAddIcon from '@mui/icons-material/NoteAdd';

export default function NavBar() {
  const location = useLocation();
  return (
    <AppBar
  position="static"
  sx={{
    borderRadius: 0,
    background: "linear-gradient(90deg, #8e24aa 0%,#71db55 100%)",
  }}
>
      <Toolbar>
        <Stack direction="row" spacing={2}>
       <Button
  color="primary"
  variant="contained"
  component={RouterLink}
  to="/"
  startIcon={<AccountBalanceIcon />}
  sx={{ fontWeight: "bold" }}
>
  Produtos
</Button>

<Button
  color="primary"
  variant="contained"
  component={RouterLink}
  to="/novo"
  startIcon={<NoteAddIcon />}
  sx={{ fontWeight: "bold" }}
>
  Novo Produto
</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
