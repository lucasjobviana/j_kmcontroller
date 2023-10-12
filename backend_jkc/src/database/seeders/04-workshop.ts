import { QueryInterface } from 'sequelize';

export default { 
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('workshops', [
      {
        name: 'Officina do Tião',
        description: 'Officina do Tião',
        full_address: 'Rua 1, 1230',
        phone: '32345678',
      },
      {
        name: 'Officina do Tião',
        description: 'Officina do Tião ao lado do posto Villa Nova',
        full_address: 'Rua Amazonas, 1234',
        phone: '32345678',
      },
      {
        name: 'CTA',
        description: 'Centro de treinamento automotivo na avenida do conserto',
        full_address: 'Avenida do conserto, 1230',
        phone: '32345678',
      }
      
    ], {});
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('workshops', {});
  },
}
