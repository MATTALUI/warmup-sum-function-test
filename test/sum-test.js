const sum = require('../sum.js');
const {expect,assert} = require('chai');

// Reference http://chaijs.com/ for questions

describe ('Sum', function() {

    it ('Should be a function', function() {
      expect(sum).to.be.a('function','sum is not a function');
      assert.isFunction(sum, 'sum is not a function');
    });

    it('Should return 0 if no arguments are passed in.', function() {
      expect(sum()).to.equal(0);
      assert.equal(sum(),0);
    });

    it('Should add up numbers given as arguments.', function(){
      expect(sum(1,2)).to.equal(3);
      expect(sum(1,2,3,4)).to.equal(10);
      expect(sum(1.5,2.5)).to.equal(4);
    });
    it('Should be able to add negative numbers.', function(){
      expect(sum(1,2,-3)).to.equal();
    })
    it('Should be able to add numbers inputted as arrays.', function(){
      expect(sum([1,2,3])).to.equal(6);
      expect(sum([1,2,3], 4)).to.equal(10);
    })
    it('Should coerce strings into numbers when possible.', function(){
      expect(sum('1', '2', 3)).to.equal(6)
    });
    it('Should reject non-number inputs..',function(){
      expect(sum('Hello World!')).to.equal('invalid input: numbers only, please!');
      expect(sum({key: 'value'})).to.equal('invalid input: numbers only, please!');
    });
    it('Should be overjoyed when \'Matt\' is inputted.', function(){
      expect(sum('Matt')).to.equal('That\'s my name!')
    })



});
