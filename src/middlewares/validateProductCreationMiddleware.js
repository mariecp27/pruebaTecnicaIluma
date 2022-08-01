const { body } = require('express-validator');

const productCreationValidations = [
	body('name').notEmpty().withMessage('Ingrese el nombre del producto').bail()
		.isLength({ max: 40 }).withMessage('El nombre del producto puede tener máximo 40 caracteres'),
	
	body('productType').notEmpty().withMessage('Seleccione el tipo de producto'),

	body('employee').notEmpty().withMessage('Seleccione el operario a cargo'),

	body('packagingType').notEmpty().withMessage('Seleccione el tipo de empaque'),
]

module.exports = productCreationValidations;