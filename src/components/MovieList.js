import React, { Component } from "react";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

export default class MovieList extends Component {
  render() {
    return (
      <div>
        <Link
          to={`/movie_detaile/${this.props.id}/${this.props.id2}`}
          className="text-dark"
          style={{ textDecoration: "none" }}
        >
          <Card className="shadow m-3" style={{ width: 250, height: 400 }}>
            <Card.Img
              onClick={this.props.onClick}
              variant="top"
              style={{ height: "70%" }}
              src={this.props.image}
            />
            <Card.Body>
              <Card.Title className="mx-auto">{this.props.title}</Card.Title>
              <Card.Text className="h6">
                {this.props.dateStart} - {this.props.dateEnd}
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>
      </div>
    );
  }
}
