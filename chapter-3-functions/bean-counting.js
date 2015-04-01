/*!
 *  Bean counting
 *
 *  Write a function countBs that takes a string as its only argument and returns a number 
 *  that indicates how many uppercase “B” characters are in the string.
 *
 *  Next, write a function called countChar that behaves like countBs, except it takes a 
 *  second argument that indicates the character that is to be counted (rather than counting 
 *  only uppercase “B” characters). Rewrite countBs to make use of this new function.
 *
 */

(function() {
  'use strict';

  function countChar( str, char ) {
    var strArray = str.split('');
    
    var matches = strArray.filter(function( strChar ) {
      if ( strChar === char ) return strChar;
    });

    return matches.length;
  }

  function countBs( str ) {
    return countChar( str, 'B' );
  }

  console.log( countBs( 'BBC' ) );
  console.log( countChar( 'kakkerlak', 'k' ) );
  console.log( countChar( 'testing', 'z' ) );
})();