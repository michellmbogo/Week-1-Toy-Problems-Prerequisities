function checkSpeed(speed) {
    const speedLimit = 70; // Speed limit in km/s
    const kmPerPoint = 5;  // Kilometers per demerit point

    if (speed <= speedLimit) {
        console.log("Ok");
    } else {
        const points = Math.floor((speed - speedLimit) / kmPerPoint);// Calculate the demerit points
        if (points > 12) {
            console.log("License suspended");
        } else {
            console.log(`Points: ${points}`);
        }
    }
}

checkSpeed()


