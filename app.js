//Variables
var hello = "world";
var num = 7;
var bool = true;
var undef = undefined;
var none = null;


//change num
num = 29;
//num = "My name is Adrie";


//Write lines in Console
/*
console.log(5);
console.log("world");
console.log(hello);
console.log(num);
console.log(bool);
console.log(undef);
console.log(none);
*/


//Math Variables
var foo;
console.log(foo); //undifined
foo = 19;
console.log(foo + 4);


//Concat
var textOne = 'Hello';
console.log(textOne + ' ' + 'World!');



//Temperature converter
//Todo  Farenheit = Celcius * 9/5 +32
//Console.log (Answer)
var Far;
var Cel = 24;
Far = (Cel * 9/5) + 32;
console.log(Far);


//Age Calculator
//Subtract teh birth year from the current year to get the age.
//Console.log(Answer);
var year = 2024;
//var year = new.Date().getFullYear();
//var age = year - BirthYear;
var BirthYear = 2003;
console.log(year - BirthYear);


//const == IMMUTABLE
const bar = 'You can not change me!';
//bar = 8;
console.log(bar);


//let = its accessible based on it's scope;
let bar2 = 'You can change me!';
bar2 = 10;
console.log(bar2);


//Dealing with quotes in strings
let stringQuote = "You aren't special";
console.log(stringQuote);
//escaping the quote
let escapeQuote = 'You aren\'t special';
console.log(escapeQuote);


//incraments and decrements
let num3 = 0;
num3++;
console.log(num3);


//setting multi-variables
let baz, baz2, baz3;
buz3 = 8;
console.log("I'm Baz3!" + buz3);
//Template Literals
console.log(`Hello Buz2 ${buz3}`);


//Personal Greetng 
//input the user to input their name.
//console out a personalized greeting message.
var namep = "Adrie";
console.log(`Hello ${namep} it's nice to meet you`)


//tip calclator
//input the usar to input the bill amount and the tip percatage
//calculate the tip amount and console the total bill.
var billAmount = 122.74;
var tipPercentage = 0.25;
var tip;
var totalBill;
tip = billAmount * tipPercentage;
totalBill = tip + billAmount;
console.log(`Total Bill - $${totalBill.toFixed(2)}`);


//Age calulator in days
//ask the user to input thir age in years
//multipy the age in years by 365
//console the total days
var age = 20;
var totalDays;
totalDays = age * 365;
console.log(`Total Days in Age - ${totalDays}`)


//temperature should hold a number representing the current temperture in Fahrieheit
//conditions should hold a string about the current weater conditions
//sunriseTime should hold a string representign what time th sun rose this moring
//sunsetTime should hold a string representing what time the sun with set this evening
//log each varible to the console
//use stign teplet literals to combine these variables into a sentence about the weather.
//(ex: "It's currently sunny and 55 degrees. The sun rose this moring at 7:34 AM and will set a 5:09 PM.")
var conditions = "sunny";
var temperature = 87;
var sunriseTime = "6:13";
var sunsetTime = "7:50";
console.log(`It's currently ${conditions} and ${temperature} degrees outside. The sun rose this morning at ${sunriseTime} AM and will set at ${sunsetTime} PM.`)


//giventhe exiting code below, can you write some code so that their values are swiched around?
var a = 3;
var b = 8;
/*
var temp = a;
a = b;
b = temp;
console.log(`a ${a}`);
console.log(`b ${b}`);
*/ 
console.log(`A is ${b}. B is ${a}`);
//a = 8; b = 3;


//for loops
for (var i = 0; i < 10; i++){
    console.log(i);
}//end for


//propt
let Firstname = prompt("Enter First Name: ");
let Lastname = prompt("Enter Last Name: ");
console.log(`Hi ${Firstname} ${Lastname} it's nice to meet you.`)