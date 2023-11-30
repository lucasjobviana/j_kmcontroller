import { QueryInterface } from 'sequelize';

export default { 
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('vehicles', [
      {
        name: 'Montana 2022 verde',
        license_plate: 'ABC-1234',
        image: './public/01-montana.jpg',
      },
      {
        name: 'Volvo FH460 preto',
        license_plate: 'DEF-5678',
        image: './public/02-volvo.jpg',
        description: 'Caminhão Volvo FH460 6x2 Globe Trotter 2013'
      },
      {
        name:'Volvo FH540 branco',
        license_plate:'GHI-9012',
        image: './public/03-volvo.jpeg',
        description: 'Caminhão Volvo FH540 6x4T 2018'
      },
      {
        name: 'Volvo FH2021 vermelho',
        license_plate: 'JKL-3456',
        image: './public/04-volvo.jpg',
        description: 'Caminhão Volvo FH 6x4T 2021'
      },
      {
        name:'Gol G6 vermelho',
        license_plate:'JAA-1E34',
        image: './public/05-gol.jpg',
        description: 'Carro Gol G6 2018 vermelho'
      },
      {
        name:'CG 150 2012',
        license_plate:'AAO-1122',
        image: './public/06-cg.jpg',
      },
      {
        name:'Scania 2014 preta',
        license_plate:'ABC-1234',
        image: './public/07-scania.jpg',
        description: 'Caminhão Scania 2014 preto'
      }
      
    ], {});
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('vehicles', {});
  },
};
