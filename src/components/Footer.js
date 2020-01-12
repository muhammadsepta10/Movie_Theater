import React, { Component } from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Footer extends Component {
  render() {
    return (
      <div
        style={{
          marginBottom: "-100%"
        }}
        className="text-white bg-dark"
      >
        <Container>
          <p className="h2">CopyRight 2019</p>
          <hr />
        </Container>
      </div>
    );
  }
}
