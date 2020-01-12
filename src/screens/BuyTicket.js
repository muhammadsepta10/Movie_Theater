import React, { Component } from "react";

import Header from "./../components/Header";
import Footer from "./../components/Footer";
import { Container } from "react-bootstrap";
import Axios from "axios";

export default class BuyTicket extends Component {
  constructor() {
    super();
    this.state = {
      times: []
    };
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    Axios.get(`http://localhost:5000/api/times/${id}`).then(res => {
      this.setState({ times: res.data });
    });
  }
  render() {
    const times = this.state.times;
    if (times) {
      return (
        <div>
          <Header />
          <Container>
            <p>Buy Ticket</p>
          </Container>
          <Footer />
        </div>
      );
    } else {
      return <p>loading....</p>;
    }
  }
}
