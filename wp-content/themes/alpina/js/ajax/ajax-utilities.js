// Inicia conexion Ajax
function getObjectXMLHttp() 
{   
    try     
    { 
        connect = new ActiveXObject("Msxml2.XMLHTTP");   
    } 
    catch (e) 
    { 
        try 
        { 
            connect= new ActiveXObject("Microsoft.XMLHTTP"); 
        } 
        catch (E) 
        { 
            connect= false;   
        } 
    }   
    if (!connect && typeof XMLHttpRequest!='undefined') 
    { 
        connect = new XMLHttpRequest(); 
    }   

    return connect ;
} 
  
  
// Envia formulario por Post, sin esperar datos ,solo respuesta ok/nook
function enviarFormularioPost(url,formid,activarDiv,div,msg_pre,msg_pos,activarVisualCarga,divCarga)
{ 
  
    var Formulario = document.getElementById(formid); 
    var longitudFormulario = Formulario.elements.length; 
    var cadenaFormulario = "" 
    var sepCampos 
    sepCampos = "" 
    var nombreControl="";
   
    var salvaNombresRadiosYCheck = new Array(1000); 
    var cuentaRadiosYCheck=0;


    for (var i=0; i < Formulario.elements.length;i++) 
    { 		
        nombreControl= Formulario.elements[i].name; 
        tipoControl=   Formulario.elements[i].type;
		
        if(tipoControl=="text" || tipoControl=="textarea" || tipoControl=="hidden" | tipoControl=="password") 
        {
            cadenaFormulario += sepCampos+Formulario.elements[i].name+'='+encodeURI(Formulario.elements[i].value); 
            sepCampos="&"; 		   		   
        }
        else if(tipoControl=="select-one")
        {
            var max= Formulario.elements[i].length; 
            for (var j=0; j<max; j++) 
            {
                if(Formulario.elements[i].options[j].selected)
                {
                    cadenaFormulario += sepCampos+Formulario.elements[i].name+'='+encodeURI(Formulario.elements[i].options[j].value); 
                    sepCampos="&";
                } 
            }   
        }
        else if(tipoControl=="select-multiple")
        {
            var max= Formulario.elements[i].length;    
            for (var j=0; j<max; j++) 
            {
                Formulario.elements[i].options[j].selected=true
            }   

            for (var j=0; j<max; j++) 
            {
                cadenaFormulario += sepCampos+Formulario.elements[i].name+'='+encodeURI(Formulario.elements[i].options[j].value); 
                sepCampos="&"; 		   
            }  
        }		
        else if(tipoControl=="checkbox")
        {
            //Buscamos el nombre actual del control(Radio o Check box) en el array  si ya se encuentra no debe entrar
            var nombreEncontrado=false;
            for(var zz=0;zz<salvaNombresRadiosYCheck.length;zz++)
            {
                if(salvaNombresRadiosYCheck[zz]==nombreControl)
                {
                    nombreEncontrado=true;
                    break;
                } 
            }		 
	
            if(!nombreEncontrado) 
            {
                var j, a;   
                for(j=0; (a = document.getElementsByName(nombreControl)[j]); j++) 
                {
                    if(a.checked)
                    {
                        cadenaFormulario += sepCampos+Formulario.elements[i].name+'='+encodeURI(a.value); 
                        //alert(Formulario.elements[i].name+'='+document.getElementsByName(nombreControl)[j].value+",i="+i+",j="+j);
                        sepCampos="&";
			  
                        //  Almacenamos en array este nombre de cb y contamos			  
                        salvaNombresRadiosYCheck[cuentaRadiosYCheck]=nombreControl;
                        cuentaRadiosYCheck++;
                    } 
                }   	
            }  
        }
        else if(tipoControl=="radio") 
        {	
            //Buscamos el nombre actual del control(Radio o Check box) en el array  si ya se encuentra no debe entrar
            var nombreEncontrado=false;
            for(var zz=0;zz<salvaNombresRadiosYCheck.length;zz++)
            {
                if(salvaNombresRadiosYCheck[zz]==nombreControl)
                {
                    nombreEncontrado=true;
                    break;
                } 
            }		 

            if(!nombreEncontrado) 
            {
                for(var j=0;j<document.getElementsByName(nombreControl).length;j++)
                {		        
                    if(document.getElementsByName(nombreControl)[j].checked)
                    {
                        cadenaFormulario += sepCampos+Formulario.elements[i].name+'='+encodeURI(document.getElementsByName(nombreControl)[j].value); 
                        sepCampos="&";
				
                        //  Almacenamos en array este nombre de cb y contamos			  
                        salvaNombresRadiosYCheck[cuentaRadiosYCheck]=nombreControl;
                        cuentaRadiosYCheck++;				
                    }
                }		
            }	   
        }			
    } // end for

    fecha= new Date();
    var rnd = fecha.getTime();  

    cadenaFormulario  += sepCampos+"CLEANCACHE="+rnd; 

    var XMLHttpRequestObject = false;
    XMLHttpRequestObject= getObjectXMLHttp();

    XMLHttpRequestObject.open("POST", url, true); 
    XMLHttpRequestObject.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=ISO-8859-1'); 
    XMLHttpRequestObject.onreadystatechange = function () 
    { 
        /* if(activarVisualCarga)
		mostrarCapa(divCarga);   */
   
        if (XMLHttpRequestObject.readyState == 4 && XMLHttpRequestObject.status == 200) 
        { 
    
            var msg= XMLHttpRequestObject.responseText;
	    
            if(msg==1010){
                runSubmit(2);
            }else if(msg==9999){
                document.formConfirmacion.submit();
            }else{
                window.location = "index.php";
            }
	  	  
        /* if(activarDiv)
	  {
         var obj= document.getElementById(div);
         obj.innerHTML ="";
         obj.innerHTML =msg_pre+msg+msg_pos;
	  }
      else
	  {
		 if(msg=="1") 
		 {
			document.formData.nombres.value="";
			document.formData.apellidos.value="";
			document.formData.email.value="@";
			document.formData.telefono.value="";
			document.formData.celular.value="";
			document.formData.num_documento.value="";
			
			document.formData.hijo_nombres.value="";			
			document.formData.hijo_edad.value="";
			deleteAllItems(document.getElementById('destino'));
			
            alert("Los datos han sido enviados correctamente ");			
		 }
		 else if(msg=="2") 	
		 {
		   alert("El Numero de documento ya se encuentra registrado "); 
		 }
		 else 
		 {
		   //alert("Problemas al procesar informaci�n ");    
		 }
	  }
		 
	
      if(activarVisualCarga)
		 ocultarCapa(divCarga);	*/	
        }
     
    }

    //cadenaFormulario = encodeURI(cadenaFormulario);
   
    XMLHttpRequestObject.send(cadenaFormulario); 
  
  
    return false;
   
}


