const imagenes=['paleta.png','img2.png','img3.png'];

let indice=0;

const imagenElemento=document.getElementById('miImagen');
console.log(imagenElemento);
const prevBoton=document.getElementById('miPrevBoton');
console.log(prevBoton);
const sigBoton=document.getElementById('miSigBoton');
console.log(sigBoton);
function actualizarImagen(){
    imagenElemento.src=imagenes[indice];
}
prevBoton.addEventListener('click',function(){
    indice=(indice-1+imagenes.length) % imagenes.length;
    actualizarImagen();
});
sigBoton.addEventListener('click',function(){
    indice=(indice+1+imagenes.length) % imagenes.length;
    actualizarImagen();
});
actualizarImagen();