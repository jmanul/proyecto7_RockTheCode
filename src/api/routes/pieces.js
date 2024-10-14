const {getPieces, getPieceById, postPiece, putPiece, deletePiece} = require("../controllers/pieces");


const piecesRouter = require('express').Router();

piecesRouter.get('/id/:id', getPieceById);
piecesRouter.get('/', getPieces);
piecesRouter.post('/', postPiece);
piecesRouter.put('/:id', putPiece);
piecesRouter.delete('/:id', deletePiece);

module.exports = piecesRouter;



