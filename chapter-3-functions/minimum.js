/*!
 *  Minimum
 *
 *  Write a function min that takes two arguments and returns their minimum.
 */

(function() {
  'use strict';

  function min( a, b ) {
    return ( a < b ) ? a : b;
  }

  console.log( min( 0, 10 ) );
  console.log( min( 0, -10 ) );
  console.log( min( 1, 3 ) );
})();