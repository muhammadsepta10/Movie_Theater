import React, { Component } from "react";
import {
  Navbar,
  Nav,
  Container,
  Dropdown,
  Button,
  Form,
  InputGroup
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { GiTicket } from "react-icons/gi";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import Axios from "axios";

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hidden: true
    };
    this.toggleShow = this.toggleShow.bind(this);
  }
  state = {
    name: "",
    email: "",
    password: "",
    emailLogin: "",
    passwordLogin: "",
    user: []
  };
  handlerChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    const name = this.state.name;
    const email = this.state.email;
    const password = this.state.password;
    Axios.post("http://localhost:5000/api/auth/register", {
      name,
      email,
      password
    })
      .then(res => {
        alert("registrasi sukses");
        // window.location.href = "http://localhost:3000";
        window.location.reload(true);
      })
      .catch(res => {
        alert("email anda telah terdaftar, silahkan login!!");
      });
  };

  handlerChangeLogin = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmitLogin = event => {
    event.preventDefault();
    console.log(this.state);
    const email = this.state.emailLogin;
    const password = this.state.passwordLogin;
    Axios.post("http://localhost:5000/api/auth/login", { email, password })
      .then(res => {
        const data = res.data.user;
        const token = res.data.token;
        localStorage.setItem("id", data.id);
        localStorage.setItem("role", data.id_role);
        localStorage.setItem("name", data.name);
        localStorage.setItem("token", token);
        alert("login sukses");
        // window.location.href = "http://localhost:3000/";
        window.location.reload(true);
      })
      .catch(res => {
        alert("login failed, your email or password is Wrong");
      });
  };

  toggleShow() {
    this.setState({ hidden: !this.state.hidden });
  }
  handleClick = () => {
    localStorage.clear();
    // window.location.href = "http://localhost:3000/";
    window.location.reload(true);
  };
  hide() {
    if (!localStorage.getItem("token"))
      return (
        <Nav className="">
          <Nav.Link>
            <Button
              type="button"
              variant="link"
              style={{ textDecoration: "none" }}
              data-toggle="modal"
              data-target="#login"
              className="text-white"
            >
              Login
            </Button>
          </Nav.Link>
          <Nav.Link eventKey={2}>
            <Button
              type="button"
              variant="link"
              style={{ textDecoration: "none" }}
              data-toggle="modal"
              data-target="#register"
              className="text-white"
            >
              Register
            </Button>
          </Nav.Link>
        </Nav>
      );
    else {
      const role = localStorage.getItem("role");
      if (role == 1) {
        return (
          <Dropdown>
            <Dropdown.Toggle
              variant="link"
              className="text-white my-1"
              style={{ textDecoration: "none" }}
              id="dropdown-custom-components"
            >
              {localStorage.getItem("name")}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item eventKey="1">
                <Link
                  to="/schedule"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Schdedule
                </Link>
              </Dropdown.Item>
              <Dropdown.Item eventKey="4">
                <Link
                  to="/movie"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Movie
                </Link>
              </Dropdown.Item>
              <Dropdown.Item eventKey="5">
                <Link
                  to="/cinema"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Cinema
                </Link>
              </Dropdown.Item>
              <Dropdown.Item eventKey="5">
                <Link
                  to="/studio"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Studio
                </Link>
              </Dropdown.Item>
              <Dropdown.Item eventKey="5">
                <Link
                  to="/payment"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Payment
                </Link>
              </Dropdown.Item>
              <hr />
              <Dropdown.Item eventKey="3" onClick={this.handleClick}>
                Log Out
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        );
      } else {
        return (
          <Dropdown>
            <Dropdown.Toggle
              variant="link"
              className="text-white my-1"
              style={{ textDecoration: "none" }}
              id="dropdown-custom-components"
            >
              {localStorage.getItem("name")}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item eventKey="5">
                <Link
                  to="/Ticket"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  My Ticket
                </Link>
              </Dropdown.Item>
              <Dropdown.Item eventKey="5">
                <Link
                  to="/my_payment"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Payment
                </Link>
              </Dropdown.Item>
              <hr />
              <Dropdown.Item eventKey="3" onClick={this.handleClick}>
                Log Out
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        );
      }
    }
  }
  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>
              <Link
                style={{ textDecoration: "none" }}
                className="text-white h1"
                to="/"
              >
                <GiTicket className="mb-2" /> Movie XXI
              </Link>
            </Navbar.Brand>
            {this.hide()}
          </Container>
        </Navbar>

        {/* modal login*/}

        <div
          className="modal fade"
          id="login"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalCenterTitle">
                  Modal title
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <Form
                  style={{ marginTop: 30, marginBottom: 30 }}
                  onSubmit={this.handleSubmitLogin}
                >
                  <Form.Group controlId="formBasicEmail">
                    <Form.Control
                      name="emailLogin"
                      type="email"
                      placeholder="Enter email"
                      onChange={this.handlerChangeLogin}
                      require="true"
                    />
                  </Form.Group>

                  <InputGroup className="mb-3">
                    <Form.Control
                      required
                      name="passwordLogin"
                      placeholder="Password"
                      type={this.state.hidden ? "password" : "text"}
                      onChange={this.handlerChange}
                    />
                    <InputGroup.Append>
                      <Button
                        onClick={this.toggleShow}
                        style={{
                          textDecoration: "none",
                          fontSize: 20
                        }}
                        variant="link text-dark"
                      >
                        {this.state.hidden ? <FaEyeSlash /> : <FaEye />}
                      </Button>
                    </InputGroup.Append>
                  </InputGroup>

                  <Button variant="primary" type="submit">
                    Login
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </div>

        {/* modal register */}

        <div
          className="modal fade"
          id="register"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalCenterTitle">
                  Regsitration
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <Form
                  onSubmit={this.handleSubmit}
                  style={{ marginTop: 30, marginBottom: 30 }}
                >
                  <Form.Group controlId="formBasicEmail">
                    <Form.Control
                      required
                      type="text"
                      placeholder="Enter name"
                      name="name"
                      onChange={this.handlerChange}
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Control
                      required
                      name="email"
                      onChange={this.handlerChange}
                      type="email"
                      placeholder="Enter email"
                    />
                  </Form.Group>
                  <InputGroup className="mb-3">
                    <Form.Control
                      required
                      placeholder="Password"
                      name="password"
                      onChange={this.handlerChange}
                      type={this.state.hidden ? "password" : "text"}
                    />
                    <InputGroup.Append>
                      <Button
                        onClick={this.toggleShow}
                        style={{
                          textDecoration: "none",
                          fontSize: 20
                        }}
                        variant="link text-dark"
                      >
                        {this.state.hidden ? <FaEyeSlash /> : <FaEye />}
                      </Button>
                    </InputGroup.Append>
                  </InputGroup>

                  <Button variant="primary" type="submit">
                    Register
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </div>

        {/* end of modal */}
      </div>
    );
  }
}
