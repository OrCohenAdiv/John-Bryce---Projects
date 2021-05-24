console.log("Hello World");

var i = 20;
var j = 35;

console.log(i + '+' + j + '=' + (i + j));

var o1 = {};
var a1 = [2, 4, 6];

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

var p1 = new Person('John', 'Lennon');
var p2 = new Person('Paul', 'McCartney');
var p3 = new Person('Ringo', 'Starr');


Person.prototype.log = function () {
    console.log('I am a person, and my name is ' + this.firstName + ' ' + this.lastName);
}

p1.log();
p2.log();

setTimeout(p3.log, 2000); // Dos'nt Work :(

var logFunc = p3.log; //Work :)
logFunc.call(p3);

function Or(yyy) {
    this.someRandomProperty = yyy;
}

function max(a, b) {
    if (a > b) return a;
    return b;
}

var k1 = new Or(10);
var k2 = new Or(20);
var k3 = new Object();

var m = new max(10, 20);

Or(42);

k1.x = 20;
k2.x = 40;

Or.prototype.z = 50;
Or.prototype.sayHello = function () {
    alert("Hi");
}

console.log(k1.z); // 50
console.log(k2.z); // 50
console.log(k1.x); // 20
console.log(k2.x); // 40