const assert = require('assert');
const Room = require('../models/room.js');
const PaintCan = require('../models/paint.js');
const Decorator = require('../models/decorator.js');



describe('Decorator', function () {

  let kitchen;
  let paintCan1;
  let paintCan2;
  let paintCan3;
  let ben;

  beforeEach(function () {
    kitchen = new Room(10)
    livingRoom = new Room(25)

    paintCan1 = new PaintCan(10, 10)
    paintCan2 = new PaintCan(10, 10)
    paintCan3 = new PaintCan(10, 10)

    ben = new Decorator()
  });

  it('should start with an empty paint stock', function () {
    const actual = ben.paintStock.length;
    assert.strictEqual(actual, 0);
  });
  
  it('should be able to add a can of paint to paint stock', function () {
    ben.addToPaintStock(10, 10)
    const actual = ben.paintStock.length;
    assert.strictEqual(actual, 1);
  })

  it('should be able to calculate the total litres of paint left in stock', function () {
    ben.addToPaintStock(10, 10);
    ben.addToPaintStock(10, 10);
    const actual = ben.checkPaintStockVolume();
    assert.strictEqual(actual, 20)
  })

  it('should be able to check whether it has enough paint to paint a room', function () {
    ben.addToPaintStock(10, 10);
    ben.addToPaintStock(10, 10);
    const actual = ben.enoughPaintForRoom(kitchen)
    assert.strictEqual(actual, true)
  })

  // Extensions
  it('should be able to paint room if it has enough stock', function () {
    ben.addToPaintStock(10, 10);
    ben.addToPaintStock(10, 10);
    ben.paintRoom(kitchen)
    const actual = kitchen.painted
    assert.strictEqual(actual, true)
  })

  it('should be able to empty finished paint cans', function () {
    ben.addToPaintStock(10, 0);
    ben.addToPaintStock(10, 0);
    ben.removeEmptyCans()
    const actual = ben.paintStock.length
    assert.strictEqual(actual, 0)
  })

});