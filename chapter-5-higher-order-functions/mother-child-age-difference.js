/*!
 *  Mother-Child Age Difference
 *
 *  Using the example data set from this chapter, compute the average 
 *  age difference between mothers and children (the age of the mother when the child is born). 
 *  You can use the average function defined earlier in this chapter.
 *
 *  Note that not all the mothers mentioned in the data are themselves present in the array. 
 *  The byName object, which makes it easy to find a person’s object from their name, might be useful here.
 */

(function() {
  'use strict';

  var ancestry = JSON.parse( require( './ancestry.js' ) );
  var byName   = {};
  var ageDifferences = [];

  function average( array ) {
    function plus( a, b ) { return a + b; }
    return array.reduce( plus ) / array.length;
  }

  // build byName object
  ancestry.forEach(function( person ) {
    byName[person.name] = person;
  });

  // group age differences
  ancestry.forEach(function( person ) {
    var mother = byName[ person.mother ];

    if ( mother ) {
      ageDifferences.push( person.born - mother.born );
    }
  });

  console.log( average( ageDifferences ) );
  // → 31.2
})();