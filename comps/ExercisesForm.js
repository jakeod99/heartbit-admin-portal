import React from "react";
import { Button, Col, Container, Form, FormControl, Row } from "react-bootstrap";

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

    this.handleChange = this.handleChange.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }  
  
  handleChange(event) {
    const valueAsInt = parseInt(event.target.value)
    const value = valueAsInt ? valueAsInt : event.target.value;
    this.setState({[event.target.name]: value});
    this.setState({[event.target.name]: (value == "" ? undefined : value)});
  }

  handleCheckboxChange(event) {
    const nameArr = event.target.name.split("-");
    const stateKey = nameArr[0];
    let stateValue = this.state[stateKey] ? this.state[stateKey] : [];
    const boxValue = nameArr[1];
    const checked = event.target.checked;
    const index = stateValue.indexOf(boxValue);
    if (checked && index === -1) {
      stateValue.push(boxValue);
    } else if (!checked && index !== -1) {
      stateValue.splice(index, 1);
      if (stateValue.length === 0) {
        stateValue = undefined;
      }
    }
    this.setState({[stateKey]: stateValue});
    console.log(stateKey + " " + boxValue + " " + checked + " " + stateValue);
  }

  handleSubmit(event) {
    // handleSubmit = (this.props) = (event) => {
    event.preventDefault();
    this.props.getExercises({
      variables: this.state
    })
  }

  render() {
    return (
      <Container className="ef-container">
        <Form className="ef" onSubmit={this.handleSubmit}>
          <Row>
            <Col md={5}>
              <Row>
                <Col>
                  <div className="ef-age-range-container">
                    <p className="ef-age-range-label">Age Range</p>
                    <Row>
                      <FormControl 
                        name="youngest" 
                        type="number" 
                        placeholder="youngest"
                        className="ef-age-range-young" 
                        onChange={this.handleChange}
                      />
                      <div className="ef-age-range-dash">-</div>
                      <FormControl 
                        name="oldest" 
                        type="number" 
                        placeholder="oldest"
                        className="ef-age-range-old"  
                        onChange={this.handleChange}
                      />
                    </Row>
                  </div>
                  <div className="ef-email-container">
                    <p className="ef-email-label">Email</p>
                    <FormControl 
                        name="email" 
                        placeholder="john@example.com" 
                        className="ef-email"  
                        onChange={this.handleChange}
                      />
                  </div>
                </Col>
                <Col>
                  <div className="ef-weight-range-container">
                    <p className="ef-weight-range-label">Weight Range</p>
                    <Row>
                      <FormControl 
                        name="lightest" 
                        type="number" 
                        placeholder="lightest" 
                        className="ef-weight-range-light"  
                        onChange={this.handleChange}
                      />
                      <div className="ef-weight-range-dash">-</div>
                      <FormControl 
                        name="heaviest" 
                        type="number" 
                        placeholder="heaviest"
                        className="ef-weight-range-heavy"  
                        onChange={this.handleChange}
                      />
                    </Row>
                  </div>
                  <div className="ef-group-container">
                    <p className="ef-group-label">Group</p>
                    <FormControl 
                        name="groupId" 
                        placeholder="TODO" 
                        className="ef-group"  
                        onChange={this.handleChange}
                        disabled={true}
                      />
                  </div>
                </Col>
              </Row>
              <div className="ef-collection-range-container">
                <p className="ef-collection-range-label">Collection Date Range</p>
                <Row>
                  <FormControl 
                    name="earliestCollection" 
                    type="date" 
                    className="ef-collection-range-earliest"  
                    onChange={this.handleChange}
                  />
                  <div className="ef-collection-range-dash">-</div>
                  <FormControl 
                    name="latestCollection" 
                    type="date" 
                    className="ef-collection-range-latest"  
                    onChange={this.handleChange}
                  />
                </Row>
              </div>
            </Col>
            <Col md={2}>
              <div className="ef-sex-container">
                <div className="ef-sex-label">Sex</div>
                <Form.Check 
                  name="sex-FEMALE" 
                  type="checkbox"
                  label="Female"
                  onChange={this.handleCheckboxChange}
                />
                <Form.Check 
                  name="sex-MALE" 
                  type="checkbox"
                  label="Male"
                  onChange={this.handleCheckboxChange}
                />
                <Form.Check 
                  name="sex-INTERSEX" 
                  type="checkbox"
                  label="Intersex"
                  onChange={this.handleCheckboxChange}
                />
              </div>
              <div className="ef-gender-container">
                <div className="ef-gender-label">Gender</div>
                <Form.Check 
                  name="gender-FEMALE" 
                  type="checkbox"
                  label="Female"
                  onChange={this.handleCheckboxChange}
                />
                <Form.Check 
                  name="gender-MALE" 
                  type="checkbox"
                  label="Male"
                  onChange={this.handleCheckboxChange}
                />
                <Form.Check 
                  name="gender-TRANS_FEMALE" 
                  type="checkbox"
                  label="Trans Female"
                  onChange={this.handleCheckboxChange}
                />
                <Form.Check 
                  name="gender-TRANS_MALE" 
                  type="checkbox"
                  label="Trans Male"
                  onChange={this.handleCheckboxChange}
                />
                <Form.Check 
                  name="gender-GENDER_NON_CONFORMING" 
                  type="checkbox"
                  label="Non Conforming"
                  onChange={this.handleCheckboxChange}
                />
                <Form.Check 
                  name="gender-OTHER" 
                  type="checkbox"
                  label="Other"
                  onChange={this.handleCheckboxChange}
                />
              </div>
            </Col>
            <Col md={2}>
              <div className="ef-tobacco-container">
                <div className="ef-tobacco-label">Tobacco</div>
                <Form.Check 
                  name="smoking-CURRENT" 
                  type="checkbox"
                  label="Current"
                  onChange={this.handleCheckboxChange}
                />
                <Form.Check 
                  name="smoking-FORMER" 
                  type="checkbox"
                  label="Former"
                  onChange={this.handleCheckboxChange}
                />
                <Form.Check 
                  name="smoking-NEVER" 
                  type="checkbox"
                  label="Never"
                  onChange={this.handleCheckboxChange}
                />
              </div>
              <div className="ef-vape-container">
                <div className="ef-vape-label">Vape</div>
                <Form.Check 
                  name="vaping-CURRENT" 
                  type="checkbox"
                  label="Current"
                  onChange={this.handleCheckboxChange}
                />
                <Form.Check 
                  name="vaping-FORMER" 
                  type="checkbox"
                  label="Former"
                  onChange={this.handleCheckboxChange}
                />
                <Form.Check 
                  name="vaping-NEVER" 
                  type="checkbox"
                  label="Never"
                  onChange={this.handleCheckboxChange}
                />
              </div>
              <div className="ef-clean-container">
                <div className="ef-clean-label">Clean</div>
                <Form.Check 
                  name="clean-CLEAN" 
                  type="checkbox"
                  label="Clean"
                  onChange={this.handleCheckboxChange}
                />
                <Form.Check 
                  name="clean-DIRTY" 
                  type="checkbox"
                  label="Raw"
                  onChange={this.handleCheckboxChange}
                />
              </div>
            </Col>
            <Col md={3}>
              <div className="ef-race-container">
                <div className="ef-race-label">Race</div>
                <Form.Check 
                  name="race-ASIAN" 
                  type="checkbox"
                  label="Asian"
                  onChange={this.handleCheckboxChange}
                />
                <Form.Check 
                  name="race-BLACK" 
                  type="checkbox"
                  label="Black or African-American"
                  onChange={this.handleCheckboxChange}
                />
                <Form.Check 
                  name="race-NATIVE_AMERICAN" 
                  type="checkbox"
                  label="Native American / Alaska Native"
                  onChange={this.handleCheckboxChange}
                />
                <Form.Check 
                  name="race-PACIFIC_ISLANDER" 
                  type="checkbox"
                  label="Native Hawaiian / Pacific Islander"
                  onChange={this.handleCheckboxChange}
                />
                <Form.Check 
                  name="race-WHITE" 
                  type="checkbox"
                  label="White"
                  onChange={this.handleCheckboxChange}
                />
              </div>
              <Button className="ef-submit" variant="info" type="submit" md={3}>
                Search
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    )
  }
}

export default ExercisesForm;