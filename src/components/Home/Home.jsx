import { Box, Paper, IconButton, useTheme } from "@mui/material";
import "./Home.css";
import Typography from "@mui/material/Typography";
import { Close } from "@mui/icons-material";
import { useEffect, useState } from "react";

export default function Home() {
  const [myData, setMyData] = useState([])
  
  useEffect(() => {
    fetch("http://localhost:3002/myData")
    .then((response) => response.json())
    .then((data) => setMyData(data))
  },[])

  function handleDelete(id) {
    fetch(`http://localhost:3002/myData/${id}`,{method: "DELETE"})

    const newArr = myData.filter((item) => {
      return item.id != id

    })
    setMyData(newArr)
  }

  let totalPrice = 0

  return (
    <>
      <Box>
        {myData.map(({id, title, price}) => {
          totalPrice += +price
          return(
            <Paper
            key={id}
          sx={{
            position: "relative",
            display: "flex",
            justifyContent: "space-between",
            width:'366px',
            mt:'22px',
            pt:'27px',
            pb:'7px'
          }}
        >
          <Typography sx={{ml:'16px',fontSize:'1.4em'}} variant="h6">
            {title}
          </Typography>

          <Typography sx={{mr:'33px',fontWeight:500,fontSize:'1.4em',opacity:0.8,}} variant="h6" >
            ${price}
          </Typography>

          <IconButton onClick={() => {
            handleDelete(id)
            
          }} sx={{ position: "absolute", top: "0", right: "0" }}>
            <Close />
          </IconButton>
        </Paper>


          )
        })}

          <Typography  mt="55px" textAlign="center" variant="h6" >👉 You Spend ${totalPrice}</Typography>

      </Box>
    </>
  );
}
