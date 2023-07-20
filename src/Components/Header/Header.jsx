import { Toolbar, Typography } from "@mui/material";
import React from "react";
import { cyan } from '@mui/material/colors';
import { ArrowBackIos } from '@mui/icons-material';

export function Header({text}){
  return (
    <Toolbar sx={{ backgroundColor: cyan[500], display: 'flex', alignItems: 'center' }}>
      <ArrowBackIos fontSize="small" sx={{ marginRight: '8px', color: "white" }} />
      <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: "white" }}>
        {text}
      </Typography>
    </Toolbar>
  )
}