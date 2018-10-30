const cap = require('../lib/cap.js');
const assert = require('assert');

describe('Testing cap function', function() {
    it('should capitalize letters', function() {
        const capHello = cap('hello');
        assert.equal(capHello, 'HELLO', 'YOU MESSED UP');

        const capBye = cap('bye');
        assert.equal(capBye, 'BYE', 'YOU MESSED UP');

        const capYo = cap('yo');
        assert.equal(capYo, 'YO', 'YOU MESSED UP');

        const capLol = cap('lol');
        assert.equal(capLol, 'LOL', 'YOU MESSED UP');
    });

    it('should not change non-letters', function() {
        const capNum = cap(65);
        assert.equal(capNum, 65, 'YOU MESSSSSSS');

        const capNumStr = cap('65');
        assert.equal(capNumStr, '65', 'YOU MESSSSSSS');

        const capNull = cap(null);
        assert.equal(capNull, null, 'YOU MESSSSSSS');

        const objInput = {};
        const capObj = cap(objInput);
        assert.equal(capObj, objInput, 'YOU MESSSSSSS');
    });
});

// Add tests for repeat function.
// It should repeat strings by concatenation.
// If given anything not a string, it should return what it was given.


