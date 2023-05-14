const Room = function (area, painted=false) {
  this.area = area;
  this.painted = painted
};

Room.prototype.isPainted = function(roomToPaint) {
  return this.painted = true
}

module.exports = Room;