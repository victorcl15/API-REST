const { Router } = require('express')
const { createInventario, getInventarios, getInventarioId, EditarInventario, 
    deleteInventario } = require('../controllers/Inventario')
const app = require("../app")
const notFound = require("../middleware/notFound");
const handleErrors = require("../middleware/handleErrors");


const router = Router()


// crear
router.post('/', createInventario)


// editar
//router.put('/', updateTipoInventario)
router.put('/:id', EditarInventario)

// listar
router.get('/mostrar', getInventarios)

router.get('/:id', getInventarioId)

//Eliminar
router.delete('/:id', deleteInventario)


//app.use(notFound)
//app.use(handleErrors)



module.exports = router