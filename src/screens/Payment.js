import React, { Component } from "react";
import { Container, Button } from "react-bootstrap";

import Header from "./../components/Header";
// import Footer from "./../components/Footer";
import ListPayment from "./../components/Payment/List";
import Axios from "axios";
import { MDBDataTable } from "mdbreact";

export default class Payment extends Component {
  constructor() {
    super();
    this.state = {
      payment: []
    };
  }
  handleClick = id => () => {
    Axios.get(`http://localhost:5000/api/payments/status/${id}`).then(res => {
      this.setState({ payment: res.data });
    });
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
          label: "Movie",
          field: "movie",
          sort: "asc"
        },
        {
          label: "Date Order",
          field: "date",
          sort: "asc"
        },
        {
          label: "Location",
          field: "addres",
          sort: "asc"
        },
        {
          label: "Action",
          field: "action",
          sort: "asc"
        }
      ],
      rows: this.state.payment.map(item => ({
        name: item.User.name,
        movie: item.Film.name,
        date: item.createdAt,
        action: <Button>Action</Button>
      }))
    };
    return (
      <div>
        <Header />
        <Container className="my-5">
          <ListPayment
            tabel={
              this.state.payment ? (
                <MDBDataTable
                  style={{ maxWidth: 1000, minWidth: 500 }}
                  className="my-5"
                  striped
                  bordered
                  small
                  data={data}
                />
              ) : (
                ""
              )
            }
            collapseButton={
              <div>
                <button
                  className="btn btn-dark"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseExample"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                  onClick={this.handleClick(1)}
                >
                  Pending
                </button>
                <button
                  className="btn btn-dark"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseExample"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                  onClick={this.handleClick(2)}
                >
                  Confirmed
                </button>
                <button
                  className="btn btn-dark"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseExample"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                  onClick={this.handleClick(3)}
                >
                  Approved
                </button>
              </div>
            }
          />
        </Container>
        {/* <Footer /> */}
      </div>
    );
  }
}
