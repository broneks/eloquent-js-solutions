/*!
 *  A List
 *
 *  var list = {
 *    value: 1,
 *    rest: {
 *      value: 2,
 *      rest: {
 *        rest: null
 *      }
 *    }
 *  };
 *
 *  Write a function arrayToList that builds up a data structure like the example above when 
 *  given [1, 2, 3] as argument, and write a listToArray function that produces 
 *  an array from a list. Also write the helper functions prepend, which takes an element 
 *  and a list and creates a new list that adds the element to the front of the input list, 
 *  and nth, which takes a list and a number and returns the element at the given position 
 *  in the list, or undefined when there is no such element.
 *
 *  If you haven’t already, also write a recursive version of nth.
 */

(function() {
  'use strict';

  function arrayToList( array ) {
    var list = null;

    array.reverse().forEach(function( element ) {
      list = {
        value : element,
        rest  : list
      };
    });

    return list;
  }

  function listToArray( list ) {
    var array = [];
    var currentLevel = list;

    while ( currentLevel !== null ) {
      array.push( currentLevel.value );
      currentLevel = currentLevel.rest;
    }

    return array;
  }

  function nth( list, index ) {
    if ( index ) {
      return nth( list.rest, index - 1 );
    }
    
    return list.value;
  }

  function prepend( element, list ) {
    return {
      value : element,
      rest  : list
    };
  }

  console.log( arrayToList( [10, 20, 30, 40] ) );
  // → {value: 10, rest: {value: 20, rest: null}}

  console.log( listToArray( arrayToList( [10, 20, 30] ) ) );
  // → [10, 20, 30]

  console.log( prepend( 10, prepend( 20, null ) ) );
  // → {value: 10, rest: {value: 20, rest: null}}

  console.log( nth( arrayToList( [10, 20, 30] ), 1 ) );
  // → 20
})();