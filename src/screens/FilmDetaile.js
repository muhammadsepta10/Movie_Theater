import React, { Component } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";

import Header from "./../components/Header";
import Footer from "./../components/Footer";
import Collapse from "./../components/DetaileFilm/Collapse";
import Axios from "axios";
import Moment from "react-moment";
export default class FilmDetaile extends Component {
  constructor() {
    super();
    this.state = {
      schedules: [],
      film: [],
      schedule: [],
      seats: [],
      seatsSold: []
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    Axios.get(`http://localhost:5000/api/films/${id}`)
      .then(res => {
        this.setState({ film: res.data });
      })
      .catch(err => console.log(err));
    Axios.get(`http://localhost:5000/api/schedules/byFilm/${id}`)
      .then(res => {
        this.setState({ schedules: res.data });
        console.log(this.state.schedules);
      })
      .catch(err => console.log(err));
  }
  handleClick = (id, id_film, id_schedule) => () => {
    console.log(id, id_film, id_schedule);
    Axios.get(`http://localhost:5000/api/times/${id}/${id_film}`).then(res => {
      this.setState({ schedule: res.data });
    });
    Axios.get(`http://localhost:5000/api/seats/${id}`).then(res => {
      this.setState({ seats: res.data });
      console.log(this.state.seats);
    });
    Axios.get(`http://localhost:5000/api/seats/${id_schedule}/${id}`).then(
      res => {
        this.setState({ seatsSold: res.data });
        console.log(this.state.seatsSold);
      }
    );
  };
  handleBuy = id => () => {
    const id_schedule = this.props.match.params.id2;
    const id_seat = id;
    const id_user = localStorage.getItem("id");
    Axios.post(`http://localhost:5000/api/payments/create`, {
      id_schedule,
      id_seat,
      id_user
    })
      .then(() => {
        alert("success");
        // window.location.href = `https://movie-theater.netlify.com/movie_detaile/${id1}/${id_schedule}`;
        window.location.reload(true);
      })
      .catch(err => console.log(err));
  };
  render() {
    console.log(this.props);
    const films = this.state.schedules.slice(0);
    console.log(films.id);
    return (
      <div>
        <Header />
        <Container className="my-5">
          <p style={{ width: "100%" }} className="h1">
            {this.state.film.name}
          </p>
          <Row className="my-5" style={{ width: "100%" }}>
            <Col lg="4" md="4" sm="12">
              <Row>
                <Image
                  fluid
                  src={this.state.film.image}
                  rounded
                  style={{ width: "100%", height: 500 }}
                />
              </Row>
              <Row className="d-flex flex-column mt-5">
                <p className="h5">
                  Release : <Moment></Moment>
                </p>
                <p className="h5">Price : Rp {this.state.film.price}</p>
                <p className="h5">Synopsis : </p>
                <p className=" lead ml-2" style={{ textIndent: 50 }}>
                  {this.state.film.synopsis}
                </p>
              </Row>
            </Col>
            <Col lg="8" md="8" sm="12">
              <div className="d-flex flex-wrap flex-row m-5">
                <Collapse
                  collapseButton={this.state.schedules.map(item => (
                    <button
                      className="btn btn-dark"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseExample"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                      onClick={this.handleClick(
                        item.Studio.id,
                        item.Film.id,
                        item.id
                      )}
                    >
                      {item.Studio.name}
                    </button>
                  ))}
                  time={this.state.schedule.map(item => (
                    <div>
                      <button
                        className="btn btn-dark m-2"
                        type="button"
                        data-toggle="modal"
                        data-target={`#exampleModal${item.id}`}
                      >
                        {item.timeStart}
                      </button>

                      {/* modal */}
                      <div
                        className="modal fade"
                        id={`exampleModal${item.id}`}
                        tabindex="-1"
                        role="dialog"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog" role="document">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5
                                className="mx-auto modal-title"
                                id="exampleModalLabel"
                              >
                                {item.Schedule.Film.name}
                              </h5>
                            </div>
                            <Button className="btn-lg" disabled>
                              Screen
                            </Button>
                            <div
                              style={{ width: 350 }}
                              className="modal-body mx-auto d-flex flex-row flex-wrap"
                            >
                              {this.state.seats
                                ? this.state.seats.map(item => (
                                    <Button
                                      className="m-1"
                                      style={{ width: 70 }}
                                      onClick={this.handleBuy(item.id)}
                                    >
                                      {item.number_seat}
                                    </Button>
                                  ))
                                : "Seat Undifined"}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                />
              </div>
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}
