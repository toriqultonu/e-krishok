import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Appheader from "../components/header/header";

const AddTools = () => {
  return (
    <div>
      <Appheader />
      <div className="container addtool">
        <Container className="mt-5">
          <Row>
            <Col md={6} className="text-center text-md-left">
              <h1 className="display-4">
                <span style={{ color: "#FF385C" }}>Rent it</span> and Earn
              </h1>
              <p>
                Your farming tool could be one of the first in this area. For an
                earnings estimate, search nearby.
              </p>
              <Form className="d-flex justify-content-center justify-content-md-start">
                <Form.Control
                  type="text"
                  placeholder="Search for your area"
                  className="mr-sm-2"
                />
                <Button variant="outline-danger" className="ml-2">
                  Search
                </Button>
              </Form>
            </Col>
            <Col md={6}>
              {/* Placeholder for Map */}
              <div
                style={{
                  width: "100%",
                  height: "400px",
                  backgroundColor: "#e9ecef",
                }}
              >
                {/* Use an actual map component or an iframe */}
                <h2 className="text-center mt-5">Map Goes Here</h2>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default AddTools;
