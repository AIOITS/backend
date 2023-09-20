const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seedBbm() {  
  await prisma.bbm.createMany({
    data: [
      {
        name: 'Solar / Biodiesel',
        type: 'CN 48',
        price_per_liter: 6800
      },
      {
        name: 'Dexlite',
        type: 'CN 51',
        price_per_liter: 17800
      },
      {
        name: 'Pertamina Dex',
        type: 'CN 53',
        price_per_liter: 18100
      },
      {
        name: 'Pertalite',
        type: 'RON 90',
        price_per_liter: 10000
      },
      {
        name: 'Pertamax',
        type: 'RON 92',
        price_per_liter: 13900
      },
      {
        name: 'Pertamax Turbo',
        type: 'RON 98',
        price_per_liter: 15000
      },
    ]
  })
}

module.exports = seedBbm;
