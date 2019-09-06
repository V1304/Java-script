let student = {
    name : 'Rajan',
    age : 23,
    course : 'Engineering',
    address : {
        city : 'Hyderabad',
        state : 'TS',
        country : 'India'
    }
};

// Destructuring
let { name , age , course } = student;

console.log(`NAME : ${name}
             AGE : ${age}
             COURSE : ${course}`);

// Destructuring
let {city , state , country } = student.address;
console.log(`CITY : ${city}
             STATE : ${state}
             COUNTRY : ${country} `);
