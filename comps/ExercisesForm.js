import React from "react";
import { Button, Col, Container, FloatingLabel, Form, FormControl, InputGroup, Row } from "react-bootstrap";

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
      <Container className="ef-container">
        <Form className="ef">
          <Row>
            <Col>
              <Row>
                <Col>
                  <p className="ef-age-range-label">Age Range</p>
                  <Row>
                    {/* <Col md={5} className="ef-age-range-young-col"> */}
                      <FormControl 
                        type="number" 
                        placeholder="youngest" 
                        className="ef-age-range-young-col" />
                    {/* </Col> */}
                    {/* <Col md={2} className="ef-age-range-dash">-</Col> */}
                    {/* <Col md={5} className="ef-age-range-old-col"> */}
                      <div className="ef-age-range-dash">-</div>
                      <FormControl 
                        type="number" 
                        placeholder="oldest"
                        className="ef-age-range-old-col" />
                    {/* </Col> */}
                  </Row>
                </Col>
                <div className="ef-weight-range-container"></div>
              </Row>
              <Row>
                <div className="ef-email-container"></div>
                <div className="ef-group-container"></div>
              </Row>
              <div className="ef-date-range-container"></div>
            </Col>
            <Col>
              <div className="ef-sex-container"></div>
              <div className="ef-gender-container"></div>
            </Col>
            <Col>
              <div className="ef-tobacco-container"></div>
              <div className="ef-vape-container"></div>
            </Col>
            <Col>
              <div className="ef-race-container"></div>
              <div className="ef-clean-container"></div>
              <Button className="ef-submit" variant="info" onClick={() => this.props.getExercises({
                variables: this.state
              })}>
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