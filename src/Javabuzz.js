var Javabuzz = function() {};

Javabuzz.prototype = {

  _isDivisibleBy: function(number, divisor) {
    return (number % divisor === 0);
  },

  isDivisibleByThree: function(number) {
    return this._isDivisibleBy(number, 3);
  },

  isDivisibleByFive: function(number) {
    return this._isDivisibleBy(number, 5);
  },

  isDivisibleByFifteen: function(number) {
    return this._isDivisibleBy(number, 15);
  },

  says: function(number) {
    if (this.isDivisibleByFifteen(number)) {
      return 'JavaBuzz';
    }
    if (this.isDivisibleByThree(number)) {
      return 'Java';
    }
    if (this.isDivisibleByFive(number)) {
      return 'Buzz';
    }
    return number;
  }
}

//  Alternative syntax

/*
class Javabuzz {

  _isDivisibleBy(number, divisor) {
    return (number % divisor === 0);
  };

  isDivisibleByThree(number) {
    return this._isDivisibleBy(number, 3);
  };
  isDivisibleByFive(number) {
    return this._isDivisibleBy(number, 5);
  };
  isDivisibleByFifteen(number)  {
    return this._isDivisibleBy(number, 15);
  };

  says(number) {
    if (this.isDivisibleByFifteen(number)) {
      return 'JavaBuzz';
    }
    if (this.isDivisibleByThree(number)) {
      return 'Java';
    }
    if (this.isDivisibleByFive(number)) {
      return 'Buzz';
    }
    return number;
  };

};
*/