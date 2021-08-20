const assert = require('assert'); // for the testing capabilites
const expect = require('chai').expect; // for chai syntax (explained later)
const calc = require('./calc'); // our testing subject

describe('Test calculator basics', () => {
    it('basic add 1 + 1 == 2', function() {
        actual_result  = calc.add(1, 1) // input data should come from db
        expected_results = 2 // expected result should come from db
        assert.strictEqual(actual_result, expected_results);
      });
})

describe('Test calculator basics with chai', () => {
    before(function() {
        // runs once before the first test in this block
      });
    it('basic mul 2 * 4 = 8', function() {
        actual_result  = calc.multiply(2, 4) // input data should come from db
        expected_results = 8 // expected result should come from db
        //assert.strictEqual(actual_result, expected_results);
        expect(expected_results).to.equal(actual_result)
      });
})

describe('hooks', function() {
    before(function() {
      // runs once before the first test in this block
    });
  
    after(function() {
      // runs once after the last test in this block
    });
  
    beforeEach(function() {
      // runs before each test in this block
    });
  
    afterEach(function() {
      // runs after each test in this block
    });
  
    // test cases
  });

  