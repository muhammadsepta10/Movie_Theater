import React, { Component } from "react";
import { Container, Row, Col, FormControl } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Axios from "axios";
import Moment from "react-moment";

import Header from "./../components/Header";
import Footer from "./../components/Footer";
import MovieList from "./../components/MovieList";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      release: [],
      upComing: []
    };
  }
  componentDidMount() {
    Axios.get("http://localhost:5000/api/schedules/comingSoon")
      .then(res => {
        console.log(res.data);
        this.setState({ upComing: res.data });
        console.log(this.state);
      })
      .catch(err => console.log(err));
    Axios.get("http://localhost:5000/api/schedules/release")
      .then(res => {
        console.log(res.data);
        this.setState({ release: res.data });
        console.log(this.state.release);
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    function removeDuplicateUsingFilter(arr) {
      let unique_array = arr.filter(function(elem, index, self) {
        return index == self.indexOf(elem);
      });
      return unique_array;
    }
    console.log("unique", removeDuplicateUsingFilter(this.state.release));
    if (this.state.release && this.state.upComing) {
      return (
        <div style={{ marginTop: "0%", marginBottom: "0%" }}>
          <Header />
          <Container className="my-5">
            <Row>
              <Col></Col>
              <Col>
                <FormControl style={{ width: 400 }} placeholder="Search" />
              </Col>
            </Row>
            <Row>
              <div
                className="d-flex flex-column mt-5"
                style={{ width: "100%" }}
              >
                <p className="h1 mx-auto my-3">Now Playing</p>
                <div className="d-flex flex-wrap my-3">
                  {this.state.release.map(item =>
                    item.id ? (
                      <MovieList
                        id={item.Film.id}
                        id2={item.id}
                        image={item.Film.image}
                        title={item.Film.name}
                        dateStart={
                          <Moment format="YYYY/MMM/DD">{item.dateStart}</Moment>
                        }
                        dateEnd={
                          <Moment format="YYYY/MMM/DD">{item.dateEnd}</Moment>
                        }
                      />
                    ) : (
                      <p>Not Found</p>
                    )
                  )}
                </div>
              </div>
            </Row>
            <Row>
              <div
                className="d-flex flex-column mt-5"
                style={{ width: "100%" }}
              >
                <p className="h1 mx-auto my-5">Coming Soon</p>
                <div className="d-flex flex-wrap my-3">
                  {this.state.upComing.map(item =>
                    item.id ? (
                      <MovieList
                        id={item.Film.id}
                        image={item.Film.image}
                        title={item.Film.name}
                        dateStart={
                          <Moment format="YYYY/MMM/DD">{item.dateStart}</Moment>
                        }
                      />
                    ) : (
                      <p>Not Found</p>
                    )
                  )}
                </div>
              </div>
            </Row>
          </Container>
          <Footer />
        </div>
      );
    } else {
      return <p>LOADING.....</p>;
    }
  }
}
