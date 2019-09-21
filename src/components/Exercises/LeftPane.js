import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";

class LeftPane extends Component {
  render() {
    return (
      <div>
        <Paper style={this.props.style}>
          {this.props.exercises.map(
            ([group, exercises], index) =>
              !this.props.category || this.props.category === group ? (
                <div key={index}>
                  <Typography
                    variant="h6"
                    style={{ textTransform: "capitalize" }}
                  >
                    {group}
                  </Typography>
                  <List component="ul">
                    {exercises.map(({ title, id }, index) => (
                      <ListItem key={title + index} button>
                        <ListItemText
                          primary={title}
                          onClick={() => this.props.exerciseSelected(id)}
                        />
                        <IconButton
                          color="primary"
                          onClick={() => this.props.deleteExercise(id)}
                        >
                          <EditIcon />
                        </IconButton>
                        <IconButton
                          color="secondary"
                          onClick={() => this.props.deleteExercise(id)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </ListItem>
                    ))}
                  </List>
                </div>
              ) : null
          )}
        </Paper>
      </div>
    );
  }
}

export default LeftPane;
