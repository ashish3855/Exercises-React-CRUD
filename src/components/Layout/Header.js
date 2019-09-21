import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Create from "../Exercises/Dialogs/Create";

class Header extends Component {
  render() {
    // console.log(this.props.exercisesByGroup);
    return (
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" href="#" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography style={{ flex: 1 }} variant="h6">
            News
          </Typography>
          <Create
            exercisesByGroup={this.props.exercisesByGroup}
            onCreate={this.props.createExercise}
          />
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
