const { Router } = require('express')
const { createTipoEquipo, getTipoEquipos, getTipodeEquiposId, EditarTipodeEquipo, 
    deleteTipoEquipos } = require('../controllers/tipoEquipo')
const app = require("../app")
const notFound = require("../middleware/notFound");
const handleErrors = require("../middleware/handleErrors");
const {validarRolAdmin } = require("../middleware/validar-rol-admin")
const {validarJWT} = require("../middleware/validarjwt")
const { validationResult, check } = require("express-validator");

const router = Router()


// crear
router.post('/', [
    check("name", "invalid.name").not().isEmpty(),
    
    validarJWT, validarRolAdmin
    
], createTipoEquipo)


// editar
//router.put('/', updateTipoEquipo)
router.put('/:id', EditarTipodeEquipo)

// listar
router.get('/mostrar', [validarJWT], getTipoEquipos)

router.get('/:id', getTipodeEquiposId)

//Eliminar
router.delete('/:id', deleteTipoEquipos)


//app.use(notFound)
//app.use(handleErrors)



module.exports = router