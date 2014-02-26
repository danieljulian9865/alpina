function runSubmit_formRegistro(opc)  
{

	   
    if (!testBox(document.formRegistro.nombre,true,200,true,true,false,"Ingresa tu nombre correctamente.",false,"",false)) return false; 
    if(document.formRegistro.nombre.value.length<3){
        alert("Ingresa tus nombres correctamente.");
        return false; 
    }
	 
    if(document.formRegistro.nombre.value=="Nombres"){
        alert("Ingresa tus nombres correctamente.");
        return false; 
    }
	 		
    if (!testBox(document.formRegistro.apellido,true,200,true,true,false,"Ingresa tus apellidos correctamente.",false,"",false)) return false;
    if(document.formRegistro.apellido.value.length<3){
        alert("Ingresa tus apellidos correctamente.");
        return false; 
    }
	 
    if(document.formRegistro.apellido.value=="Apellidos"){
        alert("Ingresa tus apellidos correctamente.");
        return false; 
    }		
	 
    if (!testBox(document.formRegistro.documento,true,200,true,false,false,"Ingresa el n"+String.fromCharCode(250)+"mero de tu cedula correctamente",false,"",false)) return false;
    if(document.formRegistro.documento.value.length<4){
        alert("Ingresa el n"+String.fromCharCode(250)+"mero de tu cedula correctamente");
        return false; 
    }
		 
    if(document.formRegistro.documento.value =="Nro Doc de Identidad"){
        alert("Ingresa el n"+String.fromCharCode(250)+"mero de tu cedula correctamente");
        return false; 
    }
     
     
    if (!testBox(document.formRegistro.telefono,true,200,true,false,true,"Ingresa tu n"+String.fromCharCode(250)+"mero telef"+String.fromCharCode(243)+"nico correctamente.",false,"",false)) return false; 
	  
    if(document.formRegistro.telefono.value =="Teléfono"){
        alert("Ingresa el n"+String.fromCharCode(250)+"mero telef"+String.fromCharCode(243)+"nico correctamente");
        return false; 
    }
	  
	  
    if(document.formRegistro.telefono.value.length<4){
        alert("Ingresa tu n"+String.fromCharCode(250)+"mero telef"+String.fromCharCode(243)+"nico correctamente.");
        return false; 
    }
	
        
    if (!testBox(document.formRegistro.celular,true,200,true,false,true,"Ingresa tu n"+String.fromCharCode(250)+"mero celular correctamente.",false,"",false)) return false; 
	  
    if(document.formRegistro.celular.value =="Celular"){
        alert("Ingresa el n"+String.fromCharCode(250)+" celular correctamente");
        return false; 
    }
	  
	  
    if(document.formRegistro.celular.value.length<4){
        alert("Ingresa tu n"+String.fromCharCode(250)+"mero telef"+String.fromCharCode(243)+"nico correctamente.");
        return false; 
    } 
     
     
    if (!testBox(document.formRegistro.email,true,200,true,false,false,"Ingresa la direcci"+String.fromCharCode(243)+"n de tu correo electr"+String.fromCharCode(243)+"nico correctamente.",false,"",true)) return false;
    
    if(document.formRegistro.email.value=="E-mail"){
        alert("Ingresa la direccion de tu correo electronico.");
        return false; 
    }
	 
   	 
		 
		 
   
	 
    if (!testList(document.formRegistro.pais,"Selecciona tu país",'0')) return false;
    if (!testList(document.formRegistro.estado,"Selecciona tu Estado",'0')) return false; 	
    if (!testList(document.formRegistro.ciudad,"Selecciona tu Ciudad",'0')) return false; 	
    if (!testList(document.formRegistro.sugerencias,"Seleccion tu Sugerencia",'0')) return false; 	
	 
    
    if(document.formRegistro.comentarios.value==""){
        alert("Ingresa tu comentario.");
        return false; 
    }
    
    if(document.formRegistro.politicap.checked != true){
     alert("Debes Aceptar Términos y Condiciones.");
        return false; 
    }
	
	
    document.formRegistro.submit();	
//confirmarFormulario();
//return is_confirmed;    
}
