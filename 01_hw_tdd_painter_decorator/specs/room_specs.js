const assert = require('assert');
const Room = require('../models/room.js');
const PaintCan = require('../models/paint.js');
const Decorator = require('../models/decorator.js');



describe('Room', function () {

  let kitchen;
  let paintCan1;
  let paintCan2;
  let paintCan3;
  let paint;
  let ben;

  beforeEach(function () {
    kitchen = new Room(10)

    paintCan1 = new PaintCan(10, 10)
    paintCan2 = new PaintCan(10, 10)
    paintCan3 = new PaintCan(10, 10)

    paint = [paintCan1, paintCan2, paintCan3]

    ben = new Decorator(paint)
  });

  it('should have an area in square meters', function () {
    const actual = kitchen.area
    assert.strictEqual(actual, 10)
  });

  it('should start not painted', function () {
    const actual = kitchen.painted
    assert.strictEqual(actual, false)
  })

  it('should be able to be painted', function () {
    kitchen.isPainted()
    const actual = kitchen.painted
    assert.strictEqual(actual, true)
  })

});
