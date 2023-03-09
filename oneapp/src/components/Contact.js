import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Card.css";
class Contact extends Component {
  render() {
    return (
      <>
        <div class="bg-image1">
          {/* <h2>Contact Details:</h2> */}
          <Container>
            
            <Row>
              <Col sm-6>
                <div class="text-header5">
                  {/* <h2 style={{ color: "skyblue" }}>Contact Details:</h2> */}
                  <Card
                    style={{
                      width: "20rem",
                      color: "black",
                      backgroundColor: "skyblue",
                    }}
                  >
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <Card.Body>
                      {/* <Card.Title c>Project Partners</Card.Title> */}
                      <Card.Text>
                        <p>
                          <b>Name:</b> <i>Pranuja Jadhav</i>
                        </p>
                        <p>
                          <b>Email Id:</b> <i>pranuja08@gmail.com</i>
                        </p>
                        <p>
                          <b>Mobile Number:</b> <i>7743834656</i>
                        </p>
                        <p>
                          <b>Address:</b> <i>Sangli, Maharashtra</i>
                        </p>
                      </Card.Text>
                      {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                  </Card>
                </div>
              </Col>

              <Col sm-6>
                <div class="text-header5">
                  {/* <h2 style={{ color: "skyblue" }}>Contact Details:</h2> */}
                  <Card
                    style={{
                      width: "20rem",
                      color: "black",
                      backgroundColor: "skyblue",
                    }}
                  >
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <Card.Body>
                      {/* <Card.Title c>Project Partners</Card.Title> */}
                      <Card.Text>
                        <p>
                          <b>Name:</b> <i>Harshali Gare</i>
                        </p>
                        <p>
                          <b>Email Id:</b> <i>harshaligare451@gmail.com</i>
                        </p>
                        <p>
                          <b>Mobile Number:</b> <i>9432514578</i>
                        </p>
                        <p>
                          <b>Address:</b> <i>Kolhapur, Maharashtra</i>
                        </p>
                      </Card.Text>
                      {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                  </Card>
                </div>
              </Col>
              <col></col>
            </Row>
            {/* </Container> */}
           
            <Row>
              <Col sm-6>
                <div class="text-header5">
                  {/* <h2 style={{ color: "skyblue" }}>Contact Details:</h2> */}
                  <Card
                    style={{
                      width: "20rem",
                      color: "black",
                      backgroundColor: "skyblue",
                    }}
                  >
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <Card.Body>
                      {/* <Card.Title c>Project Partners</Card.Title> */}
                      <Card.Text>
                        <p>
                          <b>Name:</b> <i>Alankar Bhandare</i>
                        </p>
                        <p>
                          <b>Email Id:</b> <i>alankar746@gmail.com</i>
                        </p>
                        <p>
                          <b>Mobile Number:</b> <i>9050234985</i>
                        </p>
                        <p>
                          <b>Address:</b> <i>Kolhapur, Maharashtra</i>
                        </p>
                      </Card.Text>
                      {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                  </Card>
                </div>
              </Col>

              <Col sm-6>
                <div class="text-header5">
                  {/* <h2 style={{ color: "skyblue" }}>Contact Details:</h2> */}
                  <Card
                    style={{
                      width: "20rem",
                      color: "black",
                      backgroundColor: "skyblue",
                    }}
                  >
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <Card.Body>
                      {/* <Card.Title c>Project Partners</Card.Title> */}
                      <Card.Text>
                        <p>
                          <b>Name:</b> <i>Swapnil Golande</i>
                        </p>
                        <p>
                          <b>Email Id:</b> <i>swapnilgol7743@gmail.com</i>
                        </p>
                        <p>
                          <b>Mobile Number:</b> <i>7452786352</i>
                        </p>
                        <p>
                          <b>Address:</b> <i>Beed,Maharshtra</i>
                        </p>
                      </Card.Text>
                      {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                  </Card>
                </div>
              </Col>
              <col></col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

export default Contact;
