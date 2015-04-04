/*!
 *  Flattening
 *
 *  Use the reduce method in combination with the concat method to “flatten” 
 *  an array of arrays into a single array that has all the elements of the input arrays.
 */

(function() {
  'use strict';

  var arrays = [[1, 2, 3], [4, 5], [6]];
  
  var flattened = arrays.reduce(function( current, next ) {
    return current.concat( next );
  });

  console.log( flattened );
  // → [1, 2, 3, 4, 5, 6]
})();