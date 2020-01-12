import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

export default class FormAddSeat extends Component {
  render() {
    return (
      <div>
        <Form>
          <Form.Group controlId="name">
            <Form.Label>Name Seat</Form.Label>
            <Form.Control
              onChange={this.props.onChange}
              type="text"
              name="name"
              placeholder="ex(G-1)"
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
