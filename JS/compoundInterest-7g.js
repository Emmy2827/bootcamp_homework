var p=5000;
var r=5;
var t=22;
/* Compound Interest*/

var A=p*(Math.pow((1+r/100),t));
var CI=A-p;
console.log("Compound Interest:" + CI);