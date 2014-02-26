function traer_estados(){

    var valueSel = document.formRegistro.pais.options[document.formRegistro.pais.selectedIndex].value;	
	
       
        
    if(valueSel=='Colombia' || valueSel=='0'){ 
		  
        var  url ="../include/comboXML.php?nombrecampoValue=id_departamento&nombreCampoText=nombre&nombreTabla=geo_estados&tipoId=int&nombreId=id_pais&id="+valueSel;
        var id_list_destino = "estado";
        var hadHeaderOption = true;
        var  defaultText= "0";
        var defaultValue = "Selecciona tu Estado";  
        var defaultValueC = "Selecciona tu Ciudad";
        if(valueSel==0){  
            cargarComboXmlGet(url,id_list_destino,hadHeaderOption,defaultValue,defaultText,1);

        }else{

            cargarComboXmlGet(url,id_list_destino,hadHeaderOption,defaultValue,defaultText,0);
        }
		
        var valueSelE = document.formRegistro.estado.options[document.formRegistro.estado.selectedIndex].value;
        var id_list_destinoC = "ciudad";
        cargarComboXmlGet(url,id_list_destinoC,hadHeaderOption,defaultValueC,defaultText,1);	 
		
		
    }else{
        

	
        /*document.formRegistro.estado.options[0] = new Option( "Otro", 10000 );
		document.formRegistro.ciudad.options[0] = new Option( "Otro", 10000 );*/
        var valueSel = document.formRegistro.pais.options[document.formRegistro.pais.selectedIndex].value;	
        var valueSelE = document.formRegistro.estado.options[document.formRegistro.estado.selectedIndex].value;
        var id_list_destino = "estado";
        var id_list_destinoC = "ciudad";
        var hadHeaderOption = true;
        var  defaultText= "10000";
        var defaultValue = "Otro";
        var url="";
        cargarComboXmlGet(url,id_list_destino,hadHeaderOption,defaultValue,defaultText,1);
        cargarComboXmlGet(url,id_list_destinoC,hadHeaderOption,defaultValue,defaultText,1);		 
	
    }
	
}

function traer_ciudades(){

    var valueSel = document.formRegistro.estado.options[document.formRegistro.estado.selectedIndex].value;	   
    var  url ="../include/comboXML.php?nombrecampoValue=id_ciudad&nombreCampoText=nombre&nombreTabla=geo_ciudades&tipoId=int&nombreId=id_estados&id="+valueSel;
    var id_list_destino = "ciudad";
    var hadHeaderOption = true;
    var  defaultText= "0";
    var defaultValue = "Selecciona";
	   
    cargarComboXmlGet(url,id_list_destino,hadHeaderOption,defaultValue,defaultText,0);
	
}

function validarNumero(field){

    num = field.value;
    num = num.toString().replace(/\$|\./g,'');
    if(isNaN(num))
        num = "0";
    sign = (num == (num = Math.abs(num)));
    num = Math.floor(num*100+0.50000000001);
    cents = num%100;
    num = Math.floor(num/100).toString();
    if(cents<10)
        cents = "0" + cents;
    for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++)
        num = num.substring(0,num.length-(4*i+3))+'.'+num.substring(num.length-(4*i+3));
    field.value = num;
    setValor(num);
}

function validarNumeroTotal(field){

    num = field.value;
    num = num.toString().replace(/\$|\./g,'');
    if(isNaN(num))
        num = "0";
    sign = (num == (num = Math.abs(num)));
    num = Math.floor(num*100+0.50000000001);
    cents = num%100;
    num = Math.floor(num/100).toString();
    if(cents<10)
        cents = "0" + cents;
    for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++)
        num = num.substring(0,num.length-(4*i+3))+'.'+num.substring(num.length-(4*i+3));
    field.value = num;

}

function unformatNumber(num) {
	
    return num.replace(/([^0-9\,\-])/g,'')*1;
} 

function setValor(num){
    var num_temp =0;
	
    if (document.formRegistro.tarjetas.selectedIndex>0 || document.formRegistro.tarjetasUsuario.value>0){
        if(document.formRegistro.tarjetas.selectedIndex>0){
            tarjetas=document.formRegistro.tarjetas.selectedIndex;
        }
        else if(document.formRegistro.tarjetasUsuario.value>0){
            tarjetas=document.formRegistro.tarjetasUsuario.value;
        }
        for(i=1;i<=tarjetas;i++){
            num=document.formRegistro["valor_ben"+i].value;
            num_temp  = num_temp + parseInt(unformatNumber(num));
		
		
        }
    }
	
    document.formRegistro.valor_total.value=num_temp;
    validarNumeroTotal(document.formRegistro.valor_total);
    document.formRegistro.base_iva.value=document.formRegistro.valor_total.value;	
    document.formRegistro.valor_total_txt.value=num_temp;
    validarNumeroTotal(document.formRegistro.valor_total_txt);
    document.formRegistro.base_iva_txt.value=document.formRegistro.valor_total_txt.value;
}

function comparaCedula(field){
    if (document.formRegistro.tarjetas.selectedIndex>0){
        for(i=1;i<=document.formRegistro.tarjetas.selectedIndex;i++){
            num=document.formRegistro["cedula_ben"+i].value;
            if(field.name!=document.formRegistro["cedula_ben"+i].name && field.value!=''){
			
                if(num==field.value ){
                    field.focus();				
                    alert("Ingresa un beneficiario con una cedula diferente");
                    field.value='';
                }
            }
        }
    }
}

function confirmarFormulario(){
    //alert("confirmacion")
    var Formulario = document.getElementById('formRegistro'); 
    var longitudFormulario = Formulario.elements.length; 

    var nombreControl="";   
    var tipoControl=null;

    for (var i=0; i < Formulario.elements.length;i++) 
    { 		
        nombreControl= Formulario.elements[i].name; 
        tipoControl=   Formulario.elements[i].type;		
		
        Formulario.elements[i].disabled="disabled";
			
	 
    }
	
}

function val_Num(evt){
    //asignamos el valor de la tecla a keynum
    if(window.event){// IE
        keynum = evt.keyCode;
    }else{
        keynum = evt.which;
    }
    //comprobamos si se encuentra en el rango
    //alert(keynum)
    if(keynum>47 && keynum<58){
        return true;
    }else if(keynum==0 || keynum==44 || keynum==8)
    {
        return true;
    }else{
        return false;
    }
}

function verify_email(){
    //alert(document.getElementById('email').value+" - "+document.formRegistro.email_confirmar.value);
    if(	document.getElementById('email').value != document.formRegistro.email_confirmar.value){
        document.formRegistro.email_confirmar.value='';
        alert("Verifica la direcci"+String.fromCharCode(243)+"n de tu correo electr"+String.fromCharCode(243)+"nico");
        return false;
    }
	
}
function validar(e) {
    tecla = (document.all)?e.keyCode:e.which;
    if(tecla==86 && e.ctrlKey)
        return false;
}


/// Inabilitar clic derecho
/*document.oncontextmenu = function() {
    return false
}
function right(e) {
    var msg = "Prohibido usar Click Derecho !!! ";
    if (navigator.appName == 'Netscape' && e.which == 3) {
        // alert(msg); //- Si no quieres asustar a tu usuario entonces quita esta linea...
        return false;
    }
    else if (navigator.appName == 'Microsoft Internet Explorer' && event.button==2) {
        //alert(msg); //- Si no quieres asustar al usuario que utiliza IE,  entonces quita esta linea...
        //- Aunque realmente se lo merezca...
        return false;
    }
    return true;
}
document.onmousedown = right;*/

