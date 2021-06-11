import {ticketToRideData} from "../assets/ticket-to-ride-data";

const Connection = (props) => {
    const from = props.conn.fromCity;
    const to = props.conn.toCity;
    const cities = [...Object.values(ticketToRideData.cities)];
    const fromCity = cities.filter(elem => elem.city === from)[0];
    const toCity = cities.filter(elem => elem.city === to)[0];
    const group = props.conn.elements;

    const getDegree = (connection, i, group) => {
        let prev = {};
        let next = {};
        if (group.length === 1) {
            return Math.atan2(toCity.y - fromCity.y, toCity.x - fromCity.x) * 180 / Math.PI + 90;
        }
        if (i === 0) {
            prev.x = fromCity.x;
            prev.y = fromCity.y;
            next = group[i + 1];
        }
        else if (i === group.length - 1) {
            prev = group[i - 1];
            next.x = toCity.x;
            next.y = toCity.y;
        }
        else {
            prev = group[i - 1];
            next = group[i + 1];
        }

        const numerator = (connection.x - prev.x) * (next.x - prev.x) + (connection.y - prev.y) * (next.y - prev.y);
        const divider = Math.sqrt((prev.x - connection.x) ** 2 + (prev.y - connection.y) ** 2) * Math.sqrt((next.x - prev.x) ** 2 + (next.y - prev.y) ** 2);

        return (Math.acos(numerator / divider) + Math.atan2(next.y - prev.y, next.x - prev.x)) * 180 / Math.PI + 90;
    }
    
    return ( 
        props.conn.elements.map((elem, i) => {
            return <div style={ {
                position: "absolute", 
                left: (elem.x - 1.5) + "%",
                top: (elem.y - 0.5) + "%",
                height: "1.5%",  
                width: "3%",
                display: "inline",
                backgroundColor: props.conn.color,
                transform: "rotate(" + (getDegree({x: elem.x, y: elem.y}, i, group) + 80) + "deg)",
                opacity: props.built ? "0%" : "50%"
            } }>
            </div>
        })
    );
}
 
export default Connection;
