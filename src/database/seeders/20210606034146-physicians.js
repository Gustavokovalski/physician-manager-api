'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			"physicians",
			[
				{
					name: "Paulo da Silva",
					email: "p_silva@mail.com",
					password: "123456"
				},
        {
          name: "Isabela Elza Ferreira",
					email: "isabelaelzaferreira_silva@mail.com",
					password: "789101"
        },
        {
          name: "Raimundo Mateus",
					email: "raimundo_mat@mail.com",
					password: "111213"
        },
			],
			{}
		);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("physicians", null, {});
  }
};
