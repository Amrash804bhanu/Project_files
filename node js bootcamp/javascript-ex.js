"use strict";

//this is the examples
// this keyword
const calcAge = function (birthyear) {
  console.log(2037 - birthyear);
  console.log(this);
};

calcAge(1991);
