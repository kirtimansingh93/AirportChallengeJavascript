'use strict';

// describe('Airport', function() {
//   var airport
//   beforeEach(function() {
//     airport = new Airport();
//   });
//
//   it('has no planes by default', function() {
//     expect(airport.planes()).toEqual([]);
//   });
// });

describe('Airport', function() {
  var airport;
  var plane;
  beforeEach(function() {
    airport = new Airport();
    plane = jasmine.createSpy('plane',['land']);
  });
  it('has no planes by default', function() {
    expect(airport.planes()).toEqual([]);
  });
  it('can clear planes for landing', function() {
    airport.clearForLanding(plane);
    expect(airport.planes()).toEqual([plane]);
  });
  it('can clear planes for takeoff', function() {
    airport.clearForLanding(plane);
    airport.clearForTakeOff();
    expect(airport.planes()).toEqual([]);
  });
  it('checks if the weather is stormy', function() {
    expect(airport.isStormy()).toBeFalsy();
  });

  describe('under stormy conditions',function() {
    it('does not clear planes for takeoff', function() {
      spyOn(airport,'isStormy').and.returnValue(true);
      expect(function() { airport.clearForTakeOff(plane); }).toThrowError("Plane cannot takeoff when weather is stormy");
    });
    it('does not clear planes for landing', function() {
      spyOn(airport,'isStormy').and.returnValue(true);
      expect(function() { airport.clearForLanding(plane); }).toThrowError("Plane cannot land when weather is stormy");
    });
  });
});
