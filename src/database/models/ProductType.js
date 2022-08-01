module.exports = (sequelize, dataTypes) => {
    
    let alias = 'ProductType';
    
    let cols = {
        product_type_id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        product_type: {
            type: dataTypes.STRING(25),
            allowNull: false,
        }
    }

    let config = {
        tableName: 'product_types',
        timestamps: false
    }

    const ProductType = sequelize.define(alias, cols, config);

    ProductType.associate = function (models) {

        ProductType.hasMany(models.Product, {
            as: 'productTypes',
            foreignKey: 'product_type_id'
        });
    }

    return ProductType;
};