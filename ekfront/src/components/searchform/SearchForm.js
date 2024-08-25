import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./SearchFrom.css";
import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

const SearchForm = () => {
  return (
    <div className="search-section">
      <Container className="search-container">
        <h1 className="text-center">E-KRISHOK</h1>
        <h2 className="text-center text-white">
          RENT YOUR DESIRED FARM TOOLS TODAY
        </h2>
        <p className="text-center text-white">Anything, Anywhere, Anytime</p>
        <Form>
          <Row className="align-items-end">
            <Col md={6}>
              <Form.Group controlId="formBasicSelect">
                <Form.Select
                  aria-label="Default select example"
                  className="tool-type-dropdown"
                >
                  <option>Select Tool Type</option>
                  <option value="1">Tractor</option>
                  <option value="2">Plow</option>
                  <option value="3">Sprayer</option>
                  <option value="4">Lawn Mower</option>
                  <option value="5">Weed Remover</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="location" className="input-with-icon">
                <FaMapMarkerAlt className="icon" />
                <Form.Control type="text" placeholder="Location" />
              </Form.Group>
            </Col>
          </Row>

          <Row className="align-items-end mt-3">
            <Col md={6}>
              <Form.Group controlId="bookingDate" className="input-with-icon">
                <FaCalendarAlt className="icon" />
                <Form.Control type="date" placeholder="Booking Date" />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="priceRange">
                <Form.Control type="text" placeholder="Price Range" />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mt-4">
            <Col className="text-center">
              <Button variant="success" type="submit">
                RESULTS
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
};

export default SearchForm;
