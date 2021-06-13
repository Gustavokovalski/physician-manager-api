const Sequelize = require ("sequelize");
const Physician = require("./Physician");
const Patient = require("./Patient");


class Appointment extends Sequelize.Model {
    static init(sequelize){
        super.init(
            {
                appointmentId: {
                    type: Sequelize.INTEGER,
                    autoIncrement: true,
                    allowNull: false,
                    primaryKey: true
                },
                physicianId :   {
                    type: Sequelize.INTEGER,
                    references: {
                        model: Physician,
                        key: "physicianId"
                    }
                },
                    patientId : {
                        type: Sequelize.INTEGER,
                        references: {
                            model: Patient,
                            key: "patientId"
                        }
                        },
             appointmentDate: Sequelize.DATE,
             description: Sequelize.STRING,            
                    },
            {
                sequelize,
            }
        );
    }

static associate(models){
    this.belongsTo(models.Physician, {foreignKey: "physicianId"});
}
static associate(models){
    this.belongsTo(models.Patient, {foreignKey: "patientId"});
}
}
module.exports = Appointment;