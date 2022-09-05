const EL = document.querySelector('.ball');
window.addEventListener('click' , function(event){
    EL.style.left = event.clientX + 'px';
    EL.style.top = event.clientY + 'px';

})


let timeout;

function myclick() {
    timeout = setTimeout(alertFunc, 3000);
  }
  
  function alertFunc() {
    alert("Ball!");
  }


