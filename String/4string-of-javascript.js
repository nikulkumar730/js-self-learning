// STRING OF JAVA-SCRIPT
/*
STRING is decleard in qoutes and and string decleard using doubble qoutes are the same 
but but practices are recommended use " " for string 

ex let stringOne ='nikul'
ex let stringTwo="nikul"

string decleard using backtics are special type of string called (template litral).

template litral like normal string but they have some special properties 

1. you can (embed javascript) in them 
2. ypu can decleard template litrals over multiple lines.
*/

//EMBEDDING  JAVASCRIPT 
/*
in side a template litral , you can wrap java script variale pr expression
inside `${ }`, and the result will be included in the string 
*/

const name1="nikul prajapati"
const gretting= `hellow mr., ${name1}`;
console.log(gretting)

// we add more then one too in side a string 
const name2="janki"
const nam2=" hanuman"
const gretting1= `ram lakhan  ${name2}  jai bolo ${nam2}`;
console.log(gretting1)

//new line without /n support template litrals
const newline = `One day you finally knew
what you had to do, and began`;
console.log(newline);

/*
One day you finally knew
what you had to do, and began
*/

// Numbers vs. strings
// What happens when we try to concatenate a string and a number? 
const name = "Front ";
const number = 242;
console.log(nam + number); // "Front 242" OUTPUT :=> its become a string 

/*
The Number() function converts anything passed 
to it into a number if it can. Try the following:
*/
const myString = "123";
const myNum = Number(myString);
console.log(typeof myNum);
// number typeof is a function oprator we use this for check type of data


//Conversely, the String() function converts its argument to a string.
const myNum2 = 123;
const myString2 = String(myNum2);
console.log(typeof myString2);
// string typeof is a function oprator we use this for check type of data
