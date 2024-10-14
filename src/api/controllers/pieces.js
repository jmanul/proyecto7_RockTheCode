
const Piece = require("../models/pieces");


const getPieces = async (req, res, next) => {

     try {

          const pieces = await Piece.find();

          if (!pieces) {
               return res.status(404).json({ message: 'piezas no encontradas' });
          }

          return res.status(200).json(pieces);

     } catch (error) {

          return res.status(404).json(error);

     }
};


const getPieceById = async (req, res, next) => {

     try {

          const { id } = req.params;
          const piece = await Piece.findById(id);

          if (!piece) {
               return res.status(404).json({ message: 'pieza no encontrada' });
          }

          return res.status(200).json(piece);

     } catch (error) {

          return res.status(404).json(error);

     }
};

const postPiece = async (req, res, next) => {

     try {

          const newPiece = new Piece(req.body);
          const pieceSave = await newPiece.save();
          return res.status(201).json({
               message: 'pieza creada correctamente',
               service: pieceSave
          });

     } catch (error) {

          return res.status(404).json(error);
     }

  
};
const putPiece = async (req, res, next) => {

     try {

          const { id } = req.params;

          const pieceUpdate = await Piece.findByIdAndUpdate(id, req.body, { new: true });

          if (!pieceUpdate) {
               return res.status(404).json({ message: 'pieza no encontrada' });
          }

          return res.status(200).json(pieceUpdate);


     } catch (error) {

          return res.status(404).json(error);
     }
};

const deletePiece = async (req, res, next) => {

     try {

          const { id } = req.params;
          const pieceDelete = await Piece.findByIdAndDelete(id);
          
          if (!pieceDelete) {
               return res.status(404).json({ message: 'pieza no encontrada' });
          }

          return res.status(200).json({
               message: 'la pieza fue eliminada',
               piece: pieceDelete
           });

     } catch (error) {

          return res.status(404).json(error);

     }
};


module.exports = {

     getPieces,
     getPieceById,
     postPiece,
     putPiece,
     deletePiece
};