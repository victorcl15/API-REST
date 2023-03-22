const estadoEquipo = require('../models/estadoEquipo')
const {request, response} = require('express')


/**
 * Creación
 */
const createEstadoEquipos = (req = request,
    res = response) => {
    
        const newEstadoEquipo = new estadoEquipo ({
    
             name: req.body.name,
             estado: req.body.estado || false,
             date: new Date(),
             dateUp: new Date()
         })
         
         newEstadoEquipo.save().then(savedEquipo => {
             res.send(savedEquipo)
         })
         


}


/**
 * Edición
 */

const EditarEstadoEquipos = (req = request,
    res = response, next) => {
    
        const {id} = req.params

        const equipo = req.body
        const newEstadoEquipoInfo = {
            name: equipo.name,
            estado: equipo.estado || false,
        }
        estadoEquipo.findByIdAndUpdate(id, newEstadoEquipoInfo, { new: true})
        .then(result => {
            res.json(result)
        })
}


/**
 * Listar todos
 */
const getEstadoEquipos = (req = request,
    res = response) => {
    
        estadoEquipo.find({}).then(equipos => {
            res.json(equipos)
        })
}

const getEstadoEquiposId = (req = request,
    res = response, next) => {
    
        const {id} = req.params
        //const student = students.find( c => c.id === parseInt(req.params.id))
        estadoEquipo.findById(id).then(equipo => {
            if (equipo){ return res.json(equipo) 
            } else { res.status(404).send("Equipo no encontrado");
        
        }}).catch(error => {
            next(error)
        })
    }

    /**
 * Eliminar
 */
    const deleteEstadoEquipos = (req = request,
        res = response, next) => {
        
            const {id} = req.params
    
    estadoEquipo.findByIdAndDelete(id).then(resultado => {
        res.status(204).end()
    }).catch(error => next(error))
    }
    

module.exports = {createEstadoEquipos, getEstadoEquipos, getEstadoEquiposId, EditarEstadoEquipos,
     deleteEstadoEquipos}