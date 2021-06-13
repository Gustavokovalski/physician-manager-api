const Sequelize = require ("sequelize");

class Patient extends Sequelize.Model {
    static init(sequelize){
        super.init(
            {
               patientId: {
                    type: Sequelize.INTEGER,
                    autoIncrement: true,
                    allowNull: false,
                    primaryKey: true
                },
             name: Sequelize.STRING,
             email: Sequelize.STRING,
             phone: Sequelize.STRING,
            },
            {
                sequelize,
            }
        );
    }
    static associate(models){
        this.hasMany(models.Appointment, {foreignKey: "apponitmentId"});
    }

}

module.exports = Patient;