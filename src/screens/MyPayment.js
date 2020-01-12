import React, { Component } from "react";
import Header from "../components/Header";
import { Container } from "react-bootstrap";
import Footer from "../components/Footer";
import DetailePayment from "./../components/Payment/DetailePayment";

export default class MyPayment extends Component {
  render() {
    return (
      <div>
        <Header />
        <Container>
          <p className="h1 text-secondary my-5">Payment</p>
          <DetailePayment />
          {/* {payment &&
            payment.map(payment => (
              <Ticket
                name={payment.User.name}
                price={payment.Event.price}
                event={payment.Event.name}
                date={payment.Event.startTime}
                time={payment.Event.startTime}
                addres={payment.Event.addres}
                id={payment.event}
                quantity={payment.quantity}
                totalPrice={payment.totalPrice}
                onClick={
                  payment.status === "pending"
                    ? this.handleClick(payment.id)
                    : " "
                }
                status={payment.status}
                variant={
                  payment.status === "pending"
                    ? "btn-lg btn-secondary"
                    : payment.status === "confirm"
                    ? "btn-lg btn-warning disabled"
                    : payment.status === "approved"
                    ? "btn-lg btn-success disabled"
                    : "btn-lg btn-secondary"
                }
              />
            ))} */}
        </Container>
        <Footer />
      </div>
    );
  }
}
