import React from "react";
import Typography from "@mui/material/Typography";
import { Box, useTheme } from "@mui/material";

export default function NotFound() {
  const theme = useTheme();
  return (
    <>
      <Box>
        <Typography variant="h5" color={theme.palette.error.main}>
          There is no design yet
          <br />
          <br />
          Please try again later..
        </Typography>
      </Box>
    </>
  );
}
