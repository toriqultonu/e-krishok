import React from "react";
import Appheader from "./components/header/header";
import SearchForm from "./components/searchform/SearchForm";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <div>
      <Appheader />
      <SearchForm />
      <Container className="habibi">
        <h2 className="body-h2">Who Are We?</h2>{" "}
        <p className="body-p">
          In the heartlands of our nation, where the earth meets the sky and the
          fruits of labor flourish, a new dawn in agriculture is upon us.
          Welcome to "E-Krishok," a revolutionary web application designed
          exclusively for our hardworking local farmers. Our mission is simple
          yet impactful: to provide a helping hand to our farming community by
          offering easy access to essential agricultural equipment at minimal
          cost, right in their local neighborhoods, along with several
          AI-integrated features. Farming, the backbone of our society, often
          demands the use of specialized tools and machinery.
        </p>
        <p className="body-p">
          However, acquiring these resources can be daunting, especially for
          small-scale farmers with limited budgets. "E-Krishok" seeks to bridge
          this gap by offering a seamless platform for farmers to borrow a wide
          range of high-quality agricultural equipment conveniently and
          affordably. Imagine being able to book the equipment you need, from
          plows to irrigation systems, with just a few clicks. With "E-Krishok,"
          you can do just that! Our user-friendly interface allows you to:
          Browse through an extensive catalog of equipment available in your
          area. Select the tools that suit your needs. Reserve them for a
          specified period, all from the comfort of your home.
        </p>
      </Container>
      {/*--Rent Tools Section-- */}
      <section className="all-section">
        <Container>
          <h2
            className="body-h2"
            style={{
              backgroundColor: "#f7ef99",
              color: "black",
              textAlign: "right",
              marginTop: "2rem",
            }}
          >
            Rent Your Farming Tool
          </h2>
          <Row>
            <Col md={4}>
              <Link to="/tractor">
                <Card className="tool-card">
                  <Card.Img
                    variant="top"
                    src="card-tractor.jpg"
                    alt="Tractor"
                  />
                  <Card.Body>
                    <Card.Title className="tool-card-title">Tractor</Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col md={4}>
              <Link to="/plow">
                <Card className="tool-card">
                  <Card.Img variant="top" src="card-plow.jpg" alt="Plow" />
                  <Card.Body>
                    <Card.Title className="tool-card-title">Plow</Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col md={4}>
              <Link to="/salo-machine">
                <Card className="tool-card">
                  <Card.Img
                    variant="top"
                    src="card-salo.jpg"
                    alt="Salo-Machine"
                  />
                  <Card.Body>
                    <Card.Title className="tool-card-title">
                      Salo Machine
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          </Row>

          <Row>
            <Col md={4}>
              <Link to="/sprayer">
                <Card className="tool-card">
                  <Card.Img
                    variant="top"
                    src="card-sprayer.jpg"
                    alt="Sprayer"
                  />
                  <Card.Body>
                    <Card.Title className="tool-card-title">Sprayer</Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col md={4}>
              <Link to="/weeder">
                <Card className="tool-card">
                  <Card.Img
                    variant="top"
                    src="card-weed.webp"
                    alt="Weed Remover"
                  />
                  <Card.Body>
                    <Card.Title className="tool-card-title">
                      Weed Remover
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col md={4}>
              <Link to="/lawn-mower">
                <Card className="tool-card">
                  <Card.Img
                    variant="top"
                    src="card-mower.jpg"
                    alt="Lawn-Mower"
                  />
                  <Card.Body>
                    <Card.Title className="tool-card-title">
                      Lawn Mower
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>

      {/*AI Features*/}
      <section className="all-section">
        <Container>
          <h2 className="body-h2">Take a Look At Our AI Features</h2>
          <Row>
            <Col xs={6} md={4}>
              <Link to="/crop-disease-test">
                <Card className="tool-card">
                  <Card.Img
                    variant="top"
                    src="card-cropd.jpg"
                    alt="Crop Disease Testing"
                  />
                  <Card.Body>
                    <Card.Title className="tool-card-title">
                      Crop Disease Test
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col xs={6} md={4}>
              <Link to="/soil-test">
                <Card className="tool-card">
                  <Card.Img variant="top" src="soilTest.jpg" alt="Plow" />
                  <Card.Body>
                    <Card.Title className="tool-card-title">
                      Soil Test With AI
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col xs={6} md={4}>
              <Link to="/weatherforecaster">
                <Card className="tool-card">
                  <Card.Img
                    variant="top"
                    src="weather.png"
                    alt="Weather Forecaster"
                  />
                  <Card.Body>
                    <Card.Title className="tool-card-title">
                      Weather Forecaster
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}
