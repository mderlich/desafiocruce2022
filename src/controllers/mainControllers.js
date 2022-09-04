// ************ Require's ************
const fs = require('fs');
const path = require('path');



const controller = {


    // INDEX ************
	index: (req, res) => {

        const productsFilePath = path.join(__dirname, '../database/products.json');
        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

        /* filtrar por Funko */
        productsFiltrados = products.filter((e)=> {
            return e.categoria == "Funko";
        });

        /* producto del dia... ej 1 */
        let productId = 1;

		// busqueda en pocas lineas... (prod == producto)
		let productIndice = products.findIndex( prod => prod.id == productId );
		let productDay = products[productIndice];
        /* ------------------------- */

        /* Dinosaurios ------------------------- */
        const productsFilePathDinos = path.join(__dirname, '../database/dinosaurios.json');
        const productDinos = JSON.parse(fs.readFileSync(productsFilePathDinos, 'utf-8'));
        /* ------------------------- */

        /* filtrar por Funko */
        productsFiltradosNovedad = products.filter((e)=> {
            return e.novedad == "si";
        });

        
        /* mochila... ej 4 */
        let productMochilaId = 4;

		// busqueda en pocas lineas... (prod == producto)
		let productMochilaIndice = products.findIndex( prod => prod.id == productMochilaId );
		let productMochila = products[productMochilaIndice];
        /* ------------------------- */

        res.render('index', { 
			productDetail: productsFiltrados,
            productDay: productDay,
            productDinos: productDinos,
            productNovedades: productsFiltradosNovedad.reverse(),
            productMochila: productMochila
		});

	},


};

module.exports = controller;    