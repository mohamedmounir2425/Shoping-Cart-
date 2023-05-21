const { grey } = require("@mui/material/colors");

const getDesignTokens = (mode) => ({
    palette: {
        // @ts-ignore
        mode,
        ...(mode === "light"
          ? {
              // palette values for light mode
              testMano: {
                main: "#64748B",
                contrastText: "#fff",
              },
              favColor: {
                main: grey[300],
              },
            }
          : {
              // palette values for dark mode
              testMano: {
                main: "teal",
                contrastText: "#fff",
              },
              favColor: {
                main: grey[800],
              },
            }),
      },
  });

  export default getDesignTokens;