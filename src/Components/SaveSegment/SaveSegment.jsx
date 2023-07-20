import React, { useState } from "react";
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Container from "@mui/material/Container";
import { DrawerComponent } from "../Drawer/Drawer";
import { cyan } from '@mui/material/colors';

export function SaveSegmentButton(){
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.common.white,
  backgroundColor: cyan[300],
  '&:hover': {
    backgroundColor: cyan[400],
  },
}));

  return (
    <Container>
      <ColorButton onClick={handleDrawerOpen} variant="contained" sx={{ marginTop: "100px" }}>
        Save Segment
      </ColorButton>
      <DrawerComponent open={open} onClose={handleDrawerClose} />
    </Container>
  )
};