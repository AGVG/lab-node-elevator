const Elevator = require('./elevator.js');
const Person = require('./person.js');


var elevator = new Elevator(2,3);
var pedro = new Person("Pedro", 1, 2);
var julia = new Person("Julia", 2, 3);
elevator.call(pedro);
elevator.call(julia);
elevator.floorUp();
// console.log(elevator.requests[0]);
