import React, { Component } from "react";
import { Container, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Axios from "axios";
import { MDBDataTable } from "mdbreact";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Form from "../components/Form/FormAdd";

export default class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      genres: [],
      name: "",
      genre: "",
      synopsis: "",
      price: "",
      image: "",
      films: []
    };
  }
  componentDidMount() {
    Axios.get("http://localhost:5000/api/genres").then(res => {
      this.setState({ genres: res.data });
      console.log(this.state.genres);
      console.log(this.props);
    });
    Axios.get("http://localhost:5000/api/films").then(res => {
      this.setState({ films: res.data });
      console.log(this.state.films);
    });
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleClick = () => {
    // console.log(this.state);
    const genre = this.state.genre;
    const name = this.state.name;
    const synopsis = this.state.synopsis;
    const price = this.state.price;
    const image = this.state.image;
    Axios.post(`http://localhost:5000/api/films/create`, {
      name,
      genre,
      synopsis,
      price,
      image
    })
      .then(() => {
        alert("success");

        // window.location.href = "https://movie-theater.netlify.com/addMovie";
        window.location.reload(true);
      })
      .catch(err => console.log(err));
  };
  handleEdit = () => {
    console.log("oke");
  };
  deleteItem = id => () => {
    const startTime = performance.now();

    // Do the normal stuff for this function

    const duration = performance.now() - startTime;
    console.log(`oke${duration}ms`);
  };

  render() {
    const data = {
      columns: [
        {
          label: "Name",
          field: "name",
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
          label: "Price",
          field: "price",
          sort: "asc"
        },
        {
          label: "Image",
          field: "image",
          sort: "asc"
        }
      ],
      rows: this.state.films.map(item => ({
        name: item.name,
        genre: item.Genre.name,
        synopsis: item.synopsis,
        price: item.price,
        image: <Image fluid src={item.image} rounded />
      }))
    };
    console.log(data);
    if (!this.state.genres && !this.state.films) {
      return <p>LOADING......</p>;
    } else {
      return (
        <div>
          <Header />
          <Container className="my-5">
            <div className="mb-5">
              <p className="h1">Add Movie</p>
              <Form
                className="mt-5"
                option={this.state.genres.map(item => (
                  <option value={item.id} key={item.id}>
                    {item.name}
                  </option>
                ))}
                onChange={this.handleChange}
                onClick={this.handleClick}
              />
            </div>
            <hr />
            <div className="mt-5">
              <p className="h1 mx-auto">Movie</p>
              <MDBDataTable striped bordered small data={data} />
            </div>
          </Container>
          <Footer />
        </div>
      );
    }
  }
}
