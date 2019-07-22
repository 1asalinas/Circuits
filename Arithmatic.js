let a = 30;
let b = 10;

//comment
//computor will not run
//a^2 + b^2 = c^2

//defenition
function pythagorean (a,b){
let c2 = a * a + b*b;
//math library
let c = Math.sqrt(c2);
return c;
}


console.log(pythagorean(3,4))