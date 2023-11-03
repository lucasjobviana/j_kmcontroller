import { QueryInterface } from 'sequelize';

export default { 
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('maintenance_service_associations', [
      {
        maintenance_id: 1,
        service_id: 1,
      }, 
      {
        maintenance_id: 1,
        service_id: 2,
      },
      {
        maintenance_id: 1,
        service_id: 3,
      },
      {
        maintenance_id: 2,
        service_id: 2,
      },
      {
        maintenance_id: 2,
        service_id: 4,
      },
      {
        maintenance_id: 3,
        service_id: 3,
      }
    ], {  });
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('maintenance_service_associations', {});
  },
}
