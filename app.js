function Vehicle(brand, model, speed,fuelType){
    this.brand = brand;
    this.model = model;
    this.speed = speed;
    this.fuelType = fuelType;
}
Vehicle.prototype.accelerate = function(num){
    this.speed += num;
    console.log(this.speed);
}
Vehicle.prototype.break = function(){
    
    console.log("stoping the car..");
}
Vehicle.prototype.refuel = function(){
    console.log("refueling the tank")
}
function Car(numberofwheels,brand, model, speed,fuelType){
Vehicle.call(this,brand, model, speed,fuelType);
this.numberofwheels = numberofwheels;
}
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.construtor = Car;
Car.prototype.honk = function(){
    console.log("honk...");
}
let car1 = new Car(4,"toyota" , "supra",45 , "4L");
console.log(car1);
car1.accelerate(34);
car1.break();
car1.honk();
console.log(car1.numberofwheels)



/////airplane/////
function Airplane(numberofwheels,brand, model, speed,fuelType, numberOfEngines , hasLandingGear){
    Vehicle.call(this,numberofwheels,brand, model, speed,fuelType)
    this.numberOfEngines = numberOfEngines;
    this.hasLandingGear == hasLandingGear;
}

Airplane.prototype = Object.create(Vehicle.prototype);
Airplane.prototype.construtor = Airplane;
Airplane.prototype.takeoff = function(){
    console.log("taking Off...")
}
let plane1 = new Airplane("3","xyz",3412,1000,"full",3,4);
console.log(plane1);
plane1.takeoff();