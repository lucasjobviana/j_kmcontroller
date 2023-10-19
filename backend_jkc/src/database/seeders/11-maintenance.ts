import { QueryInterface } from 'sequelize';

export default { 
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('maintenances', [
      {
        description: 'Troca de óleo e filtro na oficina do Tião',
        initial_date: new Date('2021-10-10'),
        end_date: new Date('2021-10-10'),
        workshop_id: 1,
        vehicle_id: 1,

      },
      {
        description: 'Troca de óleo e filtro na oficina do João',
        initial_date: new Date('2023-08-04'),
        end_date: new Date('2023-08-10'),
        workshop_id: 2,
        vehicle_id: 2,

      },
      {
        description: 'Troca de óleo e filtro na oficina do CTA',
        initial_date: new Date('2023-10-10'),
        end_date: new Date('2023-10-12'),
        workshop_id: 3,
        vehicle_id: 1,
      },
      {
        description: 'Troca de óleo e filtro na oficina do Tião',
        initial_date: new Date('2023-07-10'),
        end_date: new Date('2023-07-12'),
        workshop_id: 2,
        vehicle_id: 2,
      }
      
    ], {  });
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('maintenances', {});
  },
}
