function Calculator(a, b) {
    this.a = a;
    this.b = b;
};

var c1 = new Calculator(10, 5);
var c2 = new Calculator(7, 3);
var c3 = new Calculator(5, 10);
var c4 = new Calculator(5, 10);

Calculator.prototype.add = function () {
    return (this.a + this.b);
}

Calculator.prototype.sub = function () {
    return (this.a - this.b);
}

Calculator.prototype.mult = function () {
    return (this.a * this.b);
}

Calculator.prototype.log = function () {
    console.log('The solution of add is ' + this.add());
    console.log('The solution of sub is ' + this.sub());
    console.log('The solution of mult is ' + this.mult());
}

c1.log();

setTimeout(function () {
    c2.log();
}, 2000);

