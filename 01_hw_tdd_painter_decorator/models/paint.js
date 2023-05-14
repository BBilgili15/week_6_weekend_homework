const PaintCan = function (maxVolume, volumeRemaining) {
  this.maxVolume = maxVolume
  this.volumeRemaining = volumeRemaining;
};

PaintCan.prototype.checkEmpty = function() {
  
  if (this.volumeRemaining === 0) {
    return true
  } else {
    return false
  }
}

PaintCan.prototype.emptySelf = function() {
  return this.volumeRemaining = 0;
}


module.exports = PaintCan;