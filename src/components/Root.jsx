import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Drawerr from "./Drawerr/Drawerr";
import { Box } from "@mui/material";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { useMemo, useState } from "react";
import { cyan, deepPurple, grey, pink } from "@mui/material/colors";
import getDesignTokens from "./styles/MyTheme";

const drawerWidth = 240;

export default function Root() {
  const [mode, setMyMode] = useState(
    localStorage.getItem("currentMode") || "light"
  );
  const [noneORblock, setnoneORblock] = useState("none");
  const [permanent, setPermanent] = useState("permanent");
  // const darkTheme = createTheme({
  //   palette: {
  //     // @ts-ignore
  //     mode,
  //     ...(mode === "light"
  //       ? {
  //           // palette values for light mode
  //           testMano: {
  //             main: "#64748B",
  //             contrastText: "#fff",
  //           },
  //           favColor: {
  //             main: grey[300],
  //           },
  //         }
  //       : {
  //           // palette values for dark mode
  //           testMano: {
  //             main: "teal",
  //             contrastText: "#fff",
  //           },
  //           favColor: {
  //             main: grey[800],
  //           },
  //         }),
  //   },
  // });


  const showDrawer = () => {
    setPermanent("permanent")
    setnoneORblock('none')
  }


  const hideDrawer = () => {
    setPermanent('temporary')
            setnoneORblock('block')
  }
  
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <div>
        <Header
          hideDrawer = {hideDrawer}
          drawerWidth={drawerWidth}
        />
        <Drawerr
          noneORblock={noneORblock}
          setMyMode={setMyMode}
          drawerWidth={drawerWidth}
          permanent={permanent}
          showDrawer={showDrawer}
        />
        <Box
          component="main"
          sx={{
            ml: { sm: `${drawerWidth}px` },
            display: "flex",
            justifyContent: "center",
            mt: "66px",
          }}
        >
          <Outlet />
        </Box>
      </div>
    </ThemeProvider>
  );
}
