// =====================================Chapter 17 to 20=========================================
// Question No#1
// let emptyarray=[[],[],[]]





// Question No#2
// let matrix=[[0,1,2,3],[1,0,1,2],[2,1,0,1]]
// console.log(matrix);






// Question No#3
// for ( let i=1;i<=10;i++){
//     console.log(i);
// }





// Question No#4
// let tablenum=+prompt("Enter a number for table")
// let lengthnum=+prompt("Enter a length of table")
// for(e=1; e<=lengthnum;e++){
//     document.write(`${tablenum}*${e}=${tablenum*e} <br>`)
// }





// Question No#5
// const fruits = ["apple", "banana", "mango", "orange", "strawberry"];

// for (let f= 0; f <fruits.length; f++) {
//   console.log(fruits[f]);
// }












// Question No#6
// console.log("Counting:");
// for (let i = 1; i <= 15; i++) {
//   console.log(i);
// }


// console.log("Reverse counting:");
// for (let i = 10; i >= 1; i--) {
//   console.log(i);
// }

// console.log("Even:");
// for (let i = 0; i <= 20; i += 2) {
//   console.log(i);
// }

// console.log("Odd:");
// for (let i = 1; i <= 19; i += 2) {
//   console.log(i);
// }


// console.log("Series:");
// for (let k = 1; k <= 10; k++) {
//   console.log(2 * k + "k");
// }












// Question No#7
// let A = ["cake", "apple pie", "cookie", "chips", "patties"];
// let searchItem = prompt("Enter the item you want to search for: ");

// if (A.includes(searchItem)) {
//     alert(`${searchItem} is found in the list.`);
// } else {
//     alert(`${searchItem} is not found in the list.`);
// }



















// Question No#8

// let  highest =Math.max(24, 53, 78, 91, 12);
// console.log("The largest number in the array is: " + highest);










// Question No#9
// let  Smallest=Math.min (24, 53, 78, 91, 12);
// console.log("The Smallest number in the array is: " + Smallest);




// Question No#10

// for (let k = 1; k <= 20; k++) {
//       console.log(5* k );
// }














// =====================================Chapter 21 to 25=========================================

// Question No#1
// let fname=prompt("Enter your First Name")
// let lname=prompt("Enter your Last Name")
// let fullname=fname+lname
// alert(`Assalam -u- Alikum ${fullname}`)





// Question No#2
// let phone=prompt("Enter your Favorite Phone model")
// console.log(phone.length);





// Question No#3
// let v="Pakistani"
// let findindex=v.indexOf("n")
// console.log("Index of n is: "+ findindex);








// Question No#4
// let z="Hello World"
// let lastindex=z.lastIndexOf("l")
// console.log("Last index of l is:  "+ lastindex);













// Question No#5
// let charc="Pakistani"
// console.log("Charcter at index 3 is: "+charc.charAt(3));







// Question No#6
// let fname=prompt("Enter your First Name")
// let lname=prompt("Enter your Last Name")
// let fullname=fname.concat(lname)
// alert(`Assalam -u- Alikum ${fullname}`)















// Question No#7
// let input="Hyderabad"
// let replaceinput=input.replace("Hyder","Islam")
// console.log(replaceinput);





// Question No#8
// let message = "Ali and Sami are best friends. They play cricket and football together.";
// let repMessage=message.replaceAll("and","&")
// console.log(repMessage);





// Question No#9
// let number="472"
// console.log("Value: "+number);
// console.log("Type:" +typeof(number));
// console.log("Value: "+number);
// console.log("Type:" +typeof+(number));





// Question No#10
// let input=prompt("Enter A input")
// let repinput=input.toUpperCase()
// alert(repinput)







// Question No#11
// let caps=prompt("Enter a word to change in Tittlecase")
// let fixcaps=caps.toLowerCase()
// let tittlecase=fixcaps.charAt(0).toUpperCase().concat(fixcaps.slice(1))
// alert(tittlecase)












// Question No#12
// let num = 35.36;
// console.log("number: "+num);
// let numAsString = num.toString().replace('.', '');
// console.log("String: "+numAsString);


























// Question No#14
// let A = ["cake", "apple pie", "cookie", "chips", "patties"];
// let searchItem = prompt("Enter the item you want to search for: ");
// let lowsearchItem=searchItem.toLowerCase();
// if (A.includes(lowsearchItem)) {
//     alert(`${searchItem} is found in the list.`);
// } else {
//     alert(`${searchItem} is not found in the list.`);
// }




















// Question No#15
// function isValidPassword(password) { 
//     var containsAlphabet = /[a-zA-Z]/.test(password);
//     var containsNumber = /\d/.test(password);
//     var doesNotStartWithNumber = /^[^\d]/.test(password);
//     var isAtLeastSixCharacters = password.length >= 6;
//     return containsAlphabet && containsNumber && doesNotStartWithNumber && isAtLeastSixCharacters;
// }

