import { useState } from "react";
import "./App.css";
import InputComp from "./Components/input";
import MapWithADirectionsRenderer from "./Components/mapComponent";
import Coordinates from "./Components/list";
import { Container, Row, Col, Card } from "reactstrap";
import { Button } from "reactstrap";

function App() {
  const [placeList, setPlace] = useState([]);
  const [checkRoute, setTrue]=useState(false);

  const addEntry = (loc, lat, lon) => {
    setPlace([
      ...placeList,
      {
        place: loc,
        latitude: parseFloat(lat),
        longitude: parseFloat(lon),
      },
    ]);
  };
const addtoDirection=()=>{
setTrue(true);

}
function reset() {
  setPlace([]);
  setTrue(false);
  
}
  console.log(placeList);

  return (
    <>
          <Button onClick={reset} style={{ width: '84px',height: '42px',background:'#F2FAFF',color:'#A0A3A5',
borderRadius: '4px',
opacity: '1'}}>Home</Button>
      <Container>
        <Card>
          <Row>
            <Col style={{ backgroundColor: "#074770" }}>
              <InputComp addEntry={addEntry}></InputComp>
            </Col>
          </Row>
          <Row>
            <Col>
              <Coordinates addtoDirection={addtoDirection} names={placeList}></Coordinates>
            </Col>
            <Col className="map">
              <MapWithADirectionsRenderer checkRoute={checkRoute}
                placeList={placeList}
              ></MapWithADirectionsRenderer>
            </Col>
          </Row>
        </Card>
      </Container>
    </>
  );
}

export default App;
