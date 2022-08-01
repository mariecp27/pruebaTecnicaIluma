module.exports = (sequelize, dataTypes) => {
    
    let alias = 'Product';
    
    let cols = {
        product_id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        product_type_id: {
            type: dataTypes.INTEGER,
            allowNull: false,
        },
        production_date: {
            type: dataTypes.DATE,
            allowNull: false,
        },
        employee_id: {
            type: dataTypes.INTEGER,
            allowNull: false,
        },
        production_time: {
            type: dataTypes.TIME,
            allowNull: false,
        },
        packaging_type_id: {
            type: dataTypes.INTEGER,
            allowNull: false,
        },
    };

    let config = {
        tableName: 'products',
        timestamps: false,
    }

    const Product = sequelize.define(alias, cols, config);

    Product.associate = function(models) {

        Product.belongsTo(models.ProductType, {
            as: 'productTypes',
            foreignKey: 'product_type_id'
        });

        Product.belongsTo(models.PackagingType, {
            as: 'packagingTypes',
            foreignKey: 'packaging_type_id'
        });

        Product.belongsTo(models.Employee, {
            as: 'employees',
            foreignKey: 'employee_id'
        })
    }

    return Product;
};