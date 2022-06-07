

var elInput = document.querySelector('#monto');
if (elInput) {
  var etiqueta = document.querySelector('#etiqueta');
  if (etiqueta) {
    etiqueta.innerHTML = `$ `+ new Intl.NumberFormat().format(elInput.value);
  

    elInput.addEventListener('input', function() {
      etiqueta.innerHTML = `$ `+ new Intl.NumberFormat().format(elInput.value);
      
    }, false);
  }
}

var elInput2 = document.querySelector('#plazo');
if (elInput2) {
  var etiqueta2 = document.querySelector('#etiqueta2');
  if (etiqueta2) {
    etiqueta2.innerHTML = new Intl.NumberFormat().format(elInput2.value)+` cuotas `;
    

    elInput2.addEventListener('input', function() {
      etiqueta2.innerHTML = new Intl.NumberFormat().format(elInput2.value)+` cuotas `;
      
      
    }, false);
  }
}



