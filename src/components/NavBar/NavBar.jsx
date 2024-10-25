import styled from "@emotion/styled";
import { Pets} from "@mui/icons-material";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import React from "react";

const StyledToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search =  styled("div")(({theme}) =>({
    backgroundColor:'white'
}))

const Icons =  styled(Box)(({theme}) =>({
    backgroundColor:'white'
}))

const NavBar = () => {
  return (
    <AppBar position="stick">
      <StyledToolBar>
        <Typography variant="h6" sx={{display:{xs:"none", sm:"block"}}}>Hello DEV</Typography>
        <Pets sx={{display:{xs:"block", sm:"none"}}}></Pets>
        <Search>Search</Search>
        <Icons>Icons</Icons>
      </StyledToolBar>
    </AppBar>
  );
};

export default NavBar;
