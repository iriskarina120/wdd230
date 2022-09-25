const options ={day: 'numeric', month: 'numeric', year:'numeric', hour: 'numeric', minute:'numeric', second:'numeric'}
document.getElementById('modified').textContent = new Date().toLocaleDateString('en-US', options) 
var date = new Date();
var anio= date.getFullYear();
document.querySelector('#year').textContent = anio