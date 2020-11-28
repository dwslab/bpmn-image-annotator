import RuleProvider from 'diagram-js/lib/features/rules/RuleProvider';

import inherits from 'inherits';


export default function ResizeAllRules(eventBus) {
  RuleProvider.call(this, eventBus);
}

inherits(ResizeAllRules, RuleProvider);

ResizeAllRules.$inject = [ 'eventBus' ];


ResizeAllRules.prototype.init = function() {
  // this.addRule('connection.start', 1500, function() {
  //   return true;
  // });

  // this.addRule('connection.create', 1500, function() {
  //   return true;
  // });

  // this.addRule('connection.reconnect', 1500, function() {
  //   return true;
  // });

  this.addRule('shape.resize', 1500, function() {
    return true;
  });

  // this.addRule('elements.create', 1500, function() {
  //   return true;
  // });

  // this.addRule('elements.move', 1500, function() {
  //   return true;
  // });

  // this.addRule('shape.create', 1500, function() {
  //   return true;
  // });

  // this.addRule('shape.attach', 1500, function() {
  //   return true;
  // });

  // this.addRule('element.copy', 1500, function() {
  //   return true;
  // });

};

