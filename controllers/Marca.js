const Marca = require('../models/Marca')
const {request, response} = require('express')


/**
 * Creación
 */
const createMarca = (req = request,
    res = response) => {
    
        const newMarca = new Marca ({
    
             name: req.body.name,
             estado: req.body.estado || false,
             date: new Date(),
             dateUp: new Date()
         })
         
         newMarca.save().then(savedMarca => {
             res.send(savedMarca)
         })
         


}


/**
 * Edición
 */

const editarMarca = (req = request,
    res = response, next) => {
    
        const {id} = req.params

        const marca = req.body
        const newMarcaInfo = {
            name: marca.name,
            estado: marca.estado || false,
        }
        Marca.findByIdAndUpdate(id, newMarcaInfo, { new: true})
        .then(result => {
            res.json(result)
        })
}


/**
 * Listar todos
 */
const getMarca = (req = request,
    res = response) => {
    
        Marca.find({}).then(equipos => {
            res.json(equipos)
        })
}

const getMarcaId = (req = request,
    res = response, next) => {
    
        const {id} = req.params
        //const student = students.find( c => c.id === parseInt(req.params.id))
        Marca.findById(id).then(equipo => {
            if (equipo){ return res.json(equipo) 
            } else { res.status(404).send("Equipo no encontrado");
        
        }}).catch(error => {
            next(error)
        })
    }

    /**
 * Eliminar
 */
    const deleteMarca = (req = request,
        res = response, next) => {
        
            const {id} = req.params
    
    Marca.findByIdAndDelete(id).then(resultado => {
        res.status(204).end()
    }).catch(error => next(error))
    }
    

module.exports = {createMarca, getMarca, getMarcaId, editarMarca, deleteMarca}