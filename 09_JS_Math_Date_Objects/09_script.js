/* ------------------------------------------------------------------
                            Math Object Examples
 -------------------------------------------------------------------- */

// Math PI
let piValue = Math.PI;
console.log(`Pi Value : ${piValue}`);

// Math sqrt
let sqrt = Math.sqrt(144);
console.log(`sqrt of 144 is : ${sqrt}`);

// find the min of 4 numbers
let min = Math.min(987,9,64,6,16,5616,4,84,1,678,87);
console.log(`Min : ${min}`);

// find the Max of 4 numbers
let max = Math.max(987,9,64,6,16,5616,4,84,1,678,87);
console.log(`Max : ${max}`);

// find the 'x' to the power of 'y' value, ex: 2^4
let pow = Math.pow(2,5);
console.log(`2 ^ 5 is : ${pow}`);

// generate the random numbers from 0 to 100
let random = Math.round(Math.random() * 100000);
console.log(random);

/* For more details about Math Object, please have a look at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
*/

/* ------------------------------------------------------------------
                            Date Object Examples
 -------------------------------------------------------------------- */

// get today's date
let date = new Date();
console.log(date);

// Get proper date
let currentDate = new Date().toLocaleDateString();
console.log(currentDate);

// Get the Current Timee
let currentTime = new Date().toLocaleTimeString();
console.log(currentTime);

// get full day of the week using switch statement
let day = new Date().getDay();
let fullDay = 'Today is : ';
switch(day){
    case 0:
        fullDay += 'SUNDAY';
        break;
    case 1:
        fullDay += 'MONDAY';
        break;
    case 2:
        fullDay += 'TUESDAY';
        break;
    case 3:
        fullDay += 'WEDNESDAY';
        break;
    case 4:
        fullDay += 'THURSDAY';
        break;
    case 5:
        fullDay += 'FRIDAY';
        break;
    case 6:
        fullDay += 'SATURDAY';
        break;
    default:
        fullDay += 'NO - DAY';
        break;
}
console.log(fullDay);

// Display a Digital Clock on the web page


/* For More Details about Date() please have a look at
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
*/

/* ------------------------------------------------------------------
                            Number Object Examples
 -------------------------------------------------------------------- */
let minNumber = Number.MIN_SAFE_INTEGER;
console.log(minNumber);

let maxNumber = Number.MAX_SAFE_INTEGER;
console.log(maxNumber);

let num1 = 1000.55;
console.log(`Value : ${num1} Type : ${typeof num1}`);

let str = num1.toString();
console.log(`Value : ${str} Type : ${typeof str}`);

let num2 = Number.parseFloat(str);
console.log(`Value : ${num2} Type : ${typeof num2}`);


/* ------------------------------------------------------------------
                            String Object Examples
 -------------------------------------------------------------------- */
let message = "Good Morning";

// Uppercase
console.log(message.toUpperCase());

// lowercase
console.log(message.toLowerCase());

// length
console.log(message.length);

// substring
console.log(message.substr(0,4)); // Good

// substring
console.log(message.substr(5)); // Morning

// char At
console.log(message.charAt(0)); // G

// char Code At
console.log(message.charCodeAt(0)); // 71

// trim
let msg = ' Good ';
if(msg.trim() === 'Good'){
    console.log('true');
}
else{
    console.log('false');
}

/*
   -----------------------------------------------------------------
                           Example Programs
   ------------------------------------------------------------------
 */

// Example 1: count the no of o's in the given string
let theMessage = 'Good MOrning';
let countZeros = (str) => {
    let count = 0;
    for(let i=0; i<str.length ; i++){
        let ch = str.charAt(i);
        if(ch === 'o' || ch === 'O'){
            count++;
        }
    }
    return count;
};
console.log(`No of o's in String : ${countZeros(theMessage)}`);

// Example 2: reverse String
theMessage = 'Good Morning';
let reverseString = (str) => {
    let tempString = '';
    for(let i= str.length-1; i >= 0; i--){
        let ch = str.charAt(i);
        tempString += ch;
    }
    return tempString;
};
console.log(`Reverse String : ${reverseString(theMessage)}`);

