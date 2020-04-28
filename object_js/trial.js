/*
Author : Priyanka Gaikwad
Date : 27 April 2020
Purpose : Practice file.
*/


employeeFun = (name)=>{
	var obj = {};
		obj.name = name;
		obj.greeting = ()=>{
			return "hii";
		}

		return obj;
}

var data = employeeFun("Piyu");
console.log(data);

//Create object by using new operator

function Company(name) { 
	var perObj = {};
	    perObj.name = name;
}
Company.prototype.year = 1995;

Company.prototype.getInfo = function(){
  console.log('Better');
};

var person1 = new Company("Mphasis");
person1.getInfo();


console.log(person1 instanceof Company , "Check instance of comp");


//Constructor , class, methods in js

class Animals {
    constructor(name, specie) {
        this.name = name;
        this.specie = specie;
    }
    sing = ()=> {
        console.log(`${this.name} can sing`);
    }
    dance = ()=> {
        console.log(`${this.name} can dance`);
    }
}
let bingo = new Animals("Priyanka", "Mphasis");
bingo.sing();
bingo.dance();



//Inheritance in javascript

class Demo {
	constructor(name, specie) {
        this.name = name;
        this.specie = specie;
    }
}
class Project extends Demo{
		constructor(name, specie) {
			super(name,specie);
	        //this.name = name;
	        //this.specie = specie;
	    }
}

let demo = new Project("Super", "Sub");
console.log(demo)


// Object.assign()

const target = { a: 1, b: 2 };
const source = { d: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(returnedTarget);


//object create by using  Object.create() method


const Test = {
  isHuman: false,
  printIntroduction: function () {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  }
};

const me = Object.create(Test);

me.name = "Priyu"; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // inherited properties can be overwritten

me.printIntroduction();


// diffrence between Object.create and new in java script

function Dog(){
    this.pupper = 'Pupper';
};

Dog.prototype.pupperino = 'Pups.';
var maddie = new Dog();
var buddy = Object.create(Dog.prototype);

//Using Object.create()
console.log(buddy.pupper); //Output is undefined
console.log(buddy.pupperino); //Output is Pups.

//Using New Keyword
console.log(maddie.pupper); //Output is Pupper
console.log(maddie.pupperino); //Output is Pups.

