'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			"patients",
			[
				{
					name: "José de Oliveira",
					email: "j_oliveira@mail.com",
					phone: "995044789",
				},
				{
					name: "Maria Carla",
					email: "mcarla@mail.com",
					phone: "989954470",
				},
				{
					name: "Felipe Candido",
					email: "felipe@mail.com",
					phone: "996657891",
				},
        {
					name: "Raquel Patrícia",
					email: "raq_patricia@mail.com",
					phone: "991855518",
				},
        {
					name: "Mateus Calebe",
					email: "ma_calebe@mail.com",
					phone: "984936652",
				},
        {
					name: "Rafaela Nunes",
					email: "rafa_nunes@mail.com",
					phone: "989797744",
				},
			],
			{}
		);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("patients", null, {});
  }
};
