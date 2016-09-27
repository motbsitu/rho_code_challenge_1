/*
1 - Create an object literal named prime with the properties:
    - city
    - state
    - zip
Assign the values based on Prime's address.
*/

var Prime = {
  city: 'Bloomington',
  state: 'Minnesota',
  zip: '55431'
};
//console.log(Prime.state);
/*
2 - Using dot notation, create a new property for prime. This property will
    be called address and will  take the value of Prime's street address.
*/
Prime.address = '9401 James Ave S #152';
//console.log(Prime);

/*
3 - Using dot notation, create a new method for prime. This method will
    console log out the complete address of prime. Call the new property/method print.
*/
Prime.print = function(){
  console.log(Prime.address + ', ' + Prime.city + ', ' + Prime.state + ' ' +  Prime.zip);
};

Prime.print();
