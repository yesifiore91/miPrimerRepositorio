let process = require("process") // Requiero process para poder pasar datos a la terminal
let archivo = require('./funcionesDeTareas')


let accion = process.argv[2] // Guardo dentro de process a partir de la posicion 2
let accion2 = process.argv[3] // Guardo dentro de process a partir de la posicion 3
let accion3 = process.argv[4] // Guardo dentro de process a partir de la posicion 4

// console.log(tareas);

switch (accion) {
    case 'listar':
    console.log('\nListado de tareas');  
    console.log('--------------------');  
    archivo.listarForEach()
        break;
        case 'crear':
            console.log('\nTu tarea fue creada con éxito');
            console.log('-----------------------------');
            archivo.crearTareas(accion2,accion3)
            break;
            case 'filtrar':
            console.log(`Las tareas con estado ${accion2} son`);
            console.log('------------------------------------');
            archivo.filtrarPorEstado(accion2)
            break;
            case 'usuario':
            console.log(`Datos de usuario`);
            console.log('------------------------------------------');
            archivo.nombreDeUsuario()
            break;
        case undefined:
        console.log('---------------------------------------');
        console.log('Atención - Tienes que pasar una acción');
        console.log('Las acciones disponibles son: ');
        console.log('- listar');
        console.log('- crear');
        console.log('- filtrar');
        console.log('- usuario')
        console.log('----------------------------------------');
        break;

    default:
        console.log('No entiendo qué quieres hacer');
        break;
}