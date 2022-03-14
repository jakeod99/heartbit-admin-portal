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
            <Col md={5}>
              <Row>
                <Col>
                  <div className="ef-age-range-container">
                    <p className="ef-age-range-label">Age Range</p>
                    <Row>
                      <FormControl 
                        type="number" 
                        placeholder="youngest" 
                        className="ef-age-range-young" 
                      />
                      <div className="ef-age-range-dash">-</div>
                      <FormControl 
                        type="number" 
                        placeholder="oldest"
                        className="ef-age-range-old" 
                      />
                    </Row>
                  </div>
                  <div className="ef-email-container">
                    <p className="ef-email-label">Email</p>
                    <FormControl 
                        placeholder="john@example.com" 
                        className="ef-email" 
                      />
                  </div>
                </Col>
                <Col>
                  <div className="ef-weight-range-container">
                    <p className="ef-weight-range-label">Weight Range</p>
                    <Row>
                      <FormControl 
                        type="number" 
                        placeholder="lightest" 
                        className="ef-weight-range-light" 
                      />
                      <div className="ef-weight-range-dash">-</div>
                      <FormControl 
                        type="number" 
                        placeholder="heaviest"
                        className="ef-weight-range-heavy" 
                      />
                    </Row>
                  </div>
                  <div className="ef-group-container">
                    <p className="ef-group-label">Group</p>
                    <FormControl 
                        placeholder="TODO" 
                        className="ef-group" 
                        disabled={true}
                      />
                  </div>
                </Col>
              </Row>
              <div className="ef-collection-range-container">
                <p className="ef-collection-range-label">Collection Date Range</p>
                <Row>
                  <FormControl 
                    type="date" 
                    className="ef-collection-range-earliest" 
                  />
                  <div className="ef-collection-range-dash">-</div>
                  <FormControl 
                    type="date" 
                    className="ef-collection-range-latest" 
                  />
                </Row>
              </div>
            </Col>
            <Col md={2}>
              <div className="ef-sex-container"></div>
              <div className="ef-gender-container"></div>
            </Col>
            <Col md={2}>
              <div className="ef-tobacco-container"></div>
              <div className="ef-vape-container"></div>
            </Col>
            <Col md={3}>
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