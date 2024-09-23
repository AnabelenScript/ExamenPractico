const { commentModel } = require('../models');

// Obtener todos los comentarios
const getAllComments = async (req, res) => {
  try {
    const comments = await commentModel.findAll();
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los comentarios', error });
  }
};

// Obtener un comentario por ID
const getCommentById = async (req, res) => {
  try {
    const { id } = req.params;
    const comment = await commentModel.findByPk(id);

    if (!comment) {
      return res.status(404).json({ message: 'Comentario no encontrado' });
    }

    res.status(200).json(comment);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el comentario', error });
  }
};

// Crear un nuevo comentario
const createComment = async (req, res) => {
  try {
    const { body_comment, id_post_comment, id_pet_comment } = req.body;

    const newComment = await commentModel.create({
      body_comment,
      id_post_comment,
      id_pet_comment,
    });

    res.status(201).json(newComment);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el comentario', error });
  }
};

// Actualizar un comentario existente
const updateComment = async (req, res) => {
  try {
    const { id } = req.params;
    const { body_comment, id_post_comment, id_pet_comment } = req.body;

    const comment = await commentModel.findByPk(id);
    if (!comment) {
      return res.status(404).json({ message: 'Comentario no encontrado' });
    }

    comment.body_comment = body_comment;
    comment.id_post_comment = id_post_comment;
    comment.id_pet_comment = id_pet_comment;

    await comment.save();
    res.status(200).json(comment);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el comentario', error });
  }
};

// Eliminar un comentario
const deleteComment = async (req, res) => {
  try {
    const { id } = req.params;

    const comment = await commentModel.findByPk(id);
    if (!comment) {
      return res.status(404).json({ message: 'Comentario no encontrado' });
    }

    await comment.destroy();
    res.status(200).json({ message: 'Comentario eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el comentario', error });
  }
};

module.exports = {
  getAllComments,
  getCommentById,
  createComment,
  updateComment,
  deleteComment,
};
