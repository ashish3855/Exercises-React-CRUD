import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import AddIcon from "@material-ui/icons/Add";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";

import { withStyles } from "@material-ui/core/styles";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  }
});

class Create extends Component {
  state = {
    open: false,
    exercise: {
      id: "",
      title: "",
      description: "",
      muscles: ""
    }
  };

  handleClickOpen = () => {
    this.setState({
      open: true
    });
  };

  handleClose = () => {
    this.setState({
      open: false
    });
  };

  handleChange = input => e => {
    this.setState({
      exercise: {
        ...this.state.exercise,
        [input]: e.target.value
      }
    });
  };

  handleSubmit = () => {
    this.props.onCreate(this.state.exercise);
    this.setState({
      exercise: {
        id: "",
        title: "",
        description: "",
        muscles: ""
      }
    });
    this.setState({
      open: false
    });
  };

  render() {
    return (
      <div>
        <Button color="secondary" onClick={this.handleClickOpen}>
          <AddIcon style={{ color: "white" }} fontSize="large" />
        </Button>
        <Dialog
          open={this.state.open}
          TransitionComponent={Transition}
          fullWidth
          onClose={this.handleClose}
        >
          <DialogTitle id="alert-dialog-slide-title">
            {"Add New Exercise"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              <form noValidate style={styles().container} autoComplete="off">
                <FormControl fullWidth>
                  <TextField
                    select
                    label="Select"
                    value={this.state.exercise.muscles}
                    onChange={this.handleChange("muscles")}
                    helperText="Please select an Exercise"
                    margin="normal"
                  >
                    {this.props.exercisesByGroup.map(option => (
                      <MenuItem key={option[0]} value={option[0]}>
                        {option[0].toUpperCase()}
                      </MenuItem>
                    ))}
                  </TextField>
                </FormControl>
                <FormControl fullWidth>
                  <TextField
                    label="Title"
                    value={this.state.exercise.title}
                    onChange={this.handleChange("title")}
                    margin="normal"
                  />
                </FormControl>
                <FormControl fullWidth>
                  <TextField
                    multiline
                    rows="4"
                    label="Description"
                    value={this.state.exercise.description}
                    onChange={this.handleChange("description")}
                    margin="normal"
                  />
                </FormControl>
              </form>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={this.handleSubmit}
              variant="contained"
              color="primary"
            >
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(Create);
