  function validaSoloNumeros(s)
  {
    for(var i = 0; i < s.length; i++) 
    { 
      var c = s.charAt(i);
 	  // Si encuentra una letra automaticamente retorna false
      if ((c != '1') && (c != '2') && (c != '3') && (c != '4')&& (c != '5')&& (c != '6')&& (c != '7')&& (c != '8')&& (c != '9')&& (c != '0')&& (c != '-')&& (c != '.')) 
         return false;    
    }
     return true;	// solo contiene letras  con otros caracteres dif a numero		
  }
  
  function validaSoloLetras(s)
  {
    for(var i = 0; i < s.length; i++) 
    { 
      var c = s.charAt(i);
	  // Si encuentra un numero automaticamente retorna false
      if ((c == '1') || (c == '2') || (c == '3') || (c == '4') || (c == '5') || (c == '6') || (c == '7') || (c == '8') || (c == '9') || (c == '0')) 
         return false;    
    }
     return true;	// solo contiene letras  con otros caracteres dif a numero		
  }  

  // control  que valida campos
  function testBox(control,ValidaDim,MaxDim,ValidaBlancos,ValidaSoloLetras,ValidaSoloNumeros,NombreCtrl,CompPalabraNoPermitida,PalabraNoPermitida,ValidaEmail) 
  {    
	Ctrl = control;
	//Ctrl.value = trim(Ctrl.value);	

    if (ValidaDim)
    {   
   	   if (Ctrl.value.length >MaxDim )
       {
  	    validatePrompt (Ctrl, NombreCtrl+" Max("+MaxDim+")caracteres");
	    return (false);
	   }
    }

    if (ValidaBlancos)
    {   
       if(Ctrl.value == "")
	   {
         validatePrompt (Ctrl, ""+NombreCtrl);
	     return (false);	
	   }		
     }

    if (ValidaSoloLetras)
    {   
	  if ( validaSoloLetras(Ctrl.value) == false)
      {
       validatePrompt (Ctrl,"  No se admiten caracteres num"+String.fromCharCode(233)+"ricos.");
       return (false);  
      } 		
	  else
 	    return (true);   
    }

    if (ValidaSoloNumeros)
    {   
	  if ( validaSoloNumeros(Ctrl.value) == false)
      {
       validatePrompt (Ctrl, "No se admiten caracteres alfab"+String.fromCharCode(233)+"ticos.");
       return (false);  
      } 		
	  else
 	    return (true);   
    }

    if (CompPalabraNoPermitida)
    {   
	  if ( Ctrl.value == PalabraNoPermitida)
      {
		  
       validatePrompt (Ctrl, " Ingresa un valor valido");
       return (false);  
      } 		
	  else
 	    return (true);   
    }

    if (ValidaEmail)
    {   
       if (Ctrl.value.indexOf ('@', 0) == -1 || Ctrl.value.indexOf ('.', 0) == -1) 
	   {
		  validatePrompt (Ctrl, "Ingresa la direcci"+String.fromCharCode(243)+"n de tu correo electr"+String.fromCharCode(243)+"nico correctamente.")
		  return (false);
	   } 
    }

 	return (true);
  }



  //  valida que en un grupo de radio buttons por lo menos uno este activo
 function testRadioButton(control,nombreGrupoRadioButtons)
 {
   var i ;
   Ctrl = control;
   var entro=false;
   
    for (i=0;i<Ctrl.length;i++)
	{ 
       if (Ctrl[i].checked) 
	   {
	      entro=true;		  
          break; 		  
	   }
    } 
	
	if (!entro)  
	{
	  alert("Seleccionar como minimo una opci"+String.fromCharCode(243)+"n en "+nombreGrupoRadioButtons);
	  //Ctrl.focus();
	  return false;	
      //validatePrompt (Ctrl, "Favor seleccionar como mínimo una opcion en "+nombreGrupoRadioButtons)
	}
	else
	  return true;		
	
    //document.bgColor = document.fcolores.colorin[i].value  
 }

 //  valida que en un grupo de check Box por lo menos uno este activo
 function testCheckBox(divName,nombreGrupoChekList) 
 {
   var i, a;
   var entro=false;
   
   for(i=0; (a = document.getElementsByName(divName)[i]); i++) 
   {
   
      if (a.checked) 
	   {
	      entro=true;		  
          break; 		  
	   }  
      
    }   	
	
	if (!entro)  
	{
	  alert("Seleccionar como minimo una opci"+String.fromCharCode(243)+"n en "+nombreGrupoChekList);
	  return false;	
	}
	else
	  return true;			
	  	
 }
 
 function testList(idControl,nombreControl,palabraaComparar)
 {
	 var valueSel=idControl.options[idControl.selectedIndex].value;
	 //  si el valor elejido de la lista es igual al pasado msg de error
     if (valueSel==palabraaComparar) 	 
	 {
          validatePrompt (idControl, nombreControl)
		  return (false);		 
	 }
     return (true);
 } 

 function validatePrompt (Ctrl, PromptStr) 
 {
	alert (PromptStr)
	Ctrl.value="";
	Ctrl.focus();
	return;
 }  
 
 
 
 
 function resetThisForm(idForm)
 {
   var Formulario = document.getElementById(idForm); 
   var longitudFormulario = Formulario.elements.length; 

   var nombreControl="";   
   var tipoControl=null;

   for (var i=0; i < Formulario.elements.length;i++) 
   { 		
        nombreControl= Formulario.elements[i].name; 
        tipoControl=   Formulario.elements[i].type;		
		
		if(tipoControl=="text" || tipoControl=="textarea")
		{
  	      Formulario.elements[i].value="";
		}
		else if(tipoControl=="select-one")
		{
             var max= Formulario.elements[i].length; 
             for (var j=0; j<max; j++) 
             {
               Formulario.elements[i].options[j].selected=false;
             }   
             Formulario.elements[i].options[0].selected=true;			 
		}
		else if(tipoControl=="select-multiple")
		{
            Formulario.elements[i].length=0; 
		}		
		else if(tipoControl=="checkbox")
		{
          var j, a;   
          for(j=0; (a = document.getElementsByName(nombreControl)[j]); j++) 
          {
            a.checked=false;      
          }   	
		}
		else if(tipoControl=="radio")
		{
	       for(var j=0;j<document.getElementsByName(nombreControl).length;j++)
		   {		        
			    document.getElementsByName(nombreControl)[j].checked=false;
		   }		
		}			
    } // end for
 } // end function


