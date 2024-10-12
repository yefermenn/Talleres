class tituloVerde extends HTMLElement{
	constructor(){
		super();
		}
		connectedCallback(){
		this.innerHTML="<p> hola </p>";
		this.style.color="green";
		this.style.fontSize="20";
		this.style.fontFamily="Arial Black";
	}
}
window.customElements.define("titulo-verde",tituloVerde);