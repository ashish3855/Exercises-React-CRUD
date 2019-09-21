import React, { Component } from "react";
import { Header, Footer } from "./components/Layout";
import Exercises from "./components/Exercises/Exercises";
import { muscles, exercises } from "./store";

class App extends Component {
  state = {
    exercises,
    category: "",
    exerciseId: ""
  };

  getExercisesByMuscles = () => {
    const initExercises = muscles.reduce(
      (exercises, category) => ({
        ...exercises,
        [category]: []
      }),
      {}
    );

    return this.state.exercises.reduce((exercises, exercise) => {
      const { muscles } = exercise;
      exercises[muscles] = [...exercises[muscles], exercise];
      return exercises;
    }, initExercises);
  };

  handleCategorySelected = category => {
    this.setState({
      category: category
    });
  };
  handleExersizeSelected = id => {
    this.setState({
      exerciseId: id
    });
  };

  handleNewExercise = exercise => {
    exercise.id =
      exercise.id === ""
        ? exercise.title.replace(/ /g, "-").toLowerCase()
        : exercise.id;
    this.setState({
      exercises: [...this.state.exercises, exercise]
    });
  };

  handledeleteExercise = id => {
    let newList = this.state.exercises.filter(ex => ex.id !== id);
    this.setState({
      exercises: newList
    });
  };

  render() {
    const exercises = Object.entries(this.getExercisesByMuscles());
    const { category, exerciseId } = this.state;
    return (
      <React.Fragment>
        <Header
          exercisesByGroup={exercises}
          createExercise={this.handleNewExercise}
        />
        <Exercises
          category={category}
          exercises={exercises}
          rawExercise={this.state.exercises}
          exerciseSelected={this.handleExersizeSelected}
          exerciseId={exerciseId}
          deleteItem={this.handledeleteExercise}
        />
        <Footer
          category={category}
          muscles={muscles}
          onSelect={this.handleCategorySelected}
        />
      </React.Fragment>
    );
  }
}

export default App;
