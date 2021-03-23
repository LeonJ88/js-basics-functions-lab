// Code your solution in this file!
const hQ = 42

function distanceFromHqInBlocks(pickUp) {
 const blocksAway = hQ > pickUp ? hQ - pickUp : pickUp - hQ;
 return blocksAway  
}

function distanceFromHqInFeet(startPoint) {
    const feetAway = distanceFromHqInBlocks(startPoint) * 264;
    return feetAway
}

function distanceTravelledInFeet(start, end) {
    const feetTraveled = start > end ? start - end : end - start;
    return feetTraveled * 264
}

function calculatesFarePrice(start, destination) {
    const customerDistance = distanceTravelledInFeet(start, destination);
    if (customerDistance <= 400) {
    return 0;
    }
    else if (customerDistance > 400 && customerDistance <= 2000) {
        return .02 * (customerDistance - 400);
    }
    else if (customerDistance > 2000 && customerDistance < 2500) {
        return 25;
    }
    else {
        return 'cannot travel that far';
    }

    
}