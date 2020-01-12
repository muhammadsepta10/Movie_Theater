import React, { Component } from "react";
import Header from "./../components/Header";
import Footer from "./../components/Footer";
import Form from "./../components/Form/FormAddSeat";
import { Container } from "react-bootstrap";
import Seats from "./../components/Seat/seat";
import Axios from "axios";

export default class Seat extends Component {
  constructor() {
    super();
    this.state = {
      seat: [],
      name: ""
    };
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    console.log(id);
    Axios.get(`http://localhost:5000/api/seats/${id}`).then(res => {
      const temp = res.data;
      this.setState({ seat: temp });
      console.log(this.state.seat);
    });
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleClick = () => {
    console.log(this.state.name);
    const number_seat = this.state.name;
    const id_studio = this.props.match.params.id;
    Axios.post("http://localhost:5000/api/seats/create", {
      number_seat,
      id_studio
    })
      .then(() => {
        alert("sukses");
        window.location.href = `http://localhost:3000/seat/${id_studio}`;
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    return (
      <div>
        <Header />
        <Container className="my-5">
          <p className="h1">Seat</p>
          <Form onChange={this.handleChange} onClick={this.handleClick} />
          <div style={{ width: 350 }} className="mx-auto d-flex flex-column">
            <p className="mx-auto h5">List Seat In Studio</p>
            <div className="d-flex flex-wrap flex-row">
              {this.state.seat.map((item, i) => (
                <Seats className="m-2" key={i} name={item.number_seat} />
              ))}
            </div>
          </div>
        </Container>
        <Footer />
      </div>
    );
  }
}
