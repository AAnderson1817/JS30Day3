const inputs = document.querySelectorAll('.controls input'); //Sets a constant 'inputs' equal to any input with the class of 'controls'.


function handleUpdate(){
  const suffix = this.dataset.sizing || ''; //Set a useful variable "suffix" equal to the data-sizing value.
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix); //Because our CSS variables rest in :root, we reference the document. Then, we use the setProperty method and target this.name using ES6, hence the backticks.
}


inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate)); //Loop through each input and add event listeners for changes and/or movement of the blur/spacing bars.
