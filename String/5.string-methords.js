//Finding the length of a string
const nam = "nikul";
const lenth=nam.length;
console.log(lenth)// output:5

//Retrieving a specific string character
const nam1 = "nikul";
console.log(nam1[0])//output:n



//Often you'll want to know if a string starts or ends with a particular substring. 
//This is a common enough need that there are two special methods for this:
// startsWith() and endsWith()
const browserType = "RAJASTHAN";

if (browserType.startsWith("RAJA")) {
  console.log("Found RAJA!");
} else {
  console.log("No RAJA here!");

}
//
const browserType1 = "RAJASTHAN";
// endsWith() FIND THE WORD IN THE LAST OF STRING LENGTH
if (browserType1.endsWith("STHAN")) {
  console.log("Found STHAN!");
} else {
  console.log("No STHAN here!");
}

// INDEX OF METHORD RETURN INDEX OF SUBSTRING 
const tagline = "NIKUL IS A  developers, by developers";
console.log(tagline.indexOf("developers")); // 12

//Extracting a substring from a string
/*
You can extract a substring from a string using the slice() method. 

the index at which to start extracting

the index at which to stop extracting. This is exclusive, meaning that the character at this index is not included in the extracted substring.
*/
const sliceMethord = "NIKULPRAJAPATI";
console.log(sliceMethord.slice(2, 5)); // "KUL" allway return with value -1 index


/**
 * 
 * Updating parts of a string
You can replace one substring inside a string with another
 substring using the replace() method.

 */
 const replaceData = "mozilla";
 const updated = replaceData.replace("moz", "van");
 
 console.log(updated); // "vanilla"
 console.log(replaceData); // "mozilla"

// second example of replace
 const url="https://google.com/nature%20image"
 console.log(replace('%20','-'))// https://google.com/nature-image
 




 //String.prototype.split()
 /** 
The split() method of String values takes a pattern and divides this string into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array.
  */
const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');
console.log(words[3]);
// Expected output: "fox"

const chars = str.split('');
console.log(chars[8]);
// Expected output: "k"

const strCopy = str.split();
console.log(strCopy);
// Expected output: Array ["The quick brown fox jumps over the lazy dog."]


//String.prototype.trim()
/*
The trim() method of String values removes whitespace from both ends of this string and returns a new string, without modifying the original string.
*/
const trimString = '   Hello world!   ';

console.log(greeting);
// Expected output: "   Hello world!   ";

console.log(greeting.trim());
// Expected output: "Hello world!";
