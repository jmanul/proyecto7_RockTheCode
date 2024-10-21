const { isAuth } = require("../../middleware/isAuth");
const { rolAuth } = require("../../middleware/rolAuth");
const {getPieces, getPieceById, postPiece, putPiece, deletePiece} = require("../controllers/pieces");


const piecesRouter = require('express').Router();

piecesRouter.get('/id/:id', isAuth, rolAuth('administrator'), getPieceById);
piecesRouter.get('/', isAuth, rolAuth('user','administrator'), getPieces);
piecesRouter.post('/', isAuth, rolAuth('administrator'), postPiece);
piecesRouter.put('/:id', isAuth, rolAuth('administrator'), putPiece);
piecesRouter.delete('/:id', isAuth, rolAuth('administrator'), deletePiece);

module.exports = piecesRouter;



