function add (first,second) {
	return first + second;
}

function subtract (first,second) {
	return first-second;
}

function multiply (first,second){
  return first*second;
}

function divide (first,second){
  return first/second;
}

function operate(first,second) {
  add(first,second);
}

function changeOutput(output,value){

  if(isNaN(value)) switch (value) {
    case "C":
      output.textContent="0";
      return;
    case "Back":
      if (output.textContent.length==1) {
        output.textContent="0";
        return;
      }
      output.textContent = output.textContent.slice(0, -1);
      return;
    case ".":
      if(!output.textContent.includes(".")) output.textContent+=".";
      return;
  };

  if (output.textContent=="0") output.textContent="";
  else if (output.textContent.length==17) return;
  output.textContent+=value;
}

let output = document.getElementById('output');

let buttons = document.querySelectorAll("#grid button");
buttons.forEach( (button) => button.addEventListener('click', (e) => changeOutput(output,e.target.value)) );

let zero = document.querySelector(".zero");
zero.addEventListener('click', (e) => changeOutput(output,e.target.value));
