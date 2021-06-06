'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			"appointments",
			[
				{
					appointmentDate: "2021-06-07",
					description: "995044789",
          physicianId: 1,
          patientId: 1,
				},
				{
					appointmentDate: "2021-06-09",
					description: "995044789",
          physicianId: 2,
          patientId: 3
				},
			],
			{}
		);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("appointments", null, {});
  }
};
