import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import LeftPane from "./LeftPane";
import RightPane from "./RightPane";

const style = {
  paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10
  }
};

class Exercises extends Component {
  render() {
    return (
      <div>
        <Grid container>
          <Grid item sm>
            <LeftPane
              category={this.props.category}
              exercises={this.props.exercises}
              style={style.paper}
              exerciseSelected={this.props.exerciseSelected}
              deleteExercise={this.props.deleteItem}
            />
          </Grid>
          <Grid item sm>
            <RightPane
              style={style.paper}
              rawExercise={this.props.rawExercise}
              exerciseId={this.props.exerciseId}
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Exercises;
