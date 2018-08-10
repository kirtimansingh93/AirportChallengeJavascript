// 'use strict';

// function Airport() {}
// Airport.prototype.planes = function () {
//   return [];
// };
//
// Airport.prototype.clearForLanding = function (plane) {
//
// };

function Airport() {
  this._hangar = [];
}

Airport.prototype.planes = function() {
  return this._hangar;
};
Airport.prototype.clearForLanding = function(plane) {
  if (this.isStormy()) {
    throw new Error("Plane cannot land when weather is stormy");
  }
  this._hangar.push(plane);
};
Airport.prototype.clearForTakeOff = function(plane) {
  if (this.isStormy()) {
      throw new Error("Plane cannot takeoff when weather is stormy");
  }
  this._hangar.pop(plane);
};
Airport.prototype.isStormy = function() {
  return false;
};
