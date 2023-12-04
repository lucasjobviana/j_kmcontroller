import { QueryInterface } from 'sequelize';

export default { 
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('maintenance_service_associations', [
      {
        maintenance_id: 1,
        service_id: 1,
        description: '10 litros de óleo base 10w40 - shell, 1 filtro de óleo, 1 filtro de ar, 1 filtro de combustível',
        total_price: 109.99,
      }, 
      {
        maintenance_id: 1,
        service_id: 2,
        description: '5 litros de óleo base 80w90 - shell, 1 filtro de óleo, 1 filtro de ar, 1 filtro de combustível',
        total_price: 50.00,
      },
      {
        maintenance_id: 1,
        service_id: 3,
        description: '10 parafuso do cárter',
        total_price: 40.88,
      },
      {
        maintenance_id: 2,
        service_id: 2,
        description: 'Cambio de filtro de aceite',
        total_price: 150.00,
      },
      {
        maintenance_id: 2,
        service_id: 4,
        description: 'Trocado pneu dianteiro esquerdo e traseiro direito do terceiro eixo',
        total_price: 201.90,
      },
      {
        maintenance_id: 3,
        service_id: 3,
        description: 'Trocado conjuntos de parafusos do cárter',
        total_price: 400.34,
      }
    ], {  });
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('maintenance_service_associations', {});
  },
};
