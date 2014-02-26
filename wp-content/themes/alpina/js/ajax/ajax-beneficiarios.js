///////////////////////////////////////////////

function objetoAjax(){
 var xmlhttp=false;
  try{
   xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
  }catch(e){
   try {
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
   }catch(E){
    xmlhttp = false;
   }
  }
  if (!xmlhttp && typeof XMLHttpRequest!='undefined') {
   xmlhttp = new XMLHttpRequest();
  }
  return xmlhttp;
}

function setBeneficiarios(tarjetas){
	document.formRegistro.valor_total.value='0';
	document.formRegistro.base_iva.value='0';
	//alert(tarjetas)
	 ajax = objetoAjax(); 
	 ajax.open("GET", "include/form_beneficiarios.php@tarjetas="+tarjetas);
	 
 	ajax.onreadystatechange=function() {	 
	 if (ajax.readyState == 4)    {
		// alert(ajax.responseText);
		
		 document.getElementById('formBeneficiarios').innerHTML = ajax.responseText;
		}
    }
 ajax.send(null);			   
}
