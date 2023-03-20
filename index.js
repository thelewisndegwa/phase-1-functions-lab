// Code your solution in this file!

function distanceFromHqInBlocks(street){
    distanceFromHqInBlocks =Math.abs(street - 42);
    return distanceFromHqInBlocks;
}


function distanceFromHqInFeet(street){
    distanceFromHqInFeet= distanceFromHqInBlocks * 264;
    return distanceFromHqInFeet;
}

function distanceTravelledInFeet(start,destination){
    distanceTravelledInFeet= Math.abs(destination-start) * 264;
    return distanceTravelledInFeet;
}

// function calculatesFarePrice(start,destination){
//     distanceTravelledInFeet= Math.abs(destination-start)
//     if (distanceTravelledInFeet <= 400) {
//         distanceTravelledInFee  = 'free sample';
//         return distanceTravelledInFee;
//     } else if (distanceTravelledInFeet > 400 && distanceTravelledInFeet < 2000) {
//         distanceTravelledInFee  = (distanceTravelledInFeet - 400) * 2;
//         return distanceTravelledInFee ;
//     }else if (distanceTravelledInFeet > 2000 && distanceFromHqInFeet < 2500) {
//         distanceTravelledInFee = 25
//         return distanceTravelledInFee;
//     } else {
//         distanceTravelledInFee  = 'cannot travel that far'
//         return distanceTravelledInFee;
//     }
// }

function calculatesFarePrice(start,destination){
    distanceTravelledInFeet= Math.abs(destination-start);
    if (distanceTravelledInFeet <= 400) {
        distanceTravelledInFeet  = 0;
        return distanceTravelledInFeet;
    } else if (distanceTravelledInFeet > 400 && distanceTravelledInFeet < 2000) {
        distanceTravelledInFeet  = (distanceTravelledInFeet - 400) * 2;
        return distanceTravelledInFeet ;
    }else if (distanceTravelledInFeet > 2000 && distanceFromHqInFeet < 2500) {
       return distanceTravelledInFeet = 25;
    } else {
        return distanceTravelledInFeet  = "cannot travel that far";
    }
  }
  
  
  
  
  
  
  
  