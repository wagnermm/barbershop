
// Owl Carousel
$(document).ready(function() {

    $('.owl-carousel').owlCarousel()
    
    $('.featured-item a').addClass('btn btn-light stretch-link')
    
})

// Form Validate
var form = document.getElementById('form')
form.onsubmit = function() {
    let name = document.getElementById('name').value
    if(name == "") {
        document.getElementById('messageName').innerHTML = "Informe seu nome"
        return false
    } else {
        document.getElementById('messageName').innerHTML = ""
    }
}
function validaEmail(elemento){
    elemento.addEventListener('focusout', function() {
        const emailValid = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?/i
        if(this.value.match(emailValid)){
            document.querySelector('#messageEmail').innerHTML = ""
            document.querySelector('#btn').disabled = false
            return false
        } else {
            document.querySelector('#messageEmail').innerHTML = "Digite um e-mail válido"
            document.querySelector('#btn').disabled = true
        }
    })
  }
  let fieldEmail = document.querySelectorAll('input#email')
  for( let emFoco of fieldEmail) {
      validaEmail(emFoco)
  }

  function validaPhone(elemento){
    elemento.addEventListener('focusout', function() {
        const phoneValid = /[0-9]/
        if(this.value.match(phoneValid)) {
            document.querySelector('#messagePhone').innerHTML = ""
            document.querySelector('#btn').disabled = false
            return false
        } else {
            document.querySelector('#messagePhone').innerHTML = "Digite um telefone válido"
            document.querySelector('#btn').disabled = true
        }
    })
  }
  let fieldPhone = document.querySelectorAll('input#telefone')
  for(let emFoco of fieldPhone) {
    validaPhone(emFoco)
  }