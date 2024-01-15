import Alquiler from "../models/alquiler.model.js";


export const registrarAlquiler = async (req, res) => {

    try {
        const nuevoAlquiler = new Alquiler({
            idAlquiler: req.body.idAlquiler,
            valor: req.body.valor,
            fecha: req.body.fecha,
            meses: req.body.meses,
            descripcion: req.body.descripcion,
            interes: req.body.interes,
            cliente: req.body.cliente,
            articulo: req.body.articulo
        })

        const guadarAlquiler = await nuevoAlquiler.save()

        return res.status(200).json(guadarAlquiler);
    } catch (error) {
        console.error('Error para registrar el alquiler:', error);
        return res.status(500).json({ error: "Error para registrar el alquiler" });
    }
}

export const actualizarAlquiler = async (req, res) => {

    try {
        const id = req.params.id

        const datosActualizados = req.body

        /* const resultado = await Alquiler.updateOne({ idAlquiler: id }, { $set: datosActualizados })
        if (resultado.affectedRows > 0) { */
            return res.status(200).json({ message: "El cliente ha actualizado" })
       /*  } else {
            return res.status(404).json({ message: "No fue posible encontrar al cliente" })
        } */
    } catch (error) {
        console.error('Error al actualizar el alquiler:', error);
        return res.status(500).json({ error: "Error al actualizar el alquiler" });
    }
}


