import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

export default class FormAddStudio extends Component {
  render() {
    return (
      <div>
        <Form>
          <Form.Group controlId="name">
            <Form.Label>Name Cinema</Form.Label>
            <Form.Control
              onChange={this.props.onChange}
              type="text"
              name="name"
              placeholder="name Cinema"
            />
          </Form.Group>
          <Form.Group controlId="addres">
            <Form.Label>Addres</Form.Label>
            <Form.Control
              onChange={this.props.onChange}
              name="addres"
              as="textarea"
              rows="3"
            />
          </Form.Group>
          <Form.Group controlId="telp">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              onChange={this.props.onChange}
              type="number"
              name="telp"
              placeholder="085231527876"
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
