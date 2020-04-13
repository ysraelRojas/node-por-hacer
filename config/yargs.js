const argv = require('yargs')
    .command('crear', 'Crear un elemento porhacer', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripcion de la tarea por hacer'
        }
    })
    .command('borrar', 'Elimina una Tarea', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripcion de la tarea por eliminar'
        }
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripcion de la tarea por hacer'
        },
        completado: {
            alias: 'c',
            default: true,
            desc: 'Marca como completado o pendiente una tarea'
        }
    })
    .command('listar', 'Listado de tareas por hacer', {})
    .help()
    .argv;

module.exports = {
    argv
};