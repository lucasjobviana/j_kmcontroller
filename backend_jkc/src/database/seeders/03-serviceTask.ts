import { QueryInterface } from 'sequelize';

export default { 
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('services', [
      {
        name: 'Troca de óleo do motor',
        description: 'Trocar óleo do motor.',
      },    
      {
        name: 'Troca de óleo do câmbio',
        description: 'Trocar óleo do câmbio.',
      },
      {
        name: 'Troca de óleo do diferencial',
        description: 'Trocar óleo do diferencial.',
      },
      {
        name: 'Troca de óleo do freio',
        description: 'Trocar óleo do freio.',
      }
    ], {});
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('services', {});
  },
};
