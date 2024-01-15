import {Router} from "express"

import { registrarArticulo } from "../controllers/articulo.controller.js"

const route = Router()

route.post('/registrar', registrarArticulo)

export default route;
