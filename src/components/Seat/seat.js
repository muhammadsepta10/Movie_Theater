import React, { Component } from "react";
import "./../../App.css";
import { Button } from "react-bootstrap";

export default class seat extends Component {
  render() {
    return (
      <div>
        <Button
          style={{ width: 70 }}
          className="m-2"
          variant="success"
          disabled
        >
          {this.props.name}
        </Button>
      </div>
    );
  }
}
