import { QueryInterface } from 'sequelize';

export default { 
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('places', [
      {
        name: 'Empresa Home',
        description: 'Empresa Home',
        full_address: 'Rua 1, 123',
      },
      {
        name: 'Empresa Tião',
        description: 'Empresa do tião em astorga',
        full_address: 'Rua 2, 123',
      },
      {
        name: 'Bauneario almeida',
        description: 'Balneario almeida em maringa',
        full_address: 'Rua 3, 123',
      },
      {
        name: 'Marmitex do tião',
        description: 'Empresa do tião em jaguapita',
        full_address: 'Rua 4, 123',
      },
      {
        name: 'Usina Monte Alegre',
        description: 'Usina Monte Alegre na divisa do paraná com o mato grosso do sul',
        full_address: 'Rua 5, 123',
      },
      
    ], {});
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('places', {});
  },
}
