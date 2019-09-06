// If Else condition Example
let time = -200;
if(time >= 0 && time <= 12){
    console.log('Good Morning');
}
else if(time > 12 && time <= 17){
    console.log('Good Afternoon');
}
else if(time > 17 && time <= 23){
    console.log('Good Evening');
}
else{
    console.log('Enter Proper Time Dude');
}

// Switch Statement
let month = 1;
let message = 'The Current Month is : ';
switch(month){
    case 1:
        message += `JANUARY`;
        break;
    case 2:
        message += `FEBRUARY`;
        break;
    case 3:
        message += `MARCH`;
        break;
    case 4:
        message += `APRIL`;
        break;
    case 5:
        message += `MAY`;
        break;
    case 6:
        message += `JUNE`;
        break;
    case 7:
        message += `JULY`;
        break;
    case 8:
        message += `AUGUST`;
        break;
    case 9:
        message += `SEPTEMBER`;
        break;
    case 10:
        message += `OCTOBER`;
        break;
    case 11:
        message += `NOVEMBER`;
        break;
    case 12:
        message += `DECEMBER`;
        break;
    default:
        message += `NO MATCH`;
        break;
}
console.log(message);

// For Loop to print the 0 - 10 diff 1
let output = '';
for(let i=0; i<=10; i++){
    if(i <= 9){
        output +=  `${i} , `;
    }
    else{
        output +=  `${i}`;
    }
}
console.log(output);

// For Loop to print 20 - 0 diff 2
output = '';
for(let i = 20; i>= 0; i -= 2){
    if(i > 0){
        output +=  `${i} , `;
    }
    else{
        output +=  `${i}`;
    }
}
console.log(output);

// For Loop to print the stars
let theNumber = 5;
output = '';
for(let i =1 ; i<= theNumber ; i++){
    for(let j =1; j<= i; j++){
        output += '*';
    }
    output += '\n';
}
console.log(output);

// for Loop to print same numbers in triangle
theNumber = 5;
output = '';
for(let i=1; i<=theNumber; i++){
    for(let j =1; j <= i; j++){
        output += i;
    }
    output += '\n';
}
console.log(output);

// for Loop to print numbers in triangle
theNumber = 9;
output = '';
for(let i=1; i<=theNumber; i++){
    for(let j =1; j <= i; j++){
        output += j;
    }
    output += '\n';
}
console.log(output);

// for Loop to print same numbers in reverse triangle
theNumber = 9;
output = '';
for(let i=theNumber; i>=1; i--){
    for(let j =1; j <= i; j++){
        output += i;
    }
    output += '\n';
}
console.log(output);

// for Loop to print numbers in reverse triangle
theNumber = 9;
output = '';
for(let i=theNumber; i>=1; i--){
    for(let j =1; j <= i; j++){
        output += j;
    }
    output += '\n';
}
console.log(output);

// While Loop
console.log('----------------------------- While Loop ------------------------');

// while loop to print 0 - 10 diff 1
output = '';
let i=0;
while(i<=10){
    if(i <= 9){
        output +=  `${i} , `;
    }
    else{
        output +=  `${i}`;
    }
    i++;
}
console.log(output);

// While Loop to print 20 - 0 diff 2
output = '';
i = 20;
while(i>= 0){
    if(i > 0){
        output +=  `${i} , `;
    }
    else{
        output +=  `${i}`;
    }
    i -= 2;
}
console.log(output);

// While Loop to print the stars
theNumber = 5;
output = '';
i = 1;
while(i<= theNumber){
    let j =1;
    while(j<= i){
        output += '*';
        j++;
    }
    output += '\n';
    i++;
}
console.log(output);

// for Loop to print same numbers in triangle
theNumber = 5;
output = '';
i =1;
while(i<=theNumber){
    let j =1;
    while(j <= i){
        output += i;
        j++;
    }
    output += '\n';
    i++;
}
console.log(output);

// for Loop to print numbers in triangle
theNumber = 9;
output = '';
i = 1;
while(i<=theNumber){
    let j =1;
    while(j <= i){
        output += j;
        j++;
    }
    output += '\n';
    i++;
}
console.log(output);

// for Loop to print same numbers in reverse triangle
theNumber = 9;
output = '';
i = theNumber;
while(i>=1){
    let j =1;
    while(j <= i){
        output += i;
        j++;
    }
    output += '\n';
    i--;
}
console.log(output);

// for Loop to print numbers in reverse triangle
theNumber = 9;
output = '';
i=theNumber;
while(i>=1){
    let j =1;
    while(j <= i){
        output += j;
        j++;
    }
    output += '\n';
    i--;
}
console.log(output);