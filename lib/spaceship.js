function Spaceship (name, crew) {
  this.name = name;
  this.crew = crew;
  this.phasers = 5;
  this.shields = 4;
  this.cloaked = false;
  this.warpDrive = "disengaged";
  this.phasersCharge = "uncharged";
  this.docked = true;
  if (crew.length == 0) {
    this.docked = true;
  }
  else {
    this.docked = false;
    var self = this;
    self.crew.forEach(function(crewmember){
      crewmember.currentShip = self;
    });
  }
}
