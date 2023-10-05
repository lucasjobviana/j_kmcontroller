import { QueryInterface } from 'sequelize';

export default { 
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('vehicles', [
      {
        name: 'Montana 2022 verde',
      },
      {
        name: 'Volvo ex40 preto',
          // senha: secret_user
      },
      // os logins abaixo são intencionalmente inválidos, pois serão usados nos testes
      {
        name:"Volvo ex21 azul"
      },
      {
       name:"Parati Turbo 2022"
      },
      {
        name:"CG 126 2004"
       },
      
    ], {});
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('vehicles', {});
  },
}
