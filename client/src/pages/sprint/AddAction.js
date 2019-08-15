import React, { Component } from "react";
import { Row, Section, Col, DatePicker, Checkbox, RadioGroup } from "react-materialize";

class AddAction extends Component {
  render() {
    return (
      <Section>
        <Row>
          <Col className=" s4 input-field ">
            <input id="Name Sprint" type="text" className="validate" />
            <label for="Name Sprint">Name</label>
          </Col>
        </Row>
        <Row>
          <Col className=" s4 input-field ">
            <DatePicker placeholder="Start Date" id="Date" />
            <label for="Date" className="active">
              Start Date
            </label>
          </Col>
          <Col className=" s4 input-field ">
            <DatePicker placeholder="End Date" id="Date2" type="text" />
            <label for="Date2" className="active">
              End Date
            </label>
          </Col>
          <Col className=" s5 input-field ">
            <input id="Estimated" type="number" className="validate" />
            <label for="Estimated">Estimated Hours</label>
          </Col>
        </Row>
        <Row>
        <Col className="s2" >
           <span>Status</span>
        </Col>
        <Col className="s3">
        <Checkbox label="Active"  name="status"/>
        </Col>
      </Row>
      </Section>
    );
  }
}

export default AddAction;
