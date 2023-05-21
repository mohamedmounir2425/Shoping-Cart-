import { Box, Button, InputAdornment, TextField } from "@mui/material";
import "./Create.css";

import { styled } from "@mui/material/styles";
import { purple, teal } from "@mui/material/colors";
import { KeyboardArrowRight } from "@mui/icons-material";
import { useState } from "react";
import { json, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  // @ts-ignore
  backgroundColor: theme.palette.testMano.main,
  "&:hover": {
    backgroundColor: teal[300],
    // scale:'.9'
  },
}));

export default function Create() {
  const navigate = useNavigate()
  const {register,handleSubmit, watch, formState: { errors}} = useForm()


  function onSubmit({title,price}) {
    fetch("http://localhost:3002/myData", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ price, title }),
    }).then(() => {
      navigate('/')
    })
  }


  return (
    <Box onSubmit={handleSubmit(onSubmit)} component="form" sx={{ width: "380px" }}>
      <TextField
       
       {...register('title',{
        required:{value:true, message: "This field is Required"},
        minLength:{value:4, message: "minimum length is 4"}
       })}
       error= {Boolean(errors.title)}
       helperText= {
        Boolean(errors.title) ? errors.title?.message.toString() : null
       }
      
        fullWidth
        label="Transaction Title"
        id="filled-start-adornment"
        sx={{ mt: "22px", display: "block" }}
        InputProps={{
          startAdornment: <InputAdornment position="start">👉</InputAdornment>,
        }}
        variant="filled"
        />

      <TextField

        {...register('price',{
          required: {value:true, message:"This field is Required"},
          pattern: {
            value: /^[0-9]*$/,
            message: 'Please enter a valid number'
          },

        })}
        error={Boolean(errors.price)}
        helperText= {
          Boolean(errors.price) ? errors.price?.message.toString() : null
        }
       
        fullWidth
        label="Amount"
        id="filled-start-adornment"
        sx={{ mt: "22px" }}
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
        variant="filled"
      />

      <ColorButton
        type="submit"

        variant="contained"
        sx={{ mt: "22px" }}
      >
        Submit <KeyboardArrowRight />
      </ColorButton>
    </Box>
  );
}