// Example 3 : the Given is palindrome or Not
theMessage = 'ABA';
let isPalindrome = (str) => {
    return str === reverseString(str);
};
console.log(`${theMessage} is Palindrome ? ${isPalindrome(theMessage)}`);

// Example 4: convert to Palindrome String
theMessage = 'BAD';
let convertToPalindrome = (str) => {
    return str + reverseString(str.substr(0,str.length-1));
};
console.log(`${theMessage} => ${convertToPalindrome(theMessage)}`);

// Example 5 : Triangle One String
theMessage = 'VISHAL KANNAUJIYA';
let triangleOne = (str) => {
    let tempString = '';
    for(let i=1; i<= str.length; i++){
        tempString += `${str.substr(0,i)} \n`;
    }
    return tempString;
};
console.log(triangleOne(theMessage));

// Example 5 : Triangle Two String
let addSpace = (number) => {
    let tempSpace = '';
    for(let i=1; i<=number; i++){
        tempSpace += ' ';
    }
    return tempSpace;
};
theMessage = 'VISHAL KUMAR';
let triangleTwo = (str) => {
    let tempString = '';
    for(let i=0; i<=str.length-1; i++){
        tempString += `${addSpace(i)}${str.substr(i)} \n`;
    }
    return tempString;
};
console.log(triangleTwo(theMessage));

// Example 5 : Triangle Three String
theMessage = 'VISHAL KUMAR';
let triangleThree = (str) => {
    let tempString = '';
    for(let i=str.length; i >= 1; i--){
        tempString += `${str.substr(0,i)} \n`;
    }
    return tempString;
};
console.log(triangleThree(theMessage));





            // 1) Triangle Four
// Example 5 : Triangle four String
// let addSpace = (number) => {
//     let tempSpace = '';
//     for(let i=1; i<=number; i++){
//         tempSpace += ' ';
//     }
//     return tempSpace;
// };
theMessage = 'VISHAL KUMAR';
let trianglefour = (str) => {
    let tempString = '';
    for(let i=str.length; i >= 1; i--){
        tempString += `${addSpace(i)}${str.substr(i)} \n`;
    }
    return tempString;
};
console.log(trianglefour(theMessage));

    // 2) 123 -> ONE TWO THREE
let th = ['','thousand','million', 'billion','trillion'];
let dg = ['zero','one','two','three','four', 'five','six','seven','eight','nine'];
let tn = ['ten','eleven','twelve','thirteen', 'fourteen','fifteen','sixteen', 'seventeen','eighteen','nineteen'];
let tw = ['twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];

function toWords(s) {
    s = s.toString();
    s = s.replace(/[\, ]/g,'');
    if (s != parseFloat(s)) return 'not a number';
    let x = s.indexOf('.');
    if (x == -1)
        x = s.length;
    if (x > 15)
        return 'too big';
    let n = s.split('');
    let str = '';
    let sk = 0;
    for (var i=0;   i < x;  i++) {
        if ((x-i)%3==2) {
            if (n[i] == '1') {
                str += tn[Number(n[i+1])] + ' ';
                i++;
                sk=1;
            } else if (n[i]!=0) {
                str += tw[n[i]-2] + ' ';
                sk=1;
            }
        } else if (n[i]!=0) { // 0235
            str += dg[n[i]] +' ';
            if ((x-i)%3==0) str += 'hundred ';
            sk=1;
        }
        if ((x-i)%3==1) {
            if (sk)
                str += th[(x-i-1)/3] + ' ';
            sk=0;
        }
    }

    if (x != s.length) {
        var y = s.length;
        str += 'point ';
        for (var i=x+1; i<y; i++)
            str += dg[n[i]] +' ';
    }
    return str.replace(/\s+/g,' ');
}
/*
3) 123 -> ONE TWO THREE TWO ONE
4) 123 -> THREE TWO ONE
5) 54321
   5432
   54
   5
6) 123454321
    2345432
     34543
      454
       5
 */