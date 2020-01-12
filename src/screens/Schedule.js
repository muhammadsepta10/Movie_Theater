import React, { Component } from "react";
import { Container, Image, Button } from "react-bootstrap";
import { GoGear } from "react-icons/go";

import Header from "./../components/Header";
import Footer from "./../components/Footer";
import Form from "./../components/Form/FormAddSchedule";
import Axios from "axios";
import { MDBDataTable } from "mdbreact";
import { Link } from "react-router-dom";

export default class Schedule extends Component {
  constructor() {
    super();
    this.state = {
      film: "",
      startDate: "",
      endDate: "",
      studio: "",
      startTime: "",
      endTime: "",
      schedules: [],
      studios: [],
      films: []
    };
  }

  componentDidMount() {
    Axios.get("http://localhost:5000/api/schedules").then(res => {
      this.setState({ schedules: res.data });
    });
    Axios.get("http://localhost:5000/api/films").then(res => {
      this.setState({ films: res.data });
    });
    Axios.get("http://localhost:5000/api/studio").then(res => {
      this.setState({ studios: res.data });
    });
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleClick = () => {
    const id_film = this.state.film;
    const id_studio = this.state.studio;
    const dateStart = this.state.startDate;
    const dateEnd = this.state.endDate;
    const timeStart = this.state.startTime;
    const timeEnd = this.state.endTime;
    // console.log(this.state);
    Axios.post("http://localhost:5000/api/schedules/create", {
      id_film,
      id_studio,
      dateStart,
      dateEnd,
      timeStart,
      timeEnd
    })
      .then(() => {
        alert("success");
        window.location.href = "https://movie-theater.netlify.com/schedule";
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    const data = {
      columns: [
        {
          label: "Image",
          field: "image",
          sort: "asc"
        },
        {
          label: "Film",
          field: "film",
          sort: "asc"
        },
        {
          label: "Genre",
          field: "genre",
          sort: "asc"
        },
        {
          label: "Synopsis",
          field: "synopsis",
          sort: "asc"
        },
        {
          label: "Action",
          field: "action",
          sort: "asc"
        }
      ],
      rows: this.state.schedules.map(
        item => (
          console.log(item),
          {
            image: item.Film.image ? (
              <Image
                fluid
                src={item.Film.image}
                rounded
                style={{ width: 300 }}
              />
            ) : (
              <Image
                fluid
                src="https://bitsofco.de/content/images/2018/12/broken-1.png"
                rounded
                style={{ width: 300 }}
              />
            ),
            film: item.Film.name ? item.Film.name : "error",
            genre: item.Film.Genre.name ? item.Film.Genre.name : "null",
            synopsis: item.Film.synopsis ? item.Film.synopsis : "null",
            action: (
              <Button data-toggle="modal" data-target={`#addTime${item.id}`}>
                Time
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
          <p className="h1 my-5">Schedule</p>
          <Form
            onChange={this.handleChange}
            onClick={this.handleClick}
            optionFilm={this.state.films.map(item => (
              <option value={item.id} key={item.id}>
                {item.name}
              </option>
            ))}
            optionStudio={this.state.studios.map(item => (
              <option value={item.id} key={item.id}>
                {item.name} --> {item.Cinema.name}
              </option>
            ))}
          />
          <hr />
          <MDBDataTable striped bordered small data={data} />
        </Container>
        <Footer />
      </div>
    );
  }
}
