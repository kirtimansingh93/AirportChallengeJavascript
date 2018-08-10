

'use strict';

describe('Feature Test- User Stories:', function() {
  // As an air traffic controller
  // To get passengers to a destination
  // I want to instruct a plane to land at
  // an airport and confirm that it has landed
  var plane;
  var airport;

  beforeEach(function() {
    plane = new Plane();
    airport = new Airport();
  });

  it('instruct a plane to land at an airport', function() {
    plane.land(airport);
    expect(airport.planes()).toContain(plane);
  });

  // As an air traffic controller
  // To get passengers to a destination
  // I want to instruct a plane to take off from
  // an airport and confirm that it is no longer in the airport

  it('instructs a plane to takeoff from an airport', function() {
    plane.land(airport);
    plane.takeoff(airport);
    expect(airport.planes()).not.toContain(plane);
  });

  // As an air traffic controller
  // To ensure safety
  // I want to prevent takeoff when weather is stormy

  it('prevent takeoff when weather is stormy', function() {
    plane.land(airport);
    spyOn(airport,'isStormy').and.returnValue(true);
    expect(function() { plane.takeoff(airport); }).toThrowError("Plane cannot takeoff when weather is stormy");
    expect(airport.planes()).toContain(plane);
  });

// As an air traffic controller
// To ensure safety
// I want to prevent landing when weather is stormy
  it('prevent landing when weather is stormy', function() {
    spyOn(airport,'isStormy').and.returnValue(true);
    expect(function() { plane.land(airport); }).toThrowError("Plane cannot land when weather is stormy");
  });

 });
