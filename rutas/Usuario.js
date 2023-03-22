const { Router } = require('express')
const { createUsuario, getUsuario, getUsuarioId, editarUsuario, 
    deleteUsuario } = require('../controllers/Usuario')
const app = require("../app")
const notFound = require("../middleware/notFound");
const handleErrors = require("../middleware/handleErrors");


const router = Router()


// crear
router.post('/', createUsuario)


// editar
//router.put('/', updateTipoEquipo)
router.put('/:id', editarUsuario)

// listar
router.get('/mostrar', getUsuario)

router.get('/:id', getUsuarioId)

//Eliminar
router.delete('/:id', deleteUsuario)


//app.use(notFound)
//app.use(handleErrors)



module.exports = router