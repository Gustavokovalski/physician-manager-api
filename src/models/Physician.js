const Sequelize = require ("sequelize");

class Physician extends Sequelize.Model {
    static init(sequelize){
        super.init(
            {
                physicianId: {
                    type: Sequelize.INTEGER,
                    autoIncrement: true,
                    allowNull: false,
                    primaryKey: true
                },
             name: Sequelize.STRING,
             email: Sequelize.STRING,
             password: Sequelize.STRING,
            },
            {
                sequelize,
            }
        );
    }
    static associate(models){
        this.hasMany(models.Appointment, {foreignKey: "appointmentId"});
    }

}

module.exports = Physician;