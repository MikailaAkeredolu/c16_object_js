//Arras in Javascript

//1 - Array Lieteral
const myList = [true, 'Buy', 1000];
document.write(myList[0] + '</br>');

//2
let myArray = new Array();
myArray[0] = 9;
myArray[1] = 19;
myArray[2] = 29;

document.write(myArray + '</br>');

//print each elemnt in this array to look like this
/*

9
19
29
- A loop
*/

document.write('</br>');

for(x = 0; x < myArray.length; x++){
    document.write(myArray[x] + '</br>');
}

//Object Literal

const scooter = {
    nameOfRider: 'Mikaila',
    speedOfScooter: 20,
    stunts: ['The one Hand', 'The one leg', 'The jump over '],
    ride: function(){
        document.write(` Y'all better watchout , cos ${scooter.nameOfRider} rides as fast as ${this.speedOfScooter} miles/hr and his favorite stunt is:  ${scooter.stunts[2]}`);
    }
}

//access object
document.write('</br>');
//print just the speed of the scooter
 //document.write(scooter.speedOfScooter + '</br>');

//Bracket notation
document.write(scooter["speedOfScooter"] + '</br>');

//modify objects
scooter.speedOfScooter = 5;
scooter["speedOfScooter"]  = 100;

//objectName.methodName()
scooter.ride();

document.write('</br>');

// // for -in loop
// for(let key in scooter){
//     document.write(key + '</br>');
// }

// for(let value in scooter){
//     document.write(`${scooter[value]} + '</br>' `);
// }

document.write(Object.keys(scooter) + '</br>');

//Second way of creating objects in JS

//Object Constructor
const myCar = new Object();
myCar.maxSpeed = 220;
myCar.driver = 'Mike';
myCar.drive = function(){
    document.write(` ${myCar.driver} 's car has a max speed of  ${this.maxSpeed}`);
}

myCar.drive();
document.write('</br>');


//Third way

//Constructor Functions

const Bike = function(make, model){
    this.make = make;
    this.model = model;
    this.printInfo = function(){
        document.write(make + " and " + model)
    }
}

const bike1 = new Bike('Bmx', 'turbo');
bike1.printInfo();
document.write('</br>');

//Modern way - protoypical inheritance
class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greet(){
        return ` Hello , ${this.name}`
    }
}

const person1 = new Person('Jack', 19);
document.write(person1.age); //print the age

document.write('</br>');

//print the greeting
document.write(person1.greet());

//Create student from the Person class

class Student extends Person {
    constructor(name, age, grade){
        super(name, age)
        this.grade = grade;
    }
}

//Create a student object and invoke the greet method
const student1 = new Student('Ryan', 45, 99);
// Student.greet();

document.write(student1.greet());