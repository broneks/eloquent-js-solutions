/*!
 *  FizzBuzz
 *
 *  Write a program that uses console.log to print all the numbers from 1 to 100, 
 *  with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, 
 *  and for numbers divisible by 5 (and not 3), print "Buzz" instead.
 *
 *  When you have that working, modify your program to print "FizzBuzz", 
 *  for numbers that are divisible by both 3 and 5 (and still print "Fizz" 
 *  or "Buzz" for numbers divisible by only one of those).
 */

(function() {
  'use strict';

  var fizzBuzz = {
    modBy: function( x, divisor ) {
      return x % divisor === 0;
    },

    print: function() {
      if ( !this.max ) return;

      for ( var i = 1; i <= this.max; i++ ) {
        if ( this.modBy( i, 3 ) && this.modBy( i , 5 ) ) {
          console.log('FizzBuzz');
        }
        else if ( this.modBy( i , 3 ) ) {
          console.log('Fizz');
        }
        else if ( this.modBy( i, 5 ) ) {
          console.log('Buzz');
        }
        else {
          console.log( i );
        }
      }
    },

    start: function( max ) {
      this.max = ( typeof max !== 'undefined' && max > 1 ) ? max : 100;

      this.print();
    }
  };

  fizzBuzz.start();
})();