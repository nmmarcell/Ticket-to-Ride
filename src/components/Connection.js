const Connection = (props) => {
    /*
    const getDegree = (connection) => {
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
    */
    return ( 
        props.conn.elements.map(elem => {
            return <div style={ {
                position: "absolute", 
                left: (elem.x - 0.5) + "%",
                top: (elem.y - 2) + "%",
                height: "1.5%",  
                width: "4%",
                display: "inline",
                backgroundColor: props.conn.color,
                transform: "rotate(" + getDegree(connection) + "deg)"
            } }>
            </div>
        })
    );
}
 
export default Connection;
