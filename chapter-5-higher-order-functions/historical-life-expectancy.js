/*!
 *  Historical Life Expectancy
 *
 *  Compute and output the average age of the people in the ancestry data set per century. 
 *  A person is assigned to a century by taking their year of death, dividing it by 100, and 
 *  rounding it up, as in Math.ceil(person.died / 100).
 *
 *  For bonus points, write a function groupBy that abstracts the grouping operation. 
 *  It should accept as arguments an array and a function that computes the group for an 
 *  element in the array and returns an object that maps group names to arrays of group members.
 */

(function() {
  'use strict';

  var ancestry = JSON.parse( require( './ancestry.js' ) );
  var lifeExpectancies = {};
  var key;

  function average( array ) {
    function plus( a, b ) { return a + b; }
    return array.reduce( plus ) / array.length;
  }

  function groupBy( array, fn ) {
    var groups = {};

    array.forEach(function( element ) {
      var group = fn( element );

      if (group in groups) {
        groups[group].push( element );
      } else {
        groups[group] = [element];
      }
    });

    return groups;
  }

  var byCentury = groupBy(ancestry, function ( person ) {
    return Math.ceil( person.died / 100 );
  });

  for (key in byCentury) {
    lifeExpectancies[key] = average(byCentury[key].map(function( person ) {
      return person.died - person.born;
    }));
  }

  console.log( lifeExpectancies );
  // → 16: 43.5
  //   17: 51.2
  //   18: 52.8
  //   19: 54.8
  //   20: 84.7
  //   21: 94
})();