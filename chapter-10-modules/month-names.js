/*!
 * Month Names
 *
 * Write a simple module similar to the weekDay module that can convert
 * month numbers (zero-based, as in the Date type) to names and can convert
 * names back to numbers. Give it its own namespace since it will need an
 * internal array of month names, and use plain JavaScript, without any module
 * loader system.
 *
 * month.name();
 * month.number();
 *
 */

(function() {
  'use strict';

  var month = (function() {
    var monthNames = 'January February March April May June July August September October November December'.split(' ');

    var name = function(num) {
      return monthNames[num];
    };

    var number = function(name) {
      return monthNames.indexOf(name);
    };

    return {
      name:   name,
      number: number
    };
  })();

  console.log(month.name(2));
  console.log(month.number('November'));
})();
