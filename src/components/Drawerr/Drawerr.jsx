import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
} from "@mui/material";
import {
  Brightness4,
  Brightness7,
  Create,
  Home,
  Logout,
  Person2,
  Settings,
} from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "@emotion/react";

export default function Drawerr({
  drawerWidth,
  setMyMode,
  noneORblock,
  permanent,
  showDrawer,
}) {
  const navigate = useNavigate();
  const theme = useTheme();
  const location = useLocation();
  const myList = [
    { text: "Home", icon: <Home />, path: "/" },
    { text: "Create", icon: <Create />, path: "/create" },
    { text: "Profile", icon: <Person2 />, path: "/profile" },
    { text: "Setting", icon: <Settings />, path: "/setting" },
  ];
  return (
    <>
      <Drawer
        sx={{
          display: { xs: noneORblock, sm: "block" },
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant={permanent}
        anchor="left"
        open={true}
        onClose={() => {
          showDrawer();
        }}
      >
        <Divider />

        <List>
          <ListItem
            disablePadding
            sx={{ display: "flex", justifyContent: "center", mb: "14px" }}
          >
            <IconButton
              sx={{ ml: 1 }}
              onClick={() => {
                // @ts-ignore
                localStorage.setItem(
                  "currentMode",
                  // @ts-ignore
                  theme.palette.mode == "dark" ? "light" : "dark"
                );
                // @ts-ignore
                setMyMode(theme.palette.mode == "dark" ? "light" : "dark");
              }}
              color="inherit"
            >
              {
                // @ts-ignore
                theme.palette.mode === "dark" ? (
                  <Brightness7 sx={{ color: "orange" }} />
                ) : (
                  <Brightness4 />
                )
              }
            </IconButton>
          </ListItem>
          <Divider />

          {myList.map(({ text, icon, path }) => {
            return (
              <ListItem
              key={text}
                // @ts-ignore
                sx={{
                  bgcolor:
                    location.pathname === path
                      // @ts-ignore
                      ? theme.palette.favColor.main
                      : null,
                }}
                disablePadding
              >
                <ListItemButton
                  onClick={() => {
                    navigate(path);
                  }}
                >
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            );
          })}

<ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Logout />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItemButton>
        </ListItem>
          
        </List>
      </Drawer>
    </>
  );
}
