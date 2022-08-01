module.exports = (sequelize, dataTypes) => {
    
    let alias = 'PackagingType';
    
    let cols = {
        packaging_type_id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        packaging_type: {
            type: dataTypes.STRING(25),
            allowNull: false,
        }
    }

    let config = {
        tableName: 'packaging_types',
        timestamps: false
    }

    const PackagingType = sequelize.define(alias, cols, config);

    PackagingType.associate = function (models) {

        PackagingType.hasMany(models.Product, {
            as: 'packagingTypes',
            foreignKey: 'packaging_type_id'
        });
    }

    return PackagingType;
};