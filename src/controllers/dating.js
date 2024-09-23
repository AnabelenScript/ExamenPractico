const { datingModel } = require('../models');

const getAllDating = async (req, res) => {
  try {
    const datings = await datingModel.findAll();
    res.status(200).json(datings);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las citas', error });
  }
};

const createDating = async (req, res) => {
  try {
    const { id_pet_dating, id_offer_dating, date_dating, time_dating } = req.body;

    const newDating = await datingModel.create({
      id_pet_dating,
      id_offer_dating,
      date_dating,
      time_dating,
    });

    res.status(201).json(newDating);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear la cita', error });
  }
};

const updateDating = async (req, res) => {
  try {
    const { id } = req.params;
    const { id_pet_dating, id_offer_dating, date_dating, time_dating } = req.body;

    const dating = await datingModel.findByPk(id);
    if (!dating) {
      return res.status(404).json({ message: 'Cita no encontrada' });
    }

    dating.id_pet_dating = id_pet_dating;
    dating.id_offer_dating = id_offer_dating;
    dating.date_dating = date_dating;
    dating.time_dating = time_dating;

    await dating.save();
    res.status(200).json(dating);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar la cita', error });
  }
};
const deleteDating = async (req, res) => {
  try {
    const { id } = req.params;

    const dating = await datingModel.findByPk(id);
    if (!dating) {
      return res.status(404).json({ message: 'Cita no encontrada' });
    }

    await dating.destroy();
    res.status(200).json({ message: 'Cita eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar la cita', error });
  }
};

module.exports = {
  getAllDating,
  createDating,
  updateDating,
  deleteDating,
};
