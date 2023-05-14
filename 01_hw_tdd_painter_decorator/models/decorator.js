const PaintCan = require('../models/paint.js');

const Decorator = function (paintStock=[]) {
  this.paintStock = paintStock;
};

Decorator.prototype.addToPaintStock = function(maxVolume, volumeRemaining) {
  const paintCan = new PaintCan(maxVolume, volumeRemaining)
  this.paintStock.push(paintCan)
  return this.paintStock
}

Decorator.prototype.checkPaintStockVolume = function() {
    const totalPaintVolume = this.paintStock.reduce((totalPaint, paintCan) => {
    return totalPaint += paintCan.volumeRemaining
  }, 0)

  return totalPaintVolume
}

Decorator.prototype.enoughPaintForRoom = function(room) {
  const totalPaint = this.checkPaintStockVolume();

  if (totalPaint > room.area) {
    return true
  } else {
    return false
  }

}

Decorator.prototype.paintRoom = function(roomToPaint) {
  
  totalPaintVolume = this.checkPaintStockVolume()

  if (totalPaintVolume > roomToPaint.area) {
    roomToPaint.isPainted()
    let paintRequired = roomToPaint.area

    // Extensions
    while (paintRequired > 0) { // if the paint required is stitting on 1 litre left, we will subtract a full other paint can. This is not completely effective
      for (const paintCan of this.paintStock ) {
        paintRequired -= paintCan.volumeRemaining;
        paintCan.volume = 0;
      }
    }
  }
}

Decorator.prototype.removeEmptyCans = function() {

  const paintCansToKeep = [];

  this.paintStock.forEach((paintCan) => {
    if (paintCan.volumeRemaining !== 0) {
      paintCansToKeep.push(paintCan)
    }
    return paintCansToKeep
  })

  return this.paintStock = paintCansToKeep
}








module.exports = Decorator;