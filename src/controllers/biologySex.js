const { biologySexModel } = require('../models'); 

const getAllBiologySex = async (req, res) => {
  try {
    const biologySexes = await biologySexModel.findAll();
    res.status(200).json(biologySexes);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los sexos biológicos', error });
  }
};

const createBiologySex = async (req, res) => {
  try {
    const { name_biology_sex } = req.body;
    const newBiologySex = await biologySexModel.create({ name_biology_sex });
    res.status(201).json(newBiologySex);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el sexo biológico', error });
  }
};

const updateBiologySex = async (req, res) => {
  try {
    const { id } = req.params;
    const { name_biology_sex } = req.body;

    const biologySex = await biologySexModel.findByPk(id);
    if (!biologySex) {
      return res.status(404).json({ message: 'Sexo biológico no encontrado' });
    }

    biologySex.name_biology_sex = name_biology_sex;
    await biologySex.save();

    res.status(200).json(biologySex);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el sexo biológico', error });
  }
};

const deleteBiologySex = async (req, res) => {
  try {
    const { id } = req.params;

    const biologySex = await biologySexModel.findByPk(id);
    if (!biologySex) {
      return res.status(404).json({ message: 'Sexo biológico no encontrado' });
    }
    await biologySex.destroy();
    res.status(200).json({ message: 'Sexo biológico eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el sexo biológico', error });
  }
};

module.exports = {
  getAllBiologySex,
  createBiologySex,
  updateBiologySex,
  deleteBiologySex,
};