// var userPassword;

// do {
//     userPassword = prompt("Enter a password that meets the requirements:\n" +
//         "a. Contains alphabets and numbers\n" +
//         "b. Does not start with a number\n" +
//         "c. At least 6 characters long");

//     if (!isValidPassword(userPassword)) {
//         alert("Please enter a valid password that meets the requirements.");
//     }
// } while (!isValidPassword(userPassword));

// alert("Password accepted!");












// Question No#16
// let university = "University of Karachi"
// let result=university.split(" ")
// console.log(result);














// Question No#17
// let input="Pakistan"
// const lastCharacter = input.charAt(input.length -1);
// console.log(lastCharacter);










// Question No#18
// const inputString = "The quick brown fox jumps over the lazy dog ";
// const matches = inputString.match(/the/gi);
// const count = matches ? matches.length : 0
// console.log(`The word "the" appears ${count} times in the given string.`);











// ==================================================Chapter 26 to 30===================================
// Question No#1
// let number=3.45214
// console.log("number: "+number);
// console.log("Round of value: "+Math.round(number));
// console.log("Floor Value: "+Math.floor(number));
// console.log("Ceil Value: "+Math.ceil(number));





// Question No#2
// let number=-3.45214
// console.log("number: "+number);
// console.log("Round of value: "+Math.round(number));
// console.log("Floor Value: "+Math.floor(number));
// console.log("Ceil Value: "+Math.ceil(number));


// Question No#3
// function absoluteValue(number) {
//     if (number < 0) {
//       return -number;
//     } else {
//       return number;
//     }
//   }
//   const inputNumber = -4;
//   const absValue = absoluteValue(inputNumber);
//   console.log(`The absolute value of ${inputNumber} is ${absValue}`);
  


// Question No#4
// let dice_value=Math.floor(Math.random()*6)+1
// console.log("Random Dice Value: "+dice_value);



// Question No#5
// let coin_value=Math.floor(Math.random()*2)+1
// if (coin_value ===2 ) {
//     alert("Random coin value:Heads")
    
// } else {
//     alert("Random coin value:Tails")
// }

// Question No#6
// let randomNumber=Math.floor(Math.random()*100)+1
// console.log(randomNumber);





// Question No#8
// let guess_number=+prompt("Enter a number between  1 to 10")
// let random_number=Math.floor(Math.random()*10)+1
// if (guess_number===random_number) {
//     alert("Congratulations You Have Won")
    
// } else {
//     alert("Please Try Again")
// }




































// ==================================================Chapter 31 to 34===================================

// Question No#1
// let d =new Date();
// console.log(d);






// Question No#2
// let curdate =new Date();
// let monthname=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
// let month=curdate.getMonth();
// console.log(monthname[month]);











// Question No#3
// const currentDate = new Date();
// const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// const currentDayIndex = currentDate.getDay();
// const currentDayName = dayNames[currentDayIndex].slice(0, 3);
// alert("Today is: " + currentDayName);







// Question No#4
// let currentDate = new Date();
// let currentDayIndex = currentDate.getDay();
// if (currentDayIndex === 6 || currentDayIndex === 0) {
//   alert("It's Fun day");
// } else {
//   alert("It's not Fun day");
// }







// Question No#5
// let d= new Date();
// let curdate=d.getDate();
// if (curdate<16) {
//     alert("First fifteen days of the month")
    
// } else {
//     alert("Last days of the month.")
// }

// Question No#7
// let dat=new Date();
// let get_hours=dat.getHours();
// if (get_hours<12) {
//     console.log("ITS AM");
    
// } else {
//     console.log("ITS PM");
    
// }







// Question No#8
// let laterDate = new Date(2020, 11, 31);

// console.log(laterDate);








// Question No#9
// Create a Date object for June 18, 2015 (1st Ramadan)
// const ramadanStartDate = new Date(2015, 5, 18); // Note: Months are zero-based, so June is represented as 5.

// // Create a Date object for the current date
// const currentDate = new Date();

// // Calculate the time difference in milliseconds
// const timeDifference = currentDate - ramadanStartDate;

// // Calculate the number of days passed
// const daysPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

// // Display the number of days passed
// alert(`Number of days passed since 1st Ramadan: ${daysPassed}`);

















// ==================================================Chapter 35 to 38===================================

// Question No#1
// function curdate() {
//     console.log(new Date());
    
// }
// curdate()




// Question No#2
// function greets() {
//   let fname=prompt("Enter your First name ")
//   let lname=prompt("Enter your last name ")
//   alert("Asslam u Alikum "+fname+lname);
    
// }
// greets()

// Question No#3
// function sum(a,b) {

//  let number1=+prompt("Enter a first number")   
//  let number2=+prompt("Enter a Second number")  
//  let result=number1+number2 
//  alert(`The sum of Both number is${result}`);
    
// }
// sum();
