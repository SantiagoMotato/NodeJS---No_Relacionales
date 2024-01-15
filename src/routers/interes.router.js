import {Router} from "express"
import { registrarInteres, eliminarInteres, listarInteresesCliente, listarTotalInteresesPorMesYAnio, listarInteresPendientePorAlquiler } from "../controllers/interes.controller.js"
import { validarToken } from "../controllers/sa.validator.controller.js";
const route = Router()


route.get('/listar/:clienteId',listarInteresesCliente)
route.get('/total-intereses',listarTotalInteresesPorMesYAnio);
route.post('/registrar', registrarInteres)
route.delete('/eliminar/:id',validarToken, eliminarInteres)
route.get('/interes-pendiente/:alquilerId', listarInteresPendientePorAlquiler);


export default route;
