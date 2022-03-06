import React from "react";
import { Button } from "react-bootstrap";

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
    return (
      <div className="ef-container">
        <div className="ef-age-range-container"></div>
        <div className="ef-weight-range-container"></div>
        <div className="ef-email-container"></div>
        <div className="ef-group-container"></div>
        <div className="ef-date-range-container"></div>
        <div className="ef-sex-container"></div>
        <div className="ef-tobacco-container"></div>
        <div className="ef-vape-container"></div>
        <div className="ef-gender-container"></div>
        <div className="ef-race-container"></div>
        <div className="ef-clean-container"></div>
        <Button className="ef-submit" variant="primary" onClick={() => this.props.getExercises({
          variables: this.state
        })}>
          Search
        </Button>
      </div>
    )
  }
}

export default ExercisesForm;