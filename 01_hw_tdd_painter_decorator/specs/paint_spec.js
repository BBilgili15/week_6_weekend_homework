const assert = require('assert');
const Room = require('../models/room.js');
const PaintCan = require('../models/paint.js');
const Decorator = require('../models/decorator.js');



describe('PaintCan', function () {

  let kitchen;
  let paintCan1;
  let paintCan2;
  let paintCan3;
  let paint;
  let ben;

  beforeEach(function () {
    paintCan1 = new PaintCan(10, 10)
    paintCan2 = new PaintCan(10, 10)
    paintCan3 = new PaintCan(10, 10)
  });

  it('should have a number of liters of paint', function () {
    const actual = paintCan1.volumeRemaining
    assert.strictEqual(actual, 10)
  });

  it('Should be able to check if it is empty', function () {
    const actual = paintCan1.checkEmpty()
    assert.strictEqual(actual, false)
  })

  it('Should be able to empty itself', function () {
    paintCan1.emptySelf()
    const actual = paintCan1.checkEmpty()
    assert.strictEqual(actual, true)
  })
});

