let reverseString = (str) => {
    let tempString = '';
    for(let i= str.length-1; i >= 0; i--){
        let ch = str.charAt(i);
        tempString += ch;
    }
    return tempString;
};
// Change Text
let changeText = () => {
    // get the value from textbox
    let textEntered = document.querySelector('#input-field').value;
    let spanTag = document.querySelector('#span');
    // add to span Tag
    spanTag.innerText = reverseString(textEntered);
};

// Change the Message
let changeMessage = (message , color) => {
    let h2Tag = document.querySelector('#msg');
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