import React, { Component } from "react";
import { Row, Col, Container, Image, Button } from "react-bootstrap";
import Moment from "react-moment";

export default class MyPayment extends Component {
  render() {
    return (
      <div>
        <div className="m-auto  bg-light">
          <Row lg="1" md="1" xs="1">
            <Col lg="6" md="6" xs="6" className="bg-dark">
              <p className="m-auto text-white">Payment {this.props.event}</p>
            </Col>
            <Col lg="6" md="6" xs="6"></Col>
          </Row>
          <Row
            lg="11"
            md="11"
            xs="11"
            style={{ borderTop: "solid", borderWidth: "5px" }}
          >
            <Container className="mb-5">
              <Row>
                <Col>
                  <Row className="bg-danger">
                    <Col className="ml-5 my-3">
                      <Row>
                        <p className="h3">{this.props.name}</p>
                      </Row>
                      <Row>id.user</Row>
                    </Col>
                    <Col className="my-3">
                      <Row>
                        <p className="h3">Face Value Rp. {this.props.price}</p>
                      </Row>
                      <Row>-</Row>
                    </Col>
                  </Row>
                  <Row
                    className="mx-auto mt-5 mb-5"
                    style={{
                      width: "60%",
                      height: "60%",
                      borderStyle: "solid",
                      borderWidth: "5px"
                    }}
                  >
                    <Col lg="8" xs="12" md="8">
                      <p className="h2">{this.props.event}</p>
                      <p className="h5">
                        <Moment format="DD MMM YYYY">{this.props.date}</Moment>{" "}
                        at <Moment format="hh:mm">{this.props.time}</Moment>
                      </p>
                      <p className="h5">{this.props.addres}</p>
                    </Col>
                    <Col lg="4" xs="12" md="4">
                      {/* <Qrcode
                      className="m-3"
                      value={`http://localhost:3000/event/${this.props.id}`}
                      style={{ height: 150 }}
                    /> */}
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Row className="mx-auto">
                  <p className=" h3">Shopping summary</p>
                </Row>
                <Row className="mx-auto">
                  <Col>
                    <p>Total Price ({this.props.quantity} Item)</p>
                  </Col>
                  <Col>Rp. {this.props.totalPrice}</Col>
                </Row>
              </Row>
              <Row className="mx-5 pt-5 border-top">
                <Col>
                  <p className="h3" lg="9">
                    Prove of payment
                  </p>
                  <Image
                    style={{ height: 200 }}
                    src="https://1.bp.blogspot.com/-hyzxX07ciWk/XPaURkosaeI/AAAAAAAABRM/AaCDgJWE8pM-f97Xp9fldguUsjcQ0aGJACLcBGAs/s640/hadits21info-invoice%25231797799.jpg"
                  />
                </Col>
                <Col lg="3">
                  <Button
                    className="btn btn-lg"
                    className={this.props.variant}
                    role="button"
                    onClick={this.props.onClick}
                    size="lg"
                  >
                    {this.props.status}
                  </Button>
                </Col>
              </Row>
            </Container>
          </Row>
        </div>
        );
      </div>
    );
  }
}
