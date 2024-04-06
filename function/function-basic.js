function AddTwoNumber(num1,num2){//here we use num1, num2 thats called //peramiters// 
const AddedValue=num1+num2
console.log(`the added value is :${AddedValue}`) //in the console i use backticks for embading js in string
                                                 // another name of this is template litral
}
AddTwoNumber(10,10)//output is 20 in the AddTwoNumber there are 10, 10 the are called //argument// 

// how to return values from function
function ReturnedValue(one,two){
const returnableValue = one+two
return returnableValue//after the return there are any code then this will be are not exicuted 
                      // or called dead code 
}
const returned =ReturnedValue(2,3)
console.log(`this is the value of returnedvalue function: ${returned}`)


// object with function 
const user ={
    username:"nikul",
    price:1000,
}
function handleObject(peramiter){
    console.log(`username is : ${peramiter.username} and price is : ${peramiter.price} `);
}
handleObject(user)

// array in with funtion 
const myNewArray=[11,12,13]
function returnSecondValue(getarray){
    return getarray[1]

}
console.log(returnSecondValue(myNewArray))//output 12

