(function() {
  'use strict';

  window._ = {};

  var FILL_ME_IN = 'Fill this value in';
/* SCAFFOLDING
  _.func = function(){
 
  }
*/
//_.define is wanting you to declare a variable, set your variable to the input from the function
// and then return the variable you just created. This function is nearly completed for you, 
// to help guide you toward success in your work on the following exercises.
  _.define = function(input){
    // Declare a variable below that is assigned the value of input;
    var result = input;
    // return the above variable
    return result;
  }

//_.dataType is wanting you to determine the data type of what is being passed to it.
// Return the datatype of input: ie. String or number or boolean etc. 
_.dataType = function(input){
  //Code Goes Below

}

//_.sum takes two numbers as parameters and returns their sum
_.sum = function(a,b){
    //Code Goes Below
    
}

//_.subtract takes two numbers as parameters and returns their difference
_.subtract = function(a,b){
  //Code Goes Below
  
}

//_.multiply takes two numbers as parameters and returns their product
_.multiply = function(a,b){
  //Code Goes Below
  
}

//_.divide takes two numbers as parameters and returns their quotent
_.divide = function(a,b){
  //Code Goes Below
  
}

//_.modulus takes two numbers as parameters and returns their remainder of a divided by b
_.modulus = function(a,b){
  //Code Goes Below
  
}

//_.increment takes a number as a parameter and increces it by 1
// Ensure you use the proper increment operator(not a+1)
_.increment = function(a){
  //Code Goes Below
  
}

//_.decrement takes a number as a parameter and reduces it by 1
// Ensure you use the proper decrement operator (not a-1)
_.decrement = function(a){
  //Code Goes Below
  
}

//This function is complete and working. All you will need to do is 
//replace FILL_ME_IN in the variables.js test file.

_.mathOrder = function(test){
  return test;
}


//PART II

//-------------------------------------------------------------------------
/*
  Now you will start using logic to pass your tests. You will be using comparators to pass the tests.
*/
//-------------------------------------------------------------------------

//_.same takes two parameters and returns whether they are the equal or not
_.same = function(a,b){
  //Code Goes Below
  
}

//_.greater takes two numbers as parameters and checks if a is greater than b
_.greater = function(a,b){
  //Code Goes Below
  
}

//_.greater takes two numbers as parameters and checks if a is less than b
_.lessThan = function(a,b){
  //Code Goes Below
  
}

//_.falsyOrTruthy takes a parameter and determines whether it is TRUTHY or FALSY
_.falsyOrTruthy = function(a){
   //Code Goes Below
   
}

  //In the next tests you will be given four parameters to compare, sort of.
  //You will be given a, b, c, and d. Within your function you will compare 
  //a to b as well as comparing c to d. You will then compare their outcomes with
  //eachother using the && or || logic to return true or false. 
  //EXAMPLE 3 > 2 && 5 === 6
  //The above example will evaluate to False because 3 > 2 === True and 5 === 6 False.
  // And as you learned in the Learn content True && False evaluates to False.
  //For the _.andand function as well as the _.oror function you will just be using the === comparator

  //_.andand will be using the && comparator
  _.andand = function(a,b,c,d) {
  //Code Goes Below
  
  }

    //_.oror will be using the || comparator
    _.oror = function(a,b,c,d) {
      //Code Goes Below
      
      }

  //Control Flow
  //Create a basic if statement to pass the tests. 
  _.ifLogic = function(a, b){
    //Code Goes Below

  }

    //Create a basic if else statement to pass the tests. 
    _.ifElseLogic = function(a, b){
      //Code Goes Below

    }

    //Using a for loop, iterate through the array passed. 
    //Return the array as a single string.
    _.forLoop = function(a){
      //Code Goes Below

    }

    //Using NESTED for loops, iterate through an array or arrays
    _.nestedForLoop = function(a){
      //Code Goes Below
      
    }

    //While looping through the array passed determine the data type of the element. If the element is a number add it to the a variable. At the end return that variable. 
    _.forIfElseNum = function(a){
      //Code Goes Below

    }

    //This function is similar to the above function. Only this time you will be building a sentence rather than a total number. Loop through the array and concatinate the strings in it to make a sentence.
    _.forIfElseStr = function(a){
      //Code Goes Below

    }

    //In this function you will loop though the passed in array. Prior to that you need to check the second parameter to determine what you will be returning. If the second parameter is 'string' return a sentence created using the strings in the array. If the second parameter is 'number' you will return the total of the number in the array. This fuctions may be considered a CALLBACK to the previous two functions. 
    _.ifElseFor = function(a,b){
      //Code Goes Below

    }

    //PART III
    //-------------------------------------------------------------------------
/*
  Part III will be using arrow functions rather than the traditional function implementation. Note the similarities and differences.
*/
//------------------------------------------------------------------------- 

    //Below you will be building a function that creates an object using bracket notation ([]). Within the fuction create and return an object. 

    _.objectCreationBracket = (a,b,c) =>{
      //Code Goes Below

    }

    //Below you will be building a function that creates an object using dot notation (.). Within the fuction create and return an object. 

    _.objectCreationDot = (a,b,c) =>{
      //Code Goes Below

    }

    _.objectValue = (a,b) => {
      //Code Goes Below
      
    }
    

    //Below you are going to loop through an array, only this time you need to use a for...of loop rather than an traditional for loop.
    //The tests will be similar to the last time you looped through an array.
    //What you awill be doing is called refactoring. You take working code and restructure it, either for readability or efficiency, or anyother countless number of reasons.
    //NOTE: You can also use the same logic in a for...of loop as you would use in a traiditional for loop.

    //Loop through the given array and return the total sum of all the numbers in the array. 
    _.forOf = (a) => {
      //Code Goes Below
    }

    //Loop through the given object and return an array of keys from the object. 
    //Note: to add values to an array use .push();
    //example array.push(value)
    _.forInKeys = (a) =>{
      //Code Goes Below
      
    }

    //Loop through the given object and return an array of values from the object. 
    //This is similar to the above function but needs a little digging to get the value. 
    _.forInValues = (a) =>{
      //Code Goes Below
      
    }
}());
