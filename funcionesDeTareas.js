const fs = require("fs"); // Requiero el modulo Fyle System

let tareas = require("./tareas.json")

let guardar = (dato) => fs.writeFileSync('./tareas.json',JSON.stringify(dato,null,4),'utf-8') // Guardo en una variable el archivo de tareas.json y lo convierto en un dato array

let archivoTareas = {
    leerJason: tareas,
    // Método de array forEach()
    listarForEach: function() {
        tareas.forEach((tarea,i) => {
            console.log(`${i+1}. ${tarea.titulo} - ${tarea.estado}`);
        });
    
    },
    crearTareas: (titulo,estado) => {
        let tarea = {
            titulo,
            estado
        }
        tareas.push(tarea)
        guardar(tareas)
        return console.log(`- ${tarea.titulo} - ${tarea.estado}`);
    },
    
    // Método de array filter()

    filtrarPorEstado: (estado) => {
        let tareasFiltradas = tareas.filter ((tarea) => tarea.estado.toLowerCase() === estado.toLowerCase())
    
        tareasFiltradas.forEach((tarea,i) => {
            return console.log(`${i+1}. ${tarea.titulo} - ${tarea.estado}`);
        });
    },
    nombreDeUsuario: (accion) => {
        let usuario = [
            {nombre: "Yesica Isabela", apellido: "Fiorentino"}

        ];
        
        // Método de array map()
    
        let nombreCompleto = usuario.map(function(elemento){
            return `Nombre: ${elemento.nombre} ${elemento.apellido}`; 

        });
        for (let i = 0; i < nombreCompleto.length; i++)
        console.log(nombreCompleto[i]);
        
        // Objeto Date
        
        let miFecha = new Date(1991,1,2);
        let anio = miFecha.getFullYear()
        let mes = miFecha.getMonth()
        let dia = miFecha.getDate()
        let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
        
        console.log(`Fecha de nacimiento: ${miFecha.toLocaleDateString()}`);

        // Spread Operator
        
        datosExtras("Nacionalidad: Argentina ", "Edad: 31", "Email: jesicafiore1@gmail.com", "Comision: 17", "Profesor: Cristian Elias" )
        
        function datosExtras(...datosAdicionales){
            for(let i = 0; i < datosAdicionales.length; i++)
            console.log(datosAdicionales[i]);
        }

        
    }
    
}

module.exports = archivoTareas