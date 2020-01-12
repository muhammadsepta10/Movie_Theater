import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Axios from "axios";
import { MDBDataTable } from "mdbreact";

import Header from "./../components/Header";
import Footer from "./../components/Footer";
import Form from "../components/Form/FormAddStudio";
import FormSeat from "./../components/Form/FormAddSeat";
import { Link } from "react-router-dom";

export default class Studio extends Component {
  constructor() {
    super();
    this.state = {
      cinemas: [],
      name: "",
      cinema: "",
      studios: []
    };
  }
  componentDidMount() {
    Axios.get("http://localhost:5000/api/cinemas").then(res => {
      this.setState({ cinemas: res.data });
    });

    Axios.get("http://localhost:5000/api/studio")
      .then(res => {
        this.setState({ studios: res.data });
      })
      .catch(err => console.log(err));
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  };
  handleClick = () => {
    console.log(this.state);
    const name = this.state.name;
    const id_cinema = this.state.cinema;
    // console.log(name, id_cinema);
    Axios.post("http://localhost:5000/api/studio/create", { name, id_cinema })
      .then(
        alert("success"),
        (window.location.href = "https://movie-theater.netlify.com/studio")
      )
      .catch(err => console.log(err));
  };
  render() {
    if (!this.state.studios && !this.state.cinemas) {
      return <p>LOADING....</p>;
    } else {
      const data = {
        columns: [
          {
            label: "Studio",
            field: "studio",
            sort: "asc"
          },
          {
            label: "Cinema",
            field: "cinema",
            sort: "asc"
          },
          {
            label: "Addres",
            field: "addres",
            sort: "asc"
          },
          {
            label: "Action",
            field: "seat",
            sort: "asc"
          }
        ],
        rows: this.state.studios.map(
          item => (
            console.log(item),
            {
              studio: item.name,
              cinema: item.Cinema.name,
              addres: item.Cinema.addres,
              seat: (
                <Button variant="dark">
                  <Link
                    className="text-white"
                    style={{ textDecoration: "none" }}
                    to={`/seat/${item.id}`}
                  >
                    Seat
                  </Link>
                </Button>
              )
            }
          )
        )
      };
      return (
        <div>
          <Header />
          <Container className="my-5">
            <div className="my-5">
              <p className="h1 my-5">Cinema</p>
              <Form
                option={this.state.cinemas.map((item, i) => (
                  <option key={i} value={item.id}>
                    {item.name}
                  </option>
                ))}
                onChange={this.handleChange}
                onClick={this.handleClick}
              />
            </div>
            <div className="my-5">
              <p className="h1 my-5">List Studio</p>
              <MDBDataTable striped bordered small data={data} />
            </div>
          </Container>
          <Footer />
        </div>
      );
    }
  }
}
