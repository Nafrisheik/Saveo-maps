import React from "react";
import { Table, Button, Container } from "reactstrap";

function Coordinates(props) {
    const settoDirection=()=>{
        console.log(props.names);
        props.addtodirection();

    }
  return (  
    <Container >
      <Table borderless style={{backgroundColor:'#F2FAFF'}}>
        <thead>
            <tr>
                <th><b>ALL CO-ORDINATES</b></th>
            </tr>
          <tr>
            <th>My Co-ordinates</th>
            <th>DEFAULT</th>
            <th>DEFAULT</th>
          </tr>
        </thead>
        <tbody>
          {props.names.map((value, index) => {
            return (
              <tr key={index}>
                <td>
                  {index + 1}) {value.place}
                </td>
                <td>{value.latitude}</td>
                <td>{value.longitude}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <Button onClick={settoDirection} style={{ position: "absolute", bottom: 0, width:'80%',background:'#074770' ,color:'#FFFFFF',opacity:'100%',borderRadius:'21px'}}>
          Show route
        </Button>
    </Container>
  );
}

export default Coordinates;
