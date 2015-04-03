/*!
 *  Reversing an Array
 *
 *  write two functions, reverseArray and reverseArrayInPlace. 
 *  The first, reverseArray, takes an array as argument and produces a new array 
 *  that has the same elements in the inverse order. The second, reverseArrayInPlace, 
 *  does what the reverse method does: it modifies the array given as argument in 
 *  order to reverse its elements. Neither may use the standard reverse method.
 */

(function() {
  'use strict';

  function reverseArray( arr ) {
    var reversed = [];

    arr.forEach(function( item ) {
      reversed.unshift( item );
    });

    return reversed;
  }

  function reverseArrayInPlace( arr ) {
    var halfLength = Math.floor( arr.length / 2 );
    var mirrored;
    var i;

    for (i = halfLength - 1; 
         i >= 0; 
         i--) {
      mirrored = arr[arr.length - 1 - i];

      arr[arr.length - 1 - i] = arr[i];
      arr[i] = mirrored;
    }

    return arr;
  }

  console.log( reverseArray( [5, 4, 3, 2, 1, 0] ) );
  // → [0, 1, 2, 3, 4, 5]

  console.log( reverseArrayInPlace( [9, 7, 3, 'k', 0, 3] ) );
  // → [3, 0, 'k, 3, 7, 9]
})();