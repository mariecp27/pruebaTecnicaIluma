const { validationResult } = require('express-validator');
const db = require('../database/models');

let mainController = {
    index: async(req, res) => {
        
        let allProducts = await db.Product.findAll({
            include: [
                {association: 'productTypes'},
                {association: 'packagingTypes'},
                {association: 'employees'}
            ]
        }).catch(function(errors){
            console.log(errors);
        });

        return res.render('index', { allProducts });
    },

    // Formulario de creación de productos
    create: async(req, res) => {

        //Tipo de productos
        let productTypes = await db.ProductType.findAll()
            .catch(function(errors){
                console.log(errors);
            });

        //Obtener fecha actual
        let date_ob = new Date();
        
        //Agrega un 0 en fechas con único dígito
        let day = ("0" + date_ob.getDate()).slice(-2);

        let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

        let year = date_ob.getFullYear();
        
        let date = year + "-" + month + "-" + day;

        //Empleados
        let employees = await db.Employee.findAll({
            order: [
                ['name', 'ASC']
            ]
        }).catch(function(errors){
                console.log(errors);
            });
        
        //Tipo de empaque
        let packagingType = await db.PackagingType.findAll()
        .catch(function(errors){
            console.log(errors);
        });

        res.render('createProduct',{
            productTypes,
            date,
            employees,
            packagingType
        });
    },

    // Método para almacenar los productos creados
	store: async(req, res) => {

        // Verificación de errores
        const resultValidation = validationResult(req);

        if (resultValidation.errors.length > 0) {

            //Tipo de productos
            let productTypes = await db.ProductType.findAll()
            .catch(function(errors){
                console.log(errors);
            });

            //Obtener fecha actual
            let date_ob = new Date();
            
            //Agrega un 0 en fechas con único dígito
            let day = ("0" + date_ob.getDate()).slice(-2);

            let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

            let year = date_ob.getFullYear();
            
            let date = year + "-" + month + "-" + day;

            //Empleados
            let employees = await db.Employee.findAll({
                order: [
                    ['name', 'ASC']
                ]
            }).catch(function(errors){
                    console.log(errors);
                });
            
            //Tipo de empaque
            let packagingType = await db.PackagingType.findAll()
            .catch(function(errors){
                console.log(errors);
            });

			return res.render('createProduct', {
				errors: resultValidation.mapped(),
				oldData: req.body,
                productTypes,
                date,
                employees,
                packagingType
			});
		}
        
        let newProduct = await db.Product.create({
			name: req.body.name,
            product_type_id: req.body.productType,
            production_date: req.body.productionDate,
            employee_id: req.body.employee,
            production_time: req.body.timer,
            packaging_type_id: req.body.packagingType
        }).catch(function(errors){
            console.log(errors);
        });

		res.redirect('/');
	},

    // Formulario de edición de productos
    edit: async(req, res) =>{

        //Producto a editar
        let idProduct = req.params.id;

        let productToEdit = await db.Product.findByPk(idProduct, {
            include: [
                {association: 'productTypes'},
                {association: 'packagingTypes'},
                {association: 'employees'}
            ]
        }).catch(function(errors){
            console.log(errors);
        });

        //Tipo de productos
        let productTypes = await db.ProductType.findAll()
            .catch(function(errors){
                console.log(errors);
            });

        //Empleados
        let employees = await db.Employee.findAll({
            order: [
                ['name', 'ASC']
            ]
        }).catch(function(errors){
                console.log(errors);
            });
        
        //Tipo de empaque
        let packagingType = await db.PackagingType.findAll()
        .catch(function(errors){
            console.log(errors);
        });

        res.render('editProduct',{
            productToEdit,
            productTypes,
            employees,
            packagingType
        });
    },

    // Método para actualizar los productos almacenados
    update: async(req, res) => {

        // Verificación de errores
        const resultValidation = validationResult(req);

        if (resultValidation.errors.length > 0) {

            //Producto a editar
            let idProduct = req.params.id;

            let productToEdit = await db.Product.findByPk(idProduct, {
                include: [
                    {association: 'productTypes'},
                    {association: 'packagingTypes'},
                    {association: 'employees'}
                ]
            }).catch(function(errors){
                console.log(errors);
            });

            //Tipo de productos
            let productTypes = await db.ProductType.findAll()
            .catch(function(errors){
                console.log(errors);
            });

            //Empleados
            let employees = await db.Employee.findAll({
                order: [
                    ['name', 'ASC']
                ]
            }).catch(function(errors){
                    console.log(errors);
                });
            
            //Tipo de empaque
            let packagingType = await db.PackagingType.findAll()
            .catch(function(errors){
                console.log(errors);
            });

			return res.render('editProduct', {
				errors: resultValidation.mapped(),
				oldData: req.body,
                productToEdit,
                productTypes,
                employees,
                packagingType
			});
		}

        //Producto a editar
        let idProduct = req.params.id;

        let updatedProduct = await db.Product.update({
			name: req.body.name,
            product_type_id: req.body.productType,
            production_date: req.body.productionDate,
            employee_id: req.body.employee,
            production_time: req.body.timer,
            packaging_type_id: req.body.packagingType
        }, {
            where: {
                product_id: idProduct,
            }
        }).catch(function(errors){
            console.log(errors);
        });

		res.redirect('/');
	},

    // Método para eliminar productos almacenados
	destroy : async(req, res) => {

        let idProduct = req.params.id;

        let deletedProduct = await db.Product.destroy({
            where: {
                product_id: idProduct,
            }
        }).catch(function(errors){
            console.log(errors);
        });

		res.redirect('/');
	},

}

module.exports = mainController;