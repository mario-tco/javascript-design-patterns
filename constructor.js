// Creating objects
var newObj = {};
//or
var newObj = Object.create(Object.prototype);
//or
var newObj = new Object();


// Setting properties
newObj.awesomeKey = 'Awesome';
newObj['awesomeKey'] = 'Awesome';
// Getting properties
var awesomeValue = newObj.awesomeKey;
var awesomeValue = newObj['awesomeKey'];



// Basic Constructor
function Car(model, year, miles){
	this.model = model;
	this.year = year;
	this.miles = miles;

	this.toString = function(){
		return this.model + " has done " + this.miles + " miles.";
	};
}
// Usage
var mazda = new Car("Mazda3", 2013, 600);



// Refactor using prototype:
function Car(model, year, miles){
	this.model = model;
	this.year = year;
	this.miles = miles;
}
Car.prototype.toString = function(){
	return this.model + " has done " + this.miles + " miles.";
};
var civic = new Car( "Honda Civic", 2009, 20000 );
console.log(civic.toString());