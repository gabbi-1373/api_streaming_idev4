const express = require('express');
const mongoose = require('mongoose');
const cors = require ('cors');
const dotenv = require ('dotenv');
dotenv.config();

const app = express();
app.use(cors());
app.use (express.json());

mongoose.connect (process.env.MONGO_URI)
mongoose.connection.on('connected' , () => {
    console.log('Conectado com o MongoDB');
});

const MusicasRouter = require('./routes/musicas');
const FilmesRouter = require('./routes/filmes');
const SeriesRouter = require('./routes/series');
const LivrosRouter = require('./routes/livros');
const jogosRouter = require('./routes/jogos');

app.use('./musicas', MusicasRouter);
app.use('./filmes', FilmesRouter);
app.use('./series', SeriesRouter);
app.use('./livros', LivrosRouter);
app.use('./jogos', jogosRouter);

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
});