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
        name: 'Troca do parafuso do cárter',
        description: 'Trocar parafuseta da rebinboca do parafuso do cárter.',
      },
      {
        name: 'Troca de pneu',
        description: 'Trocar pneu.',
      }
    ], {});
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('services', {});
  },
};
