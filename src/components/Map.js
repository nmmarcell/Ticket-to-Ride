import mapImage from "../assets/map.jpg";
import "../index.css";
import {ticketToRideData} from "../assets/ticket-to-ride-data";
import City from "./City";

const cities = [];

let cityCount = 0;
Object.values(ticketToRideData.cities).forEach(city => {
    cities.push(<City key={cityCount} x={city.x} y={city.y}/>);
    cityCount++;
});

const Map = () => {

    return ( 
        <div>
            <img src={mapImage} alt="game map" className="mapStyle"/>
            {cities}
        </div> 
    );
}
 
export default Map;