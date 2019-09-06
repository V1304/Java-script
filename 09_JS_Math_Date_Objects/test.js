let msg1 = 'Good Morning';
let reverseString = (str) => {
    let tempString = '';
    for(let i= str.length-1; i >= 0; i--){
        let ch = str.charAt(i);
        tempString += ch;
    }
    return tempString;
};
console.log(`Reverse String : ${reverseString(msg1)}`);
