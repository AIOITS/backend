const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seedBbm() {  
  await prisma.bbm.createMany({
    data: [
      {
        name: 'Solar / Biodiesel',
        type: 'CN 48',
        price_per_liter: 6800,
        is_subsidi: true,
        category: 'solar'
      },
      {
        name: 'Dexlite',
        type: 'CN 51',
        price_per_liter: 17800,
        is_subsidi: false,
        category: 'solar'
      },
      {
        name: 'Pertamina Dex',
        type: 'CN 53',
        price_per_liter: 18100,
        is_subsidi: false,
        category: 'solar'
      },
      {
        name: 'Pertalite',
        type: 'RON 90',
        price_per_liter: 10000,
        is_subsidi: true,
        category: 'bensin'
      },
      {
        name: 'Pertamax',
        type: 'RON 92',
        price_per_liter: 13900,
        is_subsidi: false,
        category: 'bensin'
      },
      {
        name: 'Pertamax Turbo',
        type: 'RON 98',
        price_per_liter: 15000,
        is_subsidi: false,
        category: 'bensin'
      },
    ]
  })
}

module.exports = seedBbm;
