const { compose, withProps, lifecycle } = require("recompose");
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,Marker,
  DirectionsRenderer,
} = require("react-google-maps");

const MapWithADirectionsRenderer = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBJtuDJCwVNYONyI-nIZnuI_YTw1dFoLZs&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100%` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap,
  lifecycle({
    componentDidMount() {
      const DirectionsService = new window.google.maps.DirectionsService();

      DirectionsService.route({
        origin: new window.google.maps.LatLng(23.2599, 77.4126),
        destination: new window.google.maps.LatLng(17.3850, 78.4867),
        travelMode: window.google.maps.TravelMode.DRIVING,
      }, (result, status) => {
        if (status === window.google.maps.DirectionsStatus.OK) {
          this.setState({
            directions: result,
          });
        //   console.log(props.directions)
        } else {
          console.error(`error fetching directions ${JSON.stringify(result)}`);
        }
      });
    }
  })
)(props =>
  <GoogleMap
    defaultZoom={5.5}
    defaultCenter={new window.google.maps.LatLng(23.2599, 77.4126)}>
        {props.placeList.map((place,index)=>{
            return     <Marker key={index} position= {new window.google.maps.LatLng(place.latitude, place.longitude)}/>

        })}


    {props.checkRoute && <DirectionsRenderer directions={props.directions} />}
  </GoogleMap>
);

export default MapWithADirectionsRenderer;