// Envia formulario por Get y devuelve respuesta http a un div si activarDiv=true
function enviarFormularioGet(url,div,activarDiv,msg_pre,msg_pos,activarVisualCarga,divCarga)
{	  
    var XMLHttpRequestObject = false;
    XMLHttpRequestObject= getObjectXMLHttp(); 

    if(XMLHttpRequestObject) 
    {
        if(activarVisualCarga)
            mostrarCapa(divCarga);
		  
        XMLHttpRequestObject.open("GET",url);

        XMLHttpRequestObject.onreadystatechange = function()
        {	  
         
	
            if (XMLHttpRequestObject.readyState == 4 && XMLHttpRequestObject.status == 200) 
            {
           
		  
		   
                var msg= trim(XMLHttpRequestObject.responseText);  
			
                if(activarDiv)
                {
                    var obj= document.getElementById(div);
                    obj.innerHTML ="";
                    obj.innerHTML =msg_pre+msg+msg_pos;
                }
			
                if(activarVisualCarga)
                    ocultarCapa(divCarga);					
			
            }
        }
        XMLHttpRequestObject.send(null);
    }
    else
    {
        alert("Se perdio la conexion con el servidor")
    }   
    return false;
}  





function cargarComboXmlGet(url,id_list_destino,hadHeaderOption,defaultValue,defaultText,flag1)
{	  
    var increment = 0;
    var ajax = false;
         
    ajax = getObjectXMLHttp(); 

    if(ajax) 
    {
        if(flag1==0){
            ajax.open("GET",url);
        }
        var obj = document.getElementById(id_list_destino); 

        obj.length = 0;
	   				 
        if(hadHeaderOption == true)
        { 
            obj.options[0] = new Option(defaultValue,defaultText);  
            increment =1 ;
        }

        if(flag1==0){
            ajax.onreadystatechange = function()
            {	  
					   
                if (ajax.readyState == 4 && ajax.status == 200 ) 
                {
								 
                    var records = ajax.responseXML.getElementsByTagName("records")[0];
	
		 
                    for (loop = 0; loop < records.childNodes.length; loop++) 
                    {
	
                        var record = records.childNodes[loop];
                        var rvalue = records.getElementsByTagName("value")[loop];
                        var rtext = records.getElementsByTagName("text")[loop];
                        var elem1= rvalue.childNodes[0].nodeValue
                        var elem2= rtext.childNodes[0].nodeValue
                        obj.options[loop+increment] = new Option(elem2,elem1); 
                    }
								  
                }
            }
				   
            ajax.send(null);
        }
		
	
              
    }
    else
    {
        alert("Se perdio la conexion con el servidor")
    }   
		
    return false;
}  




