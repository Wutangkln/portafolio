var opcion = prompt("¡Hola! Soy Eva, tu asistente virtual del Servicio al Cliente de Mentel. Estoy aquí para ayudarte en lo que necesides.\nEscribe el número de la opción que buscas: \n1.- Boletas y Pagos \n2.- Señal y llamadas \n3.- Oferta comercial  \n4.- Otras consultas")

//FUNCIONES

switch(opcion){
    case '1':
        op = prompt('Seleccione una opcion \n1.-Ver Boleta \n2.-Pagar cuenta');
        if(op === '1'){
            alert('Haga click aqui para descargar su boleta')
            }
        else if(op === '2'){
            alert('Usted esta siendo transferido. Espere por favor...')
            }
    break

    case '2':
        op = prompt('Seleccione una opcion \n1.-Problemas con la señal \n2.-Problemas con las llamadas');
        if(op === '1'){
            a = prompt('A continuacion escriba su solicitud');
            alert("Estimado usuario, su solicitud: "+ "'"+a+"'"+ " Ha sido ingresada con exito. Pronto sera contactado por uno de nuestros ejecutivos.")
            }
        else if(op === '2'){
            a = prompt('A continuacion escriba su solicitud');
            alert("Estimado usuario, su solicitud: "+ "'"+a+"'"+ " Ha sido ingresada con exito. Pronto sera contactado por uno de nuestros ejecutivos.")

            }
    break;
    
    case '3':
        op = prompt('¡Mentel tiene una oferta comercial acorde a tus necesidades! \nPara conocer mas información y ser asesorado personalmente por un ejecutivo escribe "SI" y un ejecutivo te llamara. De lo contrario ingrese "NO"').toLowerCase();
        if (op === 'si'){
            alert('Un ejecutivo contactara con usted');
        }
        else if(op === 'no'){
            alert('Gracias por preferir nuestros servicios');
        }
    break;
    
    case '4':
        a = prompt('A continuacion escriba su consulta');
        alert("Estimado usuario, su consulta: " + "'" + a + "'" + " Ha sido ingresada con éxito. Pronto será contactado por uno de nuestros ejecutivos." );
    break;

    default:
        alert('La opción ingresada no es válida. Gracias por preferir nuestros servicios')

    break;
}   