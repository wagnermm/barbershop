
// Owl Carousel
$(document).ready(function() {

    $('.owl-carousel').owlCarousel();
    
    $('.featured-item a').addClass('btn btn-light stretch-link');
    
})

// Form Validate
var form = document.getElementById('form');
form.onsubmit = function() {
    let name = document.getElementById('name').value;
    if(name == "") {
        document.getElementById('messageNome').innerHTML = "Informe seu nome"
        return false
    } else {
        document.getElementById('messageNome').innerHTML = ""
    }
}
function validaEmail(elemento){

    elemento.addEventListener('focusout', function() {

        const emailValido = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?/i;

        if(this.value.match(emailValido)){
            document.querySelector('#messageEmail').innerHTML = "";
            document.querySelector('#btn').disabled = false;
            return false;
        } else {
            document.querySelector('#messageEmail').innerHTML = "Padrão incorreto";
            document.querySelector('#btn').disabled = true;
        };
  
    });
  }
  let campoEmail = document.querySelectorAll('input#email');
  for( let emFoco of campoEmail) {
      validaEmail(emFoco);
  }