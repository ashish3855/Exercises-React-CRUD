import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";

class RightPane extends Component {
  render() {
    const exercise = this.props.rawExercise.filter(
      ex => ex.id === this.props.exerciseId
    );
    const [title] = exercise.map(a => a.title);
    const [description] = exercise.map(a => a.description);

    return (
      <div>
        <Paper style={this.props.style}>
          <Typography variant="h4">{title ? title : "Welcome!"}</Typography>
          <br />
          <Typography variant="heading">
            {description ? description : "Please Select a Exercise."}
          </Typography>
        </Paper>
      </div>
    );
  }
}

export default RightPane;
