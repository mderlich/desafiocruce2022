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
        
        res.render('products', { 
            productDetail: productsFiltrados
        });

    },
    
};

module.exports = controller;    