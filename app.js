// ************ Require's ************
const express = require('express');
const path = require('path');
const app = express();


// ************ Middlewares - (don't touch) ************
// carpetas publicas...
app.use(express.static(path.resolve(__dirname, './public')));
// carpetas de views...
app.set('views', path.resolve(__dirname, './src/views'));
app.set('view engine', 'ejs');


// ************ WRITE YOUR CODE FROM HERE ************
// ************ Route System require and use() ************
const mainRouter = require('./src/routes/main');
const productsRouter = require('./src/routes/products');

app.use('/', mainRouter);
app.use('/products', productsRouter);


// ************ PUERTO ************
// el puerto segun indiquen
// Modificacion para emplear en Heroku... 'process.env.PORT ||'
const puerto = 3000;
app.listen(process.env.PORT ||  puerto , () => console.log("Listo para ver en (Ctrl + Click)... http://localhost:" + puerto) );

