//need to create event listener for DOMContentLoaded
//need to create event listener for keyinput/onkeyup
//need to capture keyinput and display it in new boxes
//need to capture button submit
//need to change content style depending on button clicked 

document.addEventListener("DOMContentLoaded", e => {
  formInput();
   });

function formInput() {
  
  const inputName1 = document.getElementById('firstName');
  
  inputName1.onkeyup = function(){
    console.log('Hi');
      document.getElementById('name1').innerHTML = inputName1.value;
      
  const inputName2 = document.getElementById('secondName');
  
  inputName2.onkeyup = function(){
    console.log('Second name');
      document.getElementById('name2').innerHTML = inputName2.value;
    };
  
  const inputDate = document.getElementById('date');
  
    inputDate.onkeyup = function(){
      console.log('This is a date');
      document.getElementById('formDate').innerHTML = inputDate.value;   
  };
  const inputLocation = document.getElementById('location');
  
  inputLocation.onkeyup = function(){
    console.log('Location');
      document.getElementById('formLocation').innerHTML = inputLocation.value;
    };
  };
}

document.getElementById('button1').addEventListener('click', function (event) {
  document.getElementById('preview').removeAttribute('class');
  document.getElementById('preview').classList.add('traditional');
});
document.getElementById('button2').addEventListener('click', function (event) {
  document.getElementById('preview').removeAttribute('class');
  document.getElementById('preview').classList.add('adventure');
});
document.getElementById('button3').addEventListener('click', function (event) {
  document.getElementById('preview').removeAttribute('class');
  document.getElementById('preview').classList.add('arty');
  
});
