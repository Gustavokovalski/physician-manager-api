"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("appointments", {
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false
			},
      physicianId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'physicians',
          key: 'id',
        },
      },
      patientId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'patients',
          key: 'id',
        },
      },
			appointmentDate: {
				type: Sequelize.DATE,
				allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
			},
      description:{
        type: Sequelize.STRING,
        allowNull: false
      }
		});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable("appointments");
	},
};
