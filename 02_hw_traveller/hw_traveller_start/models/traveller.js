const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const startLocations = this.journeys.map((journey) => {
    return journey.startLocation
  })
  return startLocations
};

Traveller.prototype.getJourneyEndLocations = function () {
  const endLocations = this.journeys.map((journey) => {
    return journey.endLocation
  })
  return endLocations
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const foundJourneys = this.journeys.filter((journey) => {
    return journey.transport === transport
  })
  return foundJourneys
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const foundJourneys = this.journeys.filter((journey) => {
    return journey.distance > minDistance
  })
  return foundJourneys
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  const totalDistance = this.journeys.reduce((total, journey) => {
    return total += journey.distance
  }, 0)

  return totalDistance
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  const allJourneysMethod = this.journeys.map((journey) => {
    return journey.transport
  }) 

  // Below checks whether the current value's index is the same as the first index it appears in the array.
  // Eg train first appears at index 0 and this is the first instance it appears. The second train is looped over and index 0 (where it first appears) !== 1, therefore it is not added.
  const uniqueMethods = allJourneysMethod.filter((value, index) => {
    return allJourneysMethod.indexOf(value) === index
  })

  return uniqueMethods
};


module.exports = Traveller;
