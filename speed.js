

function checkSpeed(speed) {
    const speedLimit = 70;
    const demeritThreshold = 5;
    const suspensionPoints = 12;

    if (speed < speedLimit) {
        return "Ok";
    } else {
        const demeritPoints = Math.floor((speed - speedLimit) / demeritThreshold);

        if (demeritPoints > suspensionPoints) {
            return `Points: ${demeritPoints}. License suspended`;
        } else {
            return `Points: ${demeritPoints}`;
        }
    }
}
console.log(checkSpeed(48))

