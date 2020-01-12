import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

export default class FormAddSchedule extends Component {
  render() {
    return (
      <div>
        <Form>
          <Form.Group controlId="name">
            <Form.Label>Film</Form.Label>
            <Form.Control
              name="film"
              onChange={this.props.onChange}
              as="select"
            >
              <option value="0" hidden selected disabled></option>
              {this.props.optionFilm}
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Start Date</Form.Label>
            <Form.Control
              onChange={this.props.onChange}
              name="startDate"
              type="date"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>End Date</Form.Label>
            <Form.Control
              onChange={this.props.onChange}
              type="date"
              name="endDate"
            />
          </Form.Group>
          <Form.Group controlId="telp">
            <Form.Label>Viewing Location</Form.Label>
            <Form.Control
              name="studio"
              onChange={this.props.onChange}
              as="select"
            >
              <option value="0" hidden selected disabled></option>
              {this.props.optionStudio}
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="telp">
            <Form.Label>Start of Time</Form.Label>
            <Form.Control
              onChange={this.props.onChange}
              type="time"
              name="startTime"
            />
          </Form.Group>
          <Form.Group controlId="telp">
            <Form.Label>End Of Time</Form.Label>
            <Form.Control
              onChange={this.props.onChange}
              type="time"
              name="endTime"
            />
          </Form.Group>
          <Button onClick={this.props.onClick} variant="dark" type="button">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
