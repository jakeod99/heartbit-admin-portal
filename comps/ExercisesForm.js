import React from "react";

class ExercisesForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      youngest: undefined,              // Int
      oldest: undefined,                // Int
      lightest: undefined,              // Int
      heaviest: undefined,              // Int
      email: undefined,                 // String
      groupId: undefined,               // String
      sex: undefined,                   // [Sex]
      gender: undefined,                // [Gender]
      race: undefined,                  // [Race]
      smoking: undefined,               // [SmokingHistory]
      vaping: undefined,                // [VapingHistory]
      earliestCollection: undefined,    // DateTime
      latestCollection: undefined,      // DateTime
      clean: undefined                  // [ExerciseStatus]
    };
  }

  render() {
    const variables = {
      variables: this.state
    };

    return (
      <div className="ef-container">
        <button onClick={() => this.props.getExercises(variables)}>
          All Exercises
        </button>
        <button onClick={() => this.props.getExercises({ variables: { 
          youngest: 10, 
          oldest: 60, 
          sex: ["MALE"], 
          race: ["ASIAN"] 
        }})}>
          Exercises for Asian Males Aged 10-60
        </button>
      </div>
    )
  }
}

export default ExercisesForm;