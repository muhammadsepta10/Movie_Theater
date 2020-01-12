import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";

export default class FormAdd extends Component {
  render() {
    return (
      <div>
        <Form>
          <Form.Group controlId="name.movie">
            <Form.Label>Name Movie</Form.Label>
            <Form.Control
              onChange={this.props.onChange}
              type="text"
              name="name"
              placeholder="name movie"
            />
          </Form.Group>
          <Form.Group controlId="genre">
            <Form.Label>Genre</Form.Label>
            <Form.Control
              onChange={this.props.onChange}
              name="genre"
              as="select"
              placeholder="select"
            >
              <option value="0" hidden selected disabled>
                Select Genre
              </option>
              {this.props.option}
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="synopsis">
            <Form.Label>Synopsis</Form.Label>
            <Form.Control
              onChange={this.props.onChange}
              name="synopsis"
              as="textarea"
              rows="3"
            />
          </Form.Group>
          <Form.Group controlId="price.movie">
            <Form.Label>Price Ticket</Form.Label>
            <Form.Control
              onChange={this.props.onChange}
              type="number"
              name="price"
              placeholder="Price ticket"
            />
          </Form.Group>
          <Form.Group controlId="image.movie">
            <Form.Label>Image Movie</Form.Label>
            <Form.Control
              onChange={this.props.onChange}
              type="text"
              name="image"
              placeholder="image Movie (URL)"
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
