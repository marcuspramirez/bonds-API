
// this file stores the "customer" model (model is table schema in sequelize lingo)

// inputs: sequelize instance and DT Class, returns: a Customer Model object
module.exports = (sequelize, DataTypes) => {

    // Define a new model, representing a table in the database.
    // modelName is 'customer' (first argument of define() function)
    // When synced, this will create a table name of "modelName" + "s", i.e. "customers"
    const Bond = sequelize.define('bond', {
        id: { // the id will be our primary key for accessing customer data
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        faceValue: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        couponRate: {
            type: DataTypes.DOUBLE,
            allowNull: false
        },
        couponDate: {
            type: DataTypes.DOUBLE,
            allowNull: false
        },
        maturityDate: {
            type: DataTypes.DOUBLE,
            allowNull: false
        },
        issuePrice: {
            type: DataTypes.DOUBLE,
            allowNull: false
        }
        
    })

    return Bond
}