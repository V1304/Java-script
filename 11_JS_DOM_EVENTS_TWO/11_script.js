// Change Event for Select box
let selectBox = document.querySelector('#select-box');
let spanElement = document.querySelector('#selected-option');
selectBox.addEventListener('change',function() {
    let selectedValue = selectBox.value;
    spanElement.innerText = selectedValue;
});

// Change Event for Check box
let passwordBox = document.querySelector('#password-box');
let checkBox = document.querySelector('#check-box');
checkBox.addEventListener('change',function() {
  let theAttribute = passwordBox.getAttribute('type');
      if(theAttribute === 'password'){
      passwordBox.setAttribute('type','text');
  }
  else{
      passwordBox.setAttribute('type','password');
  }
});

// Change Event for Range Selection
let rangeElement = document.querySelector('#range-input');
let rangeValueElement = document.querySelector('#range-value');
rangeElement.addEventListener('change',function() {
   let rangeValue = rangeElement.value;
   rangeValueElement.innerText = rangeValue;
});

// Keyup event for Text Area
let textAreaElement = document.querySelector('#text-area');
let charCountElement = document.querySelector('#char-count');
let charCount = Number.parseInt(textAreaElement.getAttribute('maxlength'));
textAreaElement.addEventListener('keyup',function() {
   let textEnteredLength = textAreaElement.value.length;
    charCountElement.innerText = charCount - textEnteredLength;
});

// Inner HTML
let colors = ['White','black','orange','purple','red','blue'];
let colorSelectBox = document.querySelector('#color-select');
let options = `<option>Select a Color</option>`;
for(let color of colors){
    options += `<option>${color.toUpperCase()}</option> \n`;
}
colorSelectBox.innerHTML = options;