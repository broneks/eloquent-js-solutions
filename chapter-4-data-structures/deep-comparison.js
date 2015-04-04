/*!
 *  Deep Comparison
 *
 *  Write a function, deepEqual, that takes two values and returns true only 
 *  if they are the same value or are objects with the same properties whose 
 *  values are also equal when compared with a recursive call to deepEqual.
 */

(function() {
  'use strict';

  function deepEqual( first, second ) {
    if ( first === second ) return true;

    if ( typeof first  !== 'object' || first === null || 
         typeof second !== 'object' || second === null) {
        return false;
    }

    var firstLength  = Object.keys( first ).length;
    var secondLength = Object.keys( second ).length;
    var key;

    for ( key in second ) {
      if ( key in first === false || !deepEqual( first[key], second[key]) ) {
        return false;
      }
    }

    return firstLength === secondLength;
  }

  var obj = {here: {is: "an"}, object: 2};

  console.log( deepEqual( obj, obj ) );
  // → true

  console.log( deepEqual( obj, {here: 1, object: 2} ) );
  // → false

  console.log( deepEqual( obj, {here: {is: "an"}, object: 2} ) );
  // → true
})();