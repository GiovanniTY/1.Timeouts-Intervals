// calculate today's date
let today = new Date();

//calculate my date of birth
let myDate = new Date('1997-04-15');

console.log(myDate);

//calculate the difference between my date and today
let difference = today.getTime() - myDate.getTime();

// Convert the difference from milliseconds to days
let passedDays = difference / (1000 * 60 *60 *24 * 365.25);

//Print 
console.log(passedDays);