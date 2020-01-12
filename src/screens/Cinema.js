import React, { Component } from "react";
import { Container, Button } from "react-bootstrap";
import { MDBDataTable } from "mdbreact";
import Moment from "react-moment";

import Header from "./../components/Header";
import Footer from "./../components/Footer";
import Form from "../components/Form/FormAddCinema";
import Axios from "axios";
import { Link } from "react-router-dom";

export default class Cinema extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      addres: "",
      telp: "",
      cinema: []
    };
  }
  componentDidMount() {
    Axios.get("http://localhost:5000/api/cinemas")
      .then(res => {
        this.setState({ cinema: res.data });
      })
      .catch(err => console.log(err));
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleClick = () => {
    const name = this.state.name;
    const addres = this.state.addres;
    const telp = this.state.telp;
    Axios.post("http://localhost:5000/api/cinemas/create", {
      name,
      addres,
      telp
    })
      .then(
        alert("Success"),
        (window.location.href = "http://localhost:3000/cinema")
      )
      .catch(err => console.log(err));
  };
  render() {
    const data = {
      columns: [
        {
          label: "#",
          fiels: "no",
          sort: "asc"
        },
        {
          label: "Name",
          field: "name",
          sort: "asc"
        },
        {
          label: "Addres",
          field: "addres",
          sort: "asc"
        },
        {
          label: "Telp",
          field: "telp",
          sort: "asc"
        },
        {
          label: "Created Date",
          field: "created",
          sort: "asc"
        },
        {
          label: "Action",
          field: "action",
          sort: "asc"
        }
      ],
      rows: this.state.cinema.map((item, i) => ({
        no: i + 1,
        name: item.name,
        addres: item.addres,
        telp: item.telp,
        created: <Moment format="DD MMMM YYYY">{item.createdAt}</Moment>,
        action: (
          <Link style={{ textDecoration: "none" }} className="text-white">
            Setting
          </Link>
        )
      }))
    };
    return (
      <div>
        <Header />
        <Container className="my-5">
          <div className="my-5">
            <p className="h1 my-5">Add Cinema</p>
            <Form onChange={this.handleChange} onClick={this.handleClick} />
          </div>
          <hr />
          <div className="my-5">
            <p className="h1 my-5">List Cinema</p>
            <MDBDataTable striped bordered small data={data} />
          </div>
        </Container>
        <Footer />
      </div>
    );
  }
}
