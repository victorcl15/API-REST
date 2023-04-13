const Usuario = require('../models/Usuario')
const {request, response} = require('express')


/**
 * Creación
 */
const createUsuario = (req = request,
    res = response) => {
    
        const newUsuario = new Usuario ({
    
             name: req.body.name,
             email: req.body.email,
             estado: req.body.estado || true,
             date: new Date(),
             dateUp: new Date()
         })
         
         newUsuario.save().then(savedUsuario => {
             res.send(savedUsuario)
         })
         


}


/**
 * Edición
 */

const editarUsuario = (req = request,
    res = response, next) => {
    
        const {id} = req.params

        const usuario = req.body
        const newUsuarioInfo = {
            name: usuario.name,
            email: usuario.email,
            estado: usuario.estado || false,
        }
        Usuario.findByIdAndUpdate(id, newUsuarioInfo, { new: true})
        .then(result => {
            res.json(result)
        })
}


/**
 * Listar todos
 */
const getUsuario = (req = request,
    res = response) => {
    
        Usuario.find({}).then(equipos => {
            res.json(equipos)
        })
}

const getUsuarioId = (req = request,
    res = response, next) => {
    
        const {id} = req.params
        //const student = students.find( c => c.id === parseInt(req.params.id))
        Usuario.findById(id).then(equipo => {
            if (equipo){ return res.json(equipo) 
            } else { res.status(404).send("Equipo no encontrado");
        
        }}).catch(error => {
            next(error)
        })
    }

    /**
 * Eliminar
 */
    const deleteUsuario = (req = request,
        res = response, next) => {
        
            const {id} = req.params
    
    Usuario.findByIdAndDelete(id).then(resultado => {
        res.status(204).end()
    }).catch(error => next(error))
    }
    

module.exports = {createUsuario, getUsuario, getUsuarioId, editarUsuario, deleteUsuario}