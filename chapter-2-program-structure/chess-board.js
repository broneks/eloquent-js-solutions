/*!
 *  Chess Board
 *
 *  Write a program that creates a string that represents an 8×8 grid, 
 *  using newline characters to separate lines. At each position of the grid 
 *  there is either a space or a “#” character. The characters should form a chess board.
 *
 *  Passing this string to console.log should show something like this:
 *
 *   # # # #
 *  # # # #
 *   # # # #
 *  # # # #
 *   # # # #
 *  # # # #
 *   # # # #
 *  # # # #
 *
 *  When you have a program that generates this pattern, define a variable size = 8 and 
 *  change the program so that it works for any size, outputting a grid of the given width and height.
 */

(function() {
  'use strict';

  var chessBoard = {
    tile: '#',

    draw: function() {
      var area  = this.size * this.size;
      var board = '';
      var a = this.tile;
      var b = ' ';
      var tmp;
      var i;

      for ( i = 1; i <= area; i++ ) {
        if ( i % 2 === 0 ) {
          board += a;
        } else {
          board += b;
        }
        
        // end of row
        if ( i % this.size === 0 ) {
          board += '\n';

          // swap values
          tmp = a;
          a = b;
          b = tmp;
        }
      }

      console.log( board );
    },

    init: function( size ) {
      this.size  = ( typeof size !== 'undefined' && size > 1 ) ? size : 8;

      this.draw();
    }
  };

  chessBoard.init();
})();