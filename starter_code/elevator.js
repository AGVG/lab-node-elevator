class Elevator {
  constructor(floor, requests){
    this.floor      = floor;
    this.MAXFLOOR   = 10;
    this.requests   = [];
    if (this.requests[0] < this.floor){
      this.direction = "Down";
    } else if (this.requests[0] > this.floor){
      this.direction = "Up";
    } else {
      this.direction = "none";}
  }

  start() {
    setInterval(()=> this.update(), 1000);
  }

  stop() { clearInterval(this.start);}

  update() {
    // this.requests[0];
    this.log();}

  _passengersEnter() { }
  _passengersLeave() { }

  floorUp(floor){
    setInterval(()=> this.floor +=1,1000);
    // if (this.floor == this.MAXFLOOR){
    //
    // }

}

  floorDown() {
    if (this.floor <= 0){
      return this.floor;
    } else if (this.floor > 0){
      this.direction ="Down";
      this.floor -= 1;
    }
  }
  call(person) {
    return this.requests.push(person);
   }

  log() {
    console.log("Direction: " + this.direction + " | Floor:"+ this.floor);
  }
}

var floor = new Elevator(2,3);

// console.log(floor.log());
// console.log(floor.floorUp());
// console.log(floor.log());
// console.log(floor.floorUp());
// console.log(floor.log());
// console.log(floor.floorUp());
// console.log(floor.log());
// console.log(floor.floorUp());
// console.log(floor.log());
// console.log(floor.floorUp());
// console.log(floor.log());
// console.log(floor.floorUp());
// console.log(floor.log());
// console.log(floor.floorUp());
// console.log(floor.log());
// console.log(floor.floorDown());
// console.log(floor.log());
// console.log(floor.floorDown());
// console.log(floor.log());
// console.log(floor.floorDown());
// console.log(floor.log());
// console.log(floor.floorDown());
// console.log(floor.log());
// console.log(floor.floorDown());
// console.log(floor.log());
// console.log(floor.floorDown());
// console.log(floor.log());
// console.log(floor.floorDown());
// console.log(floor.log());
// console.log(floor.floorDown());
// console.log(floor.log());
// console.log(floor.floorDown());
// console.log(floor.log());
// console.log(floor.floorDown());
// console.log(floor.log());


module.exports = Elevator;
