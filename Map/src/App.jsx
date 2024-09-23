import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import ".././node_modules/leaflet/dist/leaflet.css";
import markers from "./Components/Data";
import { Icon } from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";

function App() {
  const position = [22.3039, 70.8022];

  //to change position icon
  const ccustomIcon = new Icon({
    iconUrl:
      "https://www.flaticon.com/download/icon/684908?icon_id=684908&author=227&team=227&keyword=Placeholder&pack=684899&style=Flat&style_id=6&format=png&color=%23000000&colored=1&size=512&selection=1&type=standard&search=location",
    // iconUrl: require("../public/Img/marker.png"),
    iconSize: [38, 38], //size in px
  });

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MarkerClusterGroup>
        chunkedLoading
        {markers.map((marker, index) => (
          <Marker
            key={index}
            position={marker.geoCode}
            // icon={ccustomIcon}
          >
            <Popup>{marker.popUp}</Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
    </MapContainer>
  );
}

export default App;
