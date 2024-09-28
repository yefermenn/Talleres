// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()

  function esNumero(){
    var info = document.getElementById('documento').value;
    var feed= document.getElementById('docFeed')
    if(!typeof info === 'number'){
      feed.value= "Debe ser un número!";
      info.classList.add('is-invalid');
    }
    alert("ola")
  }

  /*tarea: se debe verificar que el usuario es mayor a 15 años para poder inscribirse, los codigos promocionales se deben inscribir una sola vez
  cuando seleccione el evento mostrar el precio del evento 
  corregir validaciones

  */