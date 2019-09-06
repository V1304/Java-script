let reverseString = (str) => {
    let tempString = '';
    for(let i= str.length-1; i >= 0; i--){
        let ch = str.charAt(i);
        tempString += ch;
    }
    return tempString;
};
// Change Text
let inputField = document.querySelector('#input-field');
inputField.addEventListener('keyup',function() {
    changeText();
});
let changeText = () => {
    // get the value from textbox
    let textEntered = document.querySelector('#input-field').value;
    let spanTag = document.querySelector('#span');
    // add to span Tag
    spanTag.innerText = reverseString(textEntered);
};

// Change the Message
let changeMessage = (message , color) => {
    let h2Tag = document.querySelector('#msg1');
    h2Tag.innerText = message;
    h2Tag.style.background = `linear-gradient(45deg,black,${color})`;
    h2Tag.style.padding = '15px';
    h2Tag.style.color = 'white';
    h2Tag.style.boxShadow = '0 0 10px black';
};

// Change Image
let changeImage = (imageName) => {
    let number = imageName.charAt(5);
    let imgTag = document.querySelector('#laptop-image');
    imgTag.setAttribute('src',`../img/${imageName}`);
    imgTag.style.borderRadius = `${number}0px`;
};

// Display wish Message with Event Listeners
// Change the Message
let changeMessageNew = (message , color) => {
    let h2Tag = document.querySelector('#msg2');
    h2Tag.innerText = message;
    h2Tag.style.background = `linear-gradient(45deg,black,${color})`;
    h2Tag.style.padding = '15px';
    h2Tag.style.color = 'white';
    h2Tag.style.boxShadow = '0 0 10px black';
};

// Good Morning Button
let gmButton = document.querySelector('#gm-btn');
gmButton.addEventListener('click',function() {
    changeMessageNew('Good Morning','limegreen');
});

// Good Afternoon Button
let gaButton = document.querySelector('#ga-btn');
gaButton.addEventListener('click',function() {
    changeMessageNew('Good Afternoon','orange');
});

// Good Evening Button
let geButton = document.querySelector('#ge-btn');
geButton.addEventListener('click',function() {
    changeMessageNew('Good Evening','blueviolet');
});

// Good Night Button
let gnButton = document.querySelector('#gn-btn');
gnButton.addEventListener('click',function() {
    changeMessageNew('Good Night','red');
});

