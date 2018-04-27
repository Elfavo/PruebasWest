var x = document.getElementById("email").pattern;

onsubmit="return validacion()"
  
valor = document.getElementById("campo").value;
if( valor == null || valor.length == 0 || /^\s+$/.test(valor) ) {
return false;
}