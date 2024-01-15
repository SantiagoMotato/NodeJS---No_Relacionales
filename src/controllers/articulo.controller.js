import Articulo from "../models/articulo.model.js"


export const registrarArticulo = async (req, res) => {

    try {
        const nuevoArticulo = new Articulo({
            idArticulo: req.body.idArticulo,
            nombre: req.body.nombre,
            tipo: req.body.tipo,
            estado: req.body.estado
        })
    
        const articuloGuardado = await nuevoArticulo.save();
    
        return res.status(200).json(articuloGuardado);
    } catch (error) {
        console.error('Error al registrar el articulo', error);
        return res.status(500).json({ error: "Error al registrar el articulo" });
      }
}


export const actualizarArticulo = async(req, res) => {
    try {
        const id = req.params.id
      const datosActualizados = req.body

      const resultado  = await Cliente.updateOne({idArticulo : id}, {$set : datosActualizados})
     /*  if (resultado.affectedRows > 0) { */
        return res.status(200).json({message: "EL articulo ha sido actualizado"})
     /*  } else {
        return res.status(404).json({message: "No fue posible encontrar el articulo"})
      } */


    } catch (error) {
        console.error('Error al registrar cliente:', error);
        return res.status(500).json({ error: "Error al actualizar el articulo" });
      
    }
}



