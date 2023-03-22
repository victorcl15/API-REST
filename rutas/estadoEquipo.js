const { Router } = require('express')
const { createEstadoEquipos, getEstadoEquipos, getEstadoEquiposId, EditarEstadoEquipos, 
    deleteEstadoEquipos } = require('../controllers/estadoEquipo')
const app = require("../app")
const notFound = require("../middleware/notFound");
const handleErrors = require("../middleware/handleErrors");


const router = Router()


// crear
router.post('/', createEstadoEquipos)


// editar
//router.put('/', updateTipoEquipo)
router.put('/:id', EditarEstadoEquipos)

// listar
router.get('/mostrar', getEstadoEquipos)

router.get('/:id', getEstadoEquiposId)

//Eliminar
router.delete('/:id', deleteEstadoEquipos)


//app.use(notFound)
//app.use(handleErrors)



module.exports = router