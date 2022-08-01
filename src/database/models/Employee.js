module.exports = (sequelize, dataTypes) => {
    
    let alias = 'Employee';
    
    let cols = {
        employee_id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        last_name: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        email: {
            type: dataTypes.STRING(50),
            allowNull: false,
            unique: true
        },
        password: {
            type: dataTypes.STRING(100),
            allowNull: false,
        }
    }

    let config = {
        tableName: 'employees',
        timestamps: false
    }

    const Employee = sequelize.define(alias, cols, config);

    Employee.associate = function (models) {

        Employee.hasMany(models.Product, {
            as: 'employees',
            foreignKey: 'employee_id'
        })
    }

    return Employee;
};