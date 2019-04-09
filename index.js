 document.addEventListener("DOMContentLoaded", e => {
  formInput()
   })

function formInput() {
  
  const inputName1 = document.getElementById('firstName');
  
  inputName1.onkeyup = function(){
    console.log('Hi');
      document.getElementById('name1').innerHTML = inputName1.value;
      
  const inputName2 = document.getElementById('secondName');
  
  inputName2.onkeyup = function(){
    console.log('Second name');
      document.getElementById('name2').innerHTML = inputName2.value;
    }
    
  const inputLast = document.getElementById('lastName');
  
  inputLast.onkeyup = function(){
    console.log('Last name');
      document.getElementById('formLastName').innerHTML = inputLast.value;
    }
  
  const inputDate = document.getElementById('date');
  
    inputDate.onkeyup = function(){
      console.log('This is a date');
      document.getElementById('formDate').innerHTML = inputDate.value;   
  }
  const inputLocation = document.getElementById('location');
  
  inputLocation.onkeyup = function(){
    console.log('Location');
      document.getElementById('formLocation').innerHTML = inputLocation.value;
    }
  }
}

document.getElementById('button1').addEventListener('click', function (event) {
  document.getElementById('preview').removeAttribute('class');
  document.getElementById('preview').classList.add('classic');
});
document.getElementById('button2').addEventListener('click', function (event) {
  document.getElementById('preview').removeAttribute('class');
  document.getElementById('preview').classList.add('nautical');
});
document.getElementById('button3').addEventListener('click', function (event) {
  document.getElementById('preview').removeAttribute('class');
  document.getElementById('preview').classList.add('jun');
  
});
