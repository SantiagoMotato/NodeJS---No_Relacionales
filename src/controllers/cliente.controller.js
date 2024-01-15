import Cliente from "../models/cliente.model.js";

export const listarCliente = async (req, res) => {
  try {
    const clientes = await Cliente.find();
    /* if (clientes.length > 0) { */
      return res.status(200).json(clientes);
    /* } else {
      return res.status(404).json({ message: "No fue posible encontrar a los clientes" });
    } */
  } catch (error) {
    console.error('Error para listar los clientes:', error);
    return res.status(500).json({ error: "Error para listar los clientes" });
  }
};

export const registrarCliente = async (req, res) => {
  try {
    const nuevoCliente = new Cliente({
      identificacion: req.body.identificacion,
      nombres: req.body.nombres,
      direccion: req.body.direccion,
      telefono: req.body.telefono,
      fecha_nac: req.body.fecha_nac,
    });

    const clienteGuardado = await nuevoCliente.save();

    return res.status(200).json(clienteGuardado);
  } catch (error) {
    console.error('Error para registrar al cliente:', error);
    return res.status(500).json({ error: "Error para registrar al cliente" });
  }
};

export const actualizarCliente = async(req, res) => {
  try {
    const id = req.params.id

    const datosActualizados = req.body

    const resultado  = await Cliente.updateOne({identificacion : id}, {$set : datosActualizados})
    /* if (resultado.affectedRows > 0) { */
      return res.status(200).json({message: "El cliente ha sido actualizado"})
    /* } else {
      return res.status(404).json({message: "No fue posible encontrar el cliente"})
    } */

    
  }catch (error) {
    console.error('Error para registrar el cliente:', error);
    return res.status(500).json({ error: "Error! No se puede actualizar el cliente" });
  }
}

export const eliminarCliente = async(req, res) => {
  try {
    const id = req.params.id

    const resultado  = await Cliente.deleteOne({identificacion : id});
    /* console.log(resultado);
    if (resultado.affectedRows > 0) { */
      return res.status(200).json({message: "El cliente ha sido eliminado con exito!"})
   /*  } else {
      return res.status(200).json({message: "No fue posible encontrar al cliente!"})
    } */

    
  }catch (error) {
    console.error('Error al registrar el cliente:', error);
    return res.status(500).json({ error: "Error al eliminar el cliente" + error });
  }
}