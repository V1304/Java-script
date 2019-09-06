// the whole document object
let val = document;
console.log(val);

// head Section
val = document.head;
console.log(val);

// Title of Document
val = document.title;
console.log(val);

// body section
val = document.body;
console.log(val);

// Access Elements
let aTag = document.querySelector('nav a');
aTag.innerText = 'DOM Manipulation Examples';
console.log(aTag);

// ID Selector
let h1Tag = document.querySelector('#msg');
console.log(h1Tag);

// Access the Inner Text
let theMessage = h1Tag.innerText;
console.log(theMessage);

// Change the Inner Text
h1Tag.innerText = 'Good Night';

// Change the Styles
h1Tag.style.backgroundColor = 'limegreen';
h1Tag.style.textAlign = 'center';
h1Tag.style.color = 'white';
h1Tag.style.padding = '15px';
h1Tag.style.boxShadow = '0 0 10px black';

// Changes to Image
let imageTag = document.querySelector('#laptop-image');
imageTag.style.width = '400px';
imageTag.style.height = '250px';
imageTag.style.display = 'block';
imageTag.style.margin = 'auto';
imageTag.style.borderRadius = '10px';
imageTag.style.boxShadow = '0 0 10px limegreen';

// Change the Address of Image
imageTag.setAttribute('src','../img/image4.jpeg');

console.dir(document);