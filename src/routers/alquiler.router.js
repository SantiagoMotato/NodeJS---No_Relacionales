import {Router} from "express"
import { registrarAlquiler, actualizarAlquiler } from "../controllers/alquiler.controller.js"
import { validarToken } from "../controllers/sa.validator.controller.js"

const route = Router()


route.post('/registrar', registrarAlquiler)
route.put('/actualizar/:id', validarToken, actualizarAlquiler)




export default route;

