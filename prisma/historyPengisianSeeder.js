const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seedHistoryPengisian() {  
  await prisma.historyPengisian.createMany({
    data: [
      {
        kategori_pengisian: 'subsidi',
        device_id: '00:1A:2B:3C:4D:5E',
        jenis_kendaraan: 'sepeda motor',
        spbu_id: (await prisma.device.findFirst({where: { device_id: '00:1A:2B:3C:4D:5E'}})).spbu_id,
        jumlah: 50.0,
        nomor_stnk: '98762848',
        user_id: (await prisma.user.findFirst({where: { email: 'testing@example.com'}})).id
      },
    ]
  })
}

module.exports = seedHistoryPengisian;
