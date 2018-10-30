const cap = require('../lib/cap.js');
const repeat = require('../lib/repeat.js');
const assert = require('assert');

// Semi-intg test
describe('Testing cap-repeat functionality', function() {
    it('should return capped and repeated letters', function() {
        const input = 'hello';
        const expected = 'HELLOHELLO';
        const capped = cap(input);
        const caprepeated = repeat(capped);
        assert.equal(caprepeated, expected, 'NOPE');
    });
});

// Add more conditions to test capping and repeating.