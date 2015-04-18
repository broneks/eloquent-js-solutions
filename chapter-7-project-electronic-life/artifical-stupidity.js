/*!
 *  Artificial stupidity
 *
 *  Having the inhabitants of our world go extinct after a few minutes 
 *  is kind of depressing. To deal with this, we could try to create a smarter plant eater.
 *
 *  There are several obvious problems with our herbivores. First, they are terribly 
 *  greedy, stuffing themselves with every plant they see until they have wiped out the 
 *  local plant life. Second, their randomized movement (recall that the view.find method 
 *  returns a random direction when multiple directions match) causes them to stumble around 
 *  ineffectively and starve if there don’t happen to be any plants nearby. And finally, they 
 *  breed very fast, which makes the cycles between abundance and famine quite intense.
 *
 *  Write a new critter type that tries to address one or more of these points and substitute 
 *  it for the old PlantEater type in the valley world. See how it fares. Tweak it some more if necessary.
 */

(function() {
  'use strict';

  function SmartPlantEater() {
    this.energy      = 20;
    this.direction   = 'n';
    this.turns       = 0;
    this.turnsOffset = 3;
  }

  SmartPlantEater.prototype.act = function( context ) {
    var space     = context.find( ' ' );
    var plant     = context.find( '*' );
    var direction = context.look( this.direction );
    var move;

    this.turns++;

    // reproduce if energy is above 100
    if ( this.energy > 100 && space ) {
      return {type: 'reproduce', direction: space};
    }

    // move in predefined direction
    if ( direction === ' ' ) {
      move = this.direction;
    }
    else if ( direction === '#' ) {
      this.direction = ( this.direction === 'n' ) ? 's' : 'n';
      move = this.direction;
    }

    // every Nth turn, move to a random space or eat a plant
    if ( this.turns % this.turnsOffset === 0 ) {

      // eat if energy is below 85
      if ( this.energy < 85 && plant ) {
        return {type: 'eat', direction: plant};
      }
      else if ( space ) {
        move = space;
      }
    } 

    return {type: 'move', direction: move};
  };


  window.SmartPlantEater = SmartPlantEater;

  // run project-animate-electronic-life.html
})();