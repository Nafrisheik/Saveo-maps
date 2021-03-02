import React, { useState } from "react";
import { Button, Form, Input, Label, FormGroup } from "reactstrap";
import { Container, Row, Col } from "reactstrap";

function InputComp({ addEntry }) {
  const [location, setLocation] = useState("");
  const [latitude, setLat] = useState("");
  const [longitude, setLon] = useState("");
  const[buttonValue,setButton]=useState("Submit")

  const updatePlace = (event) => {
      setButton("Add");
    setLocation(event.target.value);
  };
  const updateLat = (e) => {
    setLat(e.target.value);
  };
  const updateLon = (e) => {
    setLon(e.target.value);
  };
  const updateEntry = (event) => {
      if(location && latitude && longitude) addEntry(location, latitude, longitude);
    setLocation("");
    setLon("");
    setLat("");
    setButton("Submit")
    event.preventDefault();
  };

  return (
    <>
      <Container>
        <Form onSubmit={updateEntry} inline>
          <Row form>
            <Col md={3}>
              <FormGroup>
                <Label for="place">Location Name</Label>
                <Input
                  name="place"
                  id="exampleEmail"
                  placeholder="Location"
                  value={location}
                  onChange={updatePlace}
                />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label for="latitude">Enter Latitude</Label>
                <Input
                  name="latitude"
                  id="exampleEmail"
                  placeholder="Lat"
                  value={latitude}
                  onChange={updateLat}
                />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label for="longitude">Enter Longitude</Label>
                <Input
                  name="longitude"
                  id="exampleEmail"
                  placeholder="Lon"
                  value={longitude}
                  onChange={updateLon}
                />
              </FormGroup>
            </Col>
            <Col md={3} style={{ left: "auto" }}>
              <br></br>
              <Button
                name="button"
                color="primary"
                style={{ borderRadius: "21px",width: '179px',color:'#074770',opacity:'#074770',background: '#FFFFFF' }}
                size="sm"
                type="submit"
              >
                {buttonValue}
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
      <br></br>
    </>
  );
}
export default InputComp;
