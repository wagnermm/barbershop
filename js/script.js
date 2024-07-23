// Menu Mobile
var openMenu = document.querySelector('.btn-mobile').addEventListener('click', function() {
    document.querySelector('.nav-mobile').style.visibility="visible"
})
var closeMenu = document.querySelector('.close').addEventListener('click', function() {
    document.querySelector('.nav-mobile').style.visibility="hidden"
})

// Owl Carousel
$(document).ready(function() {

    $('.owl-carousel').owlCarousel({
        items: 4,
        loop: true,
        nav: true,
        margin: 10,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            480: {
                items: 2,
                nav: true
            },
            600: {
                items: 3,
                nav: true
            },
            1024: {
                items: 4,
                nav: true
            }
        }
    });
    
    
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

function validaName(elemento) {
    elemento.addEventListener('focusout', function() {
        const nameValid = /^[a-z]/i
        if(this.value.match(nameValid)){
            document.querySelector('#messageName').innerHTML = ""
            document.querySelector('#btn').disabled = false
            return false
        } else {
            document.querySelector('#messageName').innerHTML = "Digite um nome válido"
            document.querySelector('#btn').disabled = true
        }
    })
}
let fieldName = document.querySelectorAll('input#name')
  for( let emFoco of fieldName) {
      validaName(emFoco)
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

  window.addEventListener('scroll', function() {
    const scrollButton = document.querySelector('.scroll-top');
    if (window.scrollY > 100) {
        scrollButton.classList.add('open');
    } else {
        scrollButton.classList.remove('open');
    }
});