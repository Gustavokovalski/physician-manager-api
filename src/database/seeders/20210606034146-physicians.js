'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			"physicians",
			[
				{
					name: "Paulo da Silva",
					email: "p_silva@mail.com",
					password: "$2a$12$WbVTHbAD2H.bqm2.s0uBG.CXbeYjJZSFpRY1XvDw5FbLt3ElkcnfK"
				},
        		{
          			name: "Isabela Elza Ferreira",
					email: "isabelaelzaferreira_silva@mail.com",
					password: "$2a$12$WbVTHbAD2H.bqm2.s0uBG.CXbeYjJZSFpRY1XvDw5FbLt3ElkcnfK"
        		},
        		{
          			name: "Raimundo Mateus",
					email: "raimundo_mat@mail.com",
					password: "$2a$12$WbVTHbAD2H.bqm2.s0uBG.CXbeYjJZSFpRY1XvDw5FbLt3ElkcnfK"
        		},
			],
			{}
		);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("physicians", null, {});
  }
};
