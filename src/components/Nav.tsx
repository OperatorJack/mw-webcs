import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

export function Nav() {
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <Typography variant="h6" color="inherit">
          Morrowind WebCS
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
