/*!
 *  Looping a Triangle
 *
 *  Write a loop that makes seven calls to console.log to 
 *  output the following triangle:
 *
 *  #
 *  ##
 *  ###
 *  ####
 *  #####
 *  ######
 *  #######
 */

(function() {
  'use strict';

  var size   = 7;
  var symbol = '#';
  var i;

  for ( i = 1; i <= size; i++ ) {
    console.log( Array( i + 1 ).join( symbol ) );
  }
})();