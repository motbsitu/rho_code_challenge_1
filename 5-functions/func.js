// 1 - Write a function declaration that takes no arguments and returns the value 4
function number4(){
  return 4;
 }
 //console.log(number4());
//
/*
2 - Write a function declaration that takes two arguments and returns the value
    of the result of the multiplication of both arguments
*/
function foo(a,b) {
  var multiply = a * b;
  return multiply;
}

//console.log(foo(10,20));

// 3 - Write a function expression that takes one argument and console logs that value.
var bar = function(a){
  //console.log(a);
}
bar(42);


// 4 - Write a function declaration that takes a number and divides it by two.
function things(a){
  var stuff = a / 2;
  return stuff
}
//console.log(things(6));


/*
5 - Call the function from 4 and pass it into the function from 2 called with
    the arguments 10, 20. Console log the result.
*/
console.log(things(foo(10,20)));
