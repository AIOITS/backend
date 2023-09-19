const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seedSpbu() {  
  await prisma.spbu.create({
    data: {
      name: 'SPBU Mulyosari',
      alamat: 'Jl. Mulyosari No 43-35',
      device: {
        createMany: {
          data: [
            {
              device_id: "00:1A:2B:3C:4D:5E",
            }
          ]
        }
      }
    }
  })
}

module.exports = seedSpbu;
