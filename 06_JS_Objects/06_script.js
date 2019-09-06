// Create an Empty Object
let fridge = {};
fridge.veg = 'Tomotos';
fridge.eggs = 20;
fridge.chocolates = 10;
console.log(fridge);

// Object Literal
let mobile = {
    color : 'Silver',
    brand : 'Apple',
    price : 35000,
    isInsured : false
};
console.log(mobile);

// Access the properties of an Object
console.log(`Color : ${mobile.color}`);

// Add properties to an Object
console.log(mobile);
mobile.memory = '16GB';
console.log(mobile);

// Access the non Existing Property
console.log(mobile.ramSize);

// Access the properties with dot , [] notation
let laptop = {
    brand : 'hp',
    color : 'white',
    price : 45000,
    ramSize : '12GB'
};
console.log(laptop);

// Color with dot notation
console.log(`Color : ${laptop.color}`);

// Color with [] notation
console.log(`Color : ${laptop['color']}`);

// Usage of [] notation over dot notation for dynamic properties
let propName = 'brand';

console.log(laptop[propName]); // hp
console.log(laptop.propName); // undefined

// Nested Object
let student = {
    name : 'Arjun Reddy',
    age : 23,
    course : 'MBBS',
    college : 'Osmania University',
    address : {
        street : 'Jubilee Hills',
        city : 'Hyderabad',
        state : 'TS'
    }
};
console.log(student);

// Access the nested Object
console.log(student.address);

// Add Property to the nested Object
student.address.country = 'India';
console.log(student.address);
