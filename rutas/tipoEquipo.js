const { Router } = require('express')
const { createTipoEquipo, getTipoEquipos, getTipodeEquiposId, EditarTipodeEquipo, 
    deleteTipoEquipos } = require('../controllers/tipoEquipo')
const app = require("../app")
const notFound = require("../middleware/notFound");
const handleErrors = require("../middleware/handleErrors");


const router = Router()


// crear
router.post('/', createTipoEquipo)


// editar
//router.put('/', updateTipoEquipo)
router.put('/:id', EditarTipodeEquipo)

// listar
router.get('/mostrar', getTipoEquipos)

router.get('/:id', getTipodeEquiposId)

//Eliminar
router.delete('/:id', deleteTipoEquipos)


//app.use(notFound)
//app.use(handleErrors)



module.exports = router