var trips = [{ distance: 34 }, { distance: 12 } , { distance: 1 }];

var totalDistance = trips.reduce(function(total, distance)
{
    return total+distance.distance
},0);

console.log(totalDistance)