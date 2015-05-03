/*!
 * The Locked Box
 *
 * Write a function called withBoxUnlocked that takes a function value as argument, unlocks the box, 
 * runs the function, and then ensures that the box is locked again before returning, regardless of 
 * whether the argument function returned normally or threw an exception.
 *
 * For extra points, make sure that if you call withBoxUnlocked when the box is already unlocked, 
 * the box stays unlocked.
 */

(function() {
  'use strict';

  var box = {
    locked: true,
    unlock: function() { this.locked = false; },
    lock: function() { this.locked = true;  },
    _content: [],
    get content() {
      if (this.locked) throw new Error("Locked!");
      return this._content;
    }
  };

  function withBoxUnlocked( body ) {
    if ( !box.locked ) {
      return body();  
    }

    box.unlock();

    try {
      return body();
    } finally {
      box.lock();
    }
  }

  withBoxUnlocked(function() {
    box.content.push( "gold piece" );
  });

  try {
    // box.unlock();
    withBoxUnlocked(function() {
      throw new Error( "Pirates on the horizon! Abort!" );
    });
  } catch ( e ) {
    console.log( "Error raised:", e );
  }

  console.log( box.locked );
  // → true
})();