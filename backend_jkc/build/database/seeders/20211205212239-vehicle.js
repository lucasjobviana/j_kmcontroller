"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    up: async (queryInterface) => {
        await queryInterface.bulkInsert('vehicles', [
            {
                name: 'Montana 2022 verde',
                license_plate: 'ABC-1234',
            },
            {
                name: 'Volvo ex40 preto',
                license_plate: 'DEF-5678',
            },
            {
                name: "Volvo ex21 azul",
                license_plate: "GHI-9012",
            },
            {
                name: "Parati Turbo 2022",
                license_plate: "JKL-3456",
            },
            {
                name: "CG 126 2004",
                license_plate: "MNO-7890",
            },
        ], {});
    },
    down: async (queryInterface) => {
        await queryInterface.bulkDelete('vehicles', {});
    },
};
//# sourceMappingURL=20211205212239-vehicle.js.map