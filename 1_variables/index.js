//Variables (var, const, let, hoisting, block scoped)

var x = 1989;
document.getElementById('var1').innerText = x;

var x = 2022;
document.getElementById('var2').innerText = x;

var a = 100;

function hoist() {
    a = 20;
    var b = 100;
}

hoist();
document.getElementById('hoist1').innerText = a;
//Comment out : error blocks other code
//document.getElementById('hoist2').innerText = b;

//global scoped

document.getElementById('hoist3').innerText = hoist3;
var hoist3 = 'hoist3, global scoped';

//function scoped
function hoist2() {
    document.getElementById('hoist4').innerText = hoist4;
    var hoist4 ='hoist4, function scoped';
  }
  
hoist2();

//comment becasue blocking error
//document.getElementById('hoist5').innerText = hoiststrict;
hoiststrict = 'Hoist strict mode';

//ES6 - let

document.getElementById('hoist_let').innerText = hoistlet1;
let hoistlet1 = 'Hoist with let keyword'; //show difference between var & let