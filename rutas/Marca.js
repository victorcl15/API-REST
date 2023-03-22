const { Router } = require('express')
const { createMarca, getMarca, getMarcaId, editarMarca, 
    deleteMarca } = require('../controllers/Marca')
const app = require("../app")
const notFound = require("../middleware/notFound");
const handleErrors = require("../middleware/handleErrors");



const router = Router()


// crear
router.post('/', createMarca)


// editar
//router.put('/', updateTipoEquipo)
router.put('/:id', editarMarca)

// listar
router.get('/mostrar', getMarca)

router.get('/:id', getMarcaId)

//Eliminar
router.delete('/:id', deleteMarca)


//app.use(notFound)
//app.use(handleErrors)



module.exports = router