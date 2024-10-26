class buscarElprofebarrientos extends HTMLElement {
    constructor() {
      // Always call super first in constructor
      super();
    }
    connectedCallback() {
      // Create a shadow root
      const shadow = this.attachShadow({ mode: "open" });
      // Create caja de texto
      const buscarcaja = document.createElement("input");
      buscarcaja.type = 'text';
      buscarcaja.name = 'buscar';
      buscarcaja.id = 'buscar';
  
      buscarcaja.placeholder = 'Burcar con ChatGPT';
      buscarcaja.setAttribute("class", "buscarcaja buscarcaja:focus");
      const style = document.createElement("style");
      style.textContent = `
        .buscarcaja {       
         
        width: 100%;           /* Ancho de la caja de texto */
    padding: 10px;         /* Espaciado interno */
    border: 2px solid #007bff; /* Color y grosor del borde */
    border-radius: 20px;   /* Esquinas redondeadas */
    outline: none;         /* Quitar el contorno al hacer clic */
    transition: border-color 0.3s; /* Transición suave para el color del borde */
  
        }
          .buscarcaja:focus {
    border-color: #CD5C5C;  /* Color del borde al enfocar */
  }
       
      `;
// Attach the created elements to the shadow dom
shadow.appendChild(style);   
shadow.appendChild(buscarcaja);

}
}
class titulosElprofebarrientos extends HTMLElement{
    constructor(){
       super();
            }
   // este metodo activa el uso del componente 
connectedCallback(){    
  let shadowRoot = this.attachShadow({mode: 'open'});
  shadowRoot.innerHTML = `
  <style>
    div {      
  background-color: green;
  border-radius: 8px;
  box-shadow: 0 8px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 100%; 
  font-size: 1.0em;
  color: #ffffff;
  margin: 0 0 20px;
  text-align: center;
  font-weight:bold;
  font-family:arial;
    }
  </style>
   <div>Derechos reservados El profe barrientos</div>
  `

}}

class FechaHoy extends HTMLElement {
    constructor() {
      super();  
      let shadowRoot = this.attachShadow({mode: 'open'});

      shadowRoot.innerHTML = `
      <style>
        div {
          font-size: 20px;
          color: blue;
        }
      </style>
    <div>${this.fecha()}</div>`;

    }
  
    fecha() {
      var today = new Date();
      var dia = String(today.getDate());
      var mes = String(today.getMonth() + 1); //January is 0!
      var ano = today.getFullYear();
  
     return `${dia}/${mes}/${ano}`;
    }
  }

class HoraHoy extends HTMLElement{
    constructor(){
        super();
        let shadowRoot = this.attachShadow({mode: 'open'})

        shadowRoot.innerHTML=`
        <style>
        div {
          font-size: 20px;
          color: blue;
        }
      </style>
      <div>bienvenidos son las ${this.hora()}</div>`;
    }
    hora(){
        let fecha = new Date();
        let hora= fecha.getHours();
        let emis;
        if(hora>=12){
            emis="pm";
            hora=hora-12;
        }else{
            emis="am";
        }
        return `${hora} ${emis}`
    }

}
class irChat extends HTMLElement{
    constructor(){
        super();
        let shadowRoot = this.attachShadow({mode: 'open'});

        shadowRoot.innerHTML=`
        <style>
        div {
          font-size: 20px;
          color: blue;
        }
      </style>
      <div><a href="https://chatgpt.com/">ir a chat gpt</a></div>`;
    }
}
class irCarrito extends HTMLElement{
    constructor(){
        super();
        const shadow = this.attachShadow({mode:'open'});

        const link = document.createElement('link');
        link.setAttribute('rel', 'stylesheet');
        link.setAttribute('href', 'https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css');


        const boton = document.createElement("a");
        boton.href="#";

        boton.setAttribute("class", "btn btn-primary");

        boton.textContent="ir al carrito";

        shadow.appendChild(boton);
        shadow.appendChild(link);
    }
}
customElements.define("ir-carrito", irCarrito);
customElements.define("ir-chatgpt",irChat)
customElements.define("hora-hoy",HoraHoy);
customElements.define("fecha-hoy",FechaHoy)
customElements.define("titulos-elprofebarrientos", titulosElprofebarrientos);
customElements.define("buscar-chatgpt",buscarElprofebarrientos);

//como construir una caja de texto tipo password, luego introducirla dentro de un formulario, la clave va a ser el componente.
//como integrar al formulario
//2- integrar un componente con tailwind