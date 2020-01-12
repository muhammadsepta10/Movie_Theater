import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";

export default class FormAddCinema extends Component {
  render() {
    return (
      <div>
        <Form>
          <Form.Group controlId="name">
            <Form.Label>Name Studio</Form.Label>
            <Form.Control
              onChange={this.props.onChange}
              type="text"
              name="name"
              placeholder="name studio"
            />
          </Form.Group>
          <Form.Group controlId="cinemas">
            <Form.Label>Cinema</Form.Label>
            <Form.Control
              onChange={this.props.onChange}
              name="cinema"
              as="select"
            >
              <option selected hidden disabled>
                studio location
              </option>
              {this.props.option}
            </Form.Control>
          </Form.Group>
          <Button onClick={this.props.onClick} variant="dark" type="button">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
