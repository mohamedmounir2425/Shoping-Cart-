import { Menu } from "@mui/icons-material";
import "./Header.css";
import { Avatar, Link, Typography, Toolbar, AppBar, IconButton } from "@mui/material";

export default function Header({ drawerWidth ,hideDrawer}) {
  return (
    <>
      <AppBar
        position="static"
        sx={{ 
          width: {sm:`calc(100% - ${drawerWidth}px)`}, 
          ml: {sm:`${drawerWidth}px`} 
        }}
      >
        <Toolbar>
          <IconButton onClick={() => {
            hideDrawer()
          }
          } sx={{mr:'9px', display:{sm:'none'}}} >
             <Menu/>
          </IconButton>
          <Link
            href="/"
            sx={{ flexGrow: "1", "&:hover": { fontSize: "16.5px" } }}
            color="inherit"
            underline="none"
          >
            My Expenses
          </Link>

          <Typography color="inherit"> Mohamed Mounir</Typography>
          <Avatar
            sx={{ ml: "10px" }}
            alt="Remy Sharp"
            src="images/photo_2023-03-17_19-55-42.jpg"
          />
        </Toolbar>
      </AppBar>
    </>
  );
}
