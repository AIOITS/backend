const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seedHistoryPengisian() {
  await prisma.historyPengisian.createMany({
    data: [
      {
        kategori_pengisian: 'subsidi',
        device_id: '00:1A:2B:3C:4D:5E',
        jenis_kendaraan: 'sepeda motor',
        spbu_id: (await prisma.device.findFirst({ where: { device_id: '00:1A:2B:3C:4D:5E' } })).spbu_id,
        bbm_id: (await prisma.bbm.findFirst({ where: { name: 'Pertalite' } })).id,
        jumlah: 50.0,
        nomor_stnk: '98762848',
        user_id: (await prisma.user.findFirst({ where: { email: 'pkmaioits@email.com' } })).id,
        createdAt: new Date("2023-01-01")
      },
      {
        "kategori_pengisian": "subsidi",
        "device_id": "495dd0256542c2",
        "jenis_kendaraan": "truk",
        "spbu_id": (await prisma.device.findFirst({
          where: {
            device_id: '495dd0256542c2'
          }
        })).spbu_id,
        "jumlah": 123.96,
        "nomor_stnk": "98762848",
        "user_id": (await prisma.user.findFirst({
          where: {
            email: 'pkmaioits@email.com'
          }
        })).id,
        "bbm_id": (await prisma.bbm.findFirst({
          where: {
            name: 'Pertamax Turbo'
          }
        })).id,
        createdAt: new Date("2023-01-01")
      },
      {
        "kategori_pengisian": "subsidi",
        "device_id": "1c81fd1eb5b203",
        "jenis_kendaraan": "bus",
        "spbu_id": (await prisma.device.findFirst({
          where: {
            device_id: '1c81fd1eb5b203'
          }
        })).spbu_id,
        "jumlah": 123.96,
        "nomor_stnk": "98762848",
        "user_id": (await prisma.user.findFirst({
          where: {
            email: 'pkmaioits@email.com'
          }
        })).id,
        "bbm_id": (await prisma.bbm.findFirst({
          where: {
            name: 'Pertamax Turbo'
          }
        })).id,
        createdAt: new Date("2023-01-01")
      },
      {
        "kategori_pengisian": "subsidi",
        "device_id": "f5543cf6cad9d7",
        "jenis_kendaraan": "bus",
        "spbu_id": (await prisma.device.findFirst({
          where: {
            device_id: 'f5543cf6cad9d7'
          }
        })).spbu_id,
        "jumlah": 123.96,
        "nomor_stnk": "98762848",
        "user_id": (await prisma.user.findFirst({
          where: {
            email: 'pkmaioits@email.com'
          }
        })).id,
        "bbm_id": (await prisma.bbm.findFirst({
          where: {
            name: 'Pertamax Turbo'
          }
        })).id,
        createdAt: new Date("2023-01-01")
      },
      {
        "kategori_pengisian": "non_subsidi",
        "device_id": "02808d4e78cb79",
        "jenis_kendaraan": "truk",
        "spbu_id": (await prisma.device.findFirst({
          where: {
            device_id: '02808d4e78cb79'
          }
        })).spbu_id,
        "jumlah": 123.96,
        "nomor_stnk": "98762848",
        "user_id": (await prisma.user.findFirst({
          where: {
            email: 'pkmaioits@email.com'
          }
        })).id,
        "bbm_id": (await prisma.bbm.findFirst({
          where: {
            name: 'Pertamina Dex'
          }
        })).id,
        createdAt: new Date("2023-01-01")
      },
      {
        "kategori_pengisian": "subsidi",
        "device_id": "495dd0256542c2",
        "jenis_kendaraan": "sepeda motor",
        "spbu_id": (await prisma.device.findFirst({
          where: {
            device_id: '495dd0256542c2'
          }
        })).spbu_id,
        "jumlah": 123.96,
        "nomor_stnk": "98762848",
        "user_id": (await prisma.user.findFirst({
          where: {
            email: 'pkmaioits@email.com'
          }
        })).id,
        "bbm_id": (await prisma.bbm.findFirst({
          where: {
            name: 'Dexlite'
          }
        })).id,
        createdAt: new Date("2023-01-01")
      },
      {
        "kategori_pengisian": "non_subsidi",
        "device_id": "b34284fa9d9267",
        "jenis_kendaraan": "truk",
        "spbu_id": (await prisma.device.findFirst({
          where: {
            device_id: 'b34284fa9d9267'
          }
        })).spbu_id,
        "jumlah": 123.96,
        "nomor_stnk": "98762848",
        "user_id": (await prisma.user.findFirst({
          where: {
            email: 'pkmaioits@email.com'
          }
        })).id,
        "bbm_id": (await prisma.bbm.findFirst({
          where: {
            name: 'Pertamax'
          }
        })).id,
        createdAt: new Date("2023-01-01")
      },
      {
        "kategori_pengisian": "non_subsidi",
        "device_id": "44a6a79d317500",
        "jenis_kendaraan": "bus",
        "spbu_id": (await prisma.device.findFirst({
          where: {
            device_id: '44a6a79d317500'
          }
        })).spbu_id,
        "jumlah": 123.96,
        "nomor_stnk": "98762848",
        "user_id": (await prisma.user.findFirst({
          where: {
            email: 'pkmaioits@email.com'
          }
        })).id,
        "bbm_id": (await prisma.bbm.findFirst({
          where: {
            name: 'Pertamax'
          }
        })).id,
        createdAt: new Date("2023-02-01")
      },
      {
        "kategori_pengisian": "non_subsidi",
        "device_id": "cf5b904e594214",
        "jenis_kendaraan": "sepeda motor",
        "spbu_id": (await prisma.device.findFirst({
          where: {
            device_id: 'cf5b904e594214'
          }
        })).spbu_id,
        "jumlah": 123.96,
        "nomor_stnk": "98762848",
        "user_id": (await prisma.user.findFirst({
          where: {
            email: 'pkmaioits@email.com'
          }
        })).id,
        "bbm_id": (await prisma.bbm.findFirst({
          where: {
            name: 'Solar / Biodiesel'
          }
        })).id,
        createdAt: new Date("2023-02-01")
      },
      {
        "kategori_pengisian": "non_subsidi",
        "device_id": "615bb72bee9b6f",
        "jenis_kendaraan": "truk",
        "spbu_id": (await prisma.device.findFirst({
          where: {
            device_id: '615bb72bee9b6f'
          }
        })).spbu_id,
        "jumlah": 123.96,
        "nomor_stnk": "98762848",
        "user_id": (await prisma.user.findFirst({
          where: {
            email: 'pkmaioits@email.com'
          }
        })).id,
        "bbm_id": (await prisma.bbm.findFirst({
          where: {
            name: 'Pertalite'
          }
        })).id,
        createdAt: new Date("2023-02-01")
      },
      {
        "kategori_pengisian": "subsidi",
        "device_id": "cf5b904e594214",
        "jenis_kendaraan": "mobil",
        "spbu_id": (await prisma.device.findFirst({
          where: {
            device_id: 'cf5b904e594214'
          }
        })).spbu_id,
        "jumlah": 123.96,
        "nomor_stnk": "98762848",
        "user_id": (await prisma.user.findFirst({
          where: {
            email: 'pkmaioits@email.com'
          }
        })).id,
        "bbm_id": (await prisma.bbm.findFirst({
          where: {
            name: 'Dexlite'
          }
        })).id,
        createdAt: new Date("2023-02-01")
      },
      {
        "kategori_pengisian": "subsidi",
        "device_id": "1c81fd1eb5b203",
        "jenis_kendaraan": "sepeda motor",
        "spbu_id": (await prisma.device.findFirst({
          where: {
            device_id: '1c81fd1eb5b203'
          }
        })).spbu_id,
        "jumlah": 123.96,
        "nomor_stnk": "98762848",
        "user_id": (await prisma.user.findFirst({
          where: {
            email: 'pkmaioits@email.com'
          }
        })).id,
        "bbm_id": (await prisma.bbm.findFirst({
          where: {
            name: 'Pertamina Dex'
          }
        })).id,
        createdAt: new Date("2023-02-01")
      },
      {
        "kategori_pengisian": "subsidi",
        "device_id": "3595f32ada1da5",
        "jenis_kendaraan": "sepeda motor",
        "spbu_id": (await prisma.device.findFirst({
          where: {
            device_id: '3595f32ada1da5'
          }
        })).spbu_id,
        "jumlah": 123.96,
        "nomor_stnk": "98762848",
        "user_id": (await prisma.user.findFirst({
          where: {
            email: 'pkmaioits@email.com'
          }
        })).id,
        "bbm_id": (await prisma.bbm.findFirst({
          where: {
            name: 'Pertamina Dex'
          }
        })).id,
        createdAt: new Date("2023-02-01")
      },
      {
        "kategori_pengisian": "non_subsidi",
        "device_id": "091039535e1a29",
        "jenis_kendaraan": "sepeda motor",
        "spbu_id": (await prisma.device.findFirst({
          where: {
            device_id: '091039535e1a29'
          }
        })).spbu_id,
        "jumlah": 123.96,
        "nomor_stnk": "98762848",
        "user_id": (await prisma.user.findFirst({
          where: {
            email: 'pkmaioits@email.com'
          }
        })).id,
        "bbm_id": (await prisma.bbm.findFirst({
          where: {
            name: 'Pertamina Dex'
          }
        })).id,
        createdAt: new Date("2023-02-01")
      },
      {
        "kategori_pengisian": "subsidi",
        "device_id": "091039535e1a29",
        "jenis_kendaraan": "truk",
        "spbu_id": (await prisma.device.findFirst({
          where: {
            device_id: '091039535e1a29'
          }
        })).spbu_id,
        "jumlah": 123.96,
        "nomor_stnk": "98762848",
        "user_id": (await prisma.user.findFirst({
          where: {
            email: 'pkmaioits@email.com'
          }
        })).id,
        "bbm_id": (await prisma.bbm.findFirst({
          where: {
            name: 'Pertamina Dex'
          }
        })).id,
        createdAt: new Date("2023-02-01")
      },
      {
        "kategori_pengisian": "subsidi",
        "device_id": "ed1476481360c7",
        "jenis_kendaraan": "sepeda motor",
        "spbu_id": (await prisma.device.findFirst({
          where: {
            device_id: 'ed1476481360c7'
          }
        })).spbu_id,
        "jumlah": 123.96,
        "nomor_stnk": "98762848",
        "user_id": (await prisma.user.findFirst({
          where: {
            email: 'pkmaioits@email.com'
          }
        })).id,
        "bbm_id": (await prisma.bbm.findFirst({
          where: {
            name: 'Solar / Biodiesel'
          }
        })).id,
        createdAt: new Date("2023-02-01")
      },
      {
        "kategori_pengisian": "non_subsidi",
        "device_id": "ed1476481360c7",
        "jenis_kendaraan": "truk",
        "spbu_id": (await prisma.device.findFirst({
          where: {
            device_id: 'ed1476481360c7'
          }
        })).spbu_id,
        "jumlah": 123.96,
        "nomor_stnk": "98762848",
        "user_id": (await prisma.user.findFirst({
          where: {
            email: 'pkmaioits@email.com'
          }
        })).id,
        "bbm_id": (await prisma.bbm.findFirst({
          where: {
            name: 'Pertalite'
          }
        })).id,
        createdAt: new Date("2023-02-01")
      },
      {
        "kategori_pengisian": "subsidi",
        "device_id": "f5543cf6cad9d7",
        "jenis_kendaraan": "mobil",
        "spbu_id": (await prisma.device.findFirst({
          where: {
            device_id: 'f5543cf6cad9d7'
          }
        })).spbu_id,
        "jumlah": 123.96,
        "nomor_stnk": "98762848",
        "user_id": (await prisma.user.findFirst({
          where: {
            email: 'pkmaioits@email.com'
          }
        })).id,
        "bbm_id": (await prisma.bbm.findFirst({
          where: {
            name: 'Pertalite'
          }
        })).id,
        createdAt: new Date("2023-02-01")
      },
      {
        "kategori_pengisian": "non_subsidi",
        "device_id": "43d5643ccef962",
        "jenis_kendaraan": "bus",
        "spbu_id": (await prisma.device.findFirst({
          where: {
            device_id: '43d5643ccef962'
          }
        })).spbu_id,
        "jumlah": 123.96,
        "nomor_stnk": "98762848",
        "user_id": (await prisma.user.findFirst({
          where: {
            email: 'pkmaioits@email.com'
          }
        })).id,
        "bbm_id": (await prisma.bbm.findFirst({
          where: {
            name: 'Pertamax Turbo'
          }
        })).id,
        createdAt: new Date("2023-03-01")
      },
      {
        "kategori_pengisian": "subsidi",
        "device_id": "ed1476481360c7",
        "jenis_kendaraan": "sepeda motor",
        "spbu_id": (await prisma.device.findFirst({
          where: {
            device_id: 'ed1476481360c7'
          }
        })).spbu_id,
        "jumlah": 123.96,
        "nomor_stnk": "98762848",
        "user_id": (await prisma.user.findFirst({
          where: {
            email: 'pkmaioits@email.com'
          }
        })).id,
        "bbm_id": (await prisma.bbm.findFirst({
          where: {
            name: 'Solar / Biodiesel'
          }
        })).id,
        createdAt: new Date("2023-03-01")
      },
      {
        "kategori_pengisian": "non_subsidi",
        "device_id": "f5543cf6cad9d7",
        "jenis_kendaraan": "sepeda motor",
        "spbu_id": (await prisma.device.findFirst({
          where: {
            device_id: 'f5543cf6cad9d7'
          }
        })).spbu_id,
        "jumlah": 123.96,
        "nomor_stnk": "98762848",
        "user_id": (await prisma.user.findFirst({
          where: {
            email: 'pkmaioits@email.com'
          }
        })).id,
        "bbm_id": (await prisma.bbm.findFirst({
          where: {
            name: 'Dexlite'
          }
        })).id,
        createdAt: new Date("2023-03-01")
      },
      {
        "kategori_pengisian": "subsidi",
        "device_id": "091039535e1a29",
        "jenis_kendaraan": "sepeda motor",
        "spbu_id": (await prisma.device.findFirst({
          where: {
            device_id: '091039535e1a29'
          }
        })).spbu_id,
        "jumlah": 123.96,
        "nomor_stnk": "98762848",
        "user_id": (await prisma.user.findFirst({
          where: {
            email: 'pkmaioits@email.com'
          }
        })).id,
        "bbm_id": (await prisma.bbm.findFirst({
          where: {
            name: 'Pertamina Dex'
          }
        })).id,
        createdAt: new Date("2023-03-01")
      },
      {
        "kategori_pengisian": "subsidi",
        "device_id": "07a6403e21e306",
        "jenis_kendaraan": "sepeda motor",
        "spbu_id": (await prisma.device.findFirst({
          where: {
            device_id: '07a6403e21e306'
          }
        })).spbu_id,
        "jumlah": 123.96,
        "nomor_stnk": "98762848",
        "user_id": (await prisma.user.findFirst({
          where: {
            email: 'pkmaioits@email.com'
          }
        })).id,
        "bbm_id": (await prisma.bbm.findFirst({
          where: {
            name: 'Solar / Biodiesel'
          }
        })).id,
        createdAt: new Date("2023-03-01")
      },
      {
        "kategori_pengisian": "non_subsidi",
        "device_id": "587fb4f77520a8",
        "jenis_kendaraan": "mobil",
        "spbu_id": (await prisma.device.findFirst({
          where: {
            device_id: '587fb4f77520a8'
          }
        })).spbu_id,
        "jumlah": 123.96,
        "nomor_stnk": "98762848",
        "user_id": (await prisma.user.findFirst({
          where: {
            email: 'pkmaioits@email.com'
          }
        })).id,
        "bbm_id": (await prisma.bbm.findFirst({
          where: {
            name: 'Pertamina Dex'
          }
        })).id,
        createdAt: new Date("2023-03-01")
      },
      {
        "kategori_pengisian": "subsidi",
        "device_id": "fbb2efc5c6bf77",
        "jenis_kendaraan": "mobil",
        "spbu_id": (await prisma.device.findFirst({
          where: {
            device_id: 'fbb2efc5c6bf77'
          }
        })).spbu_id,
        "jumlah": 123.96,
        "nomor_stnk": "98762848",
        "user_id": (await prisma.user.findFirst({
          where: {
            email: 'pkmaioits@email.com'
          }
        })).id,
        "bbm_id": (await prisma.bbm.findFirst({
          where: {
            name: 'Pertamax Turbo'
          }
        })).id,
        createdAt: new Date("2023-03-01")
      },
      {
        "kategori_pengisian": "non_subsidi",
        "device_id": "495dd0256542c2",
        "jenis_kendaraan": "sepeda motor",
        "spbu_id": (await prisma.device.findFirst({
          where: {
            device_id: '495dd0256542c2'
          }
        })).spbu_id,
        "jumlah": 123.96,
        "nomor_stnk": "98762848",
        "user_id": (await prisma.user.findFirst({
          where: {
            email: 'pkmaioits@email.com'
          }
        })).id,
        "bbm_id": (await prisma.bbm.findFirst({
          where: {
            name: 'Solar / Biodiesel'
          }
        })).id,
        createdAt: new Date("2023-03-01")
      },
      {
        "kategori_pengisian": "subsidi",
        "device_id": "b34284fa9d9267",
        "jenis_kendaraan": "mobil",
        "spbu_id": (await prisma.device.findFirst({
          where: {
            device_id: 'b34284fa9d9267'
          }
        })).spbu_id,
        "jumlah": 123.96,
        "nomor_stnk": "98762848",
        "user_id": (await prisma.user.findFirst({
          where: {
            email: 'pkmaioits@email.com'
          }
        })).id,
        "bbm_id": (await prisma.bbm.findFirst({
          where: {
            name: 'Pertamina Dex'
          }
        })).id,
        createdAt: new Date("2023-03-01")
      },
      {
        "kategori_pengisian": "non_subsidi",
        "device_id": "44a6a79d317500",
        "jenis_kendaraan": "sepeda motor",
        "spbu_id": (await prisma.device.findFirst({
          where: {
            device_id: '44a6a79d317500'
          }
        })).spbu_id,
        "jumlah": 123.96,
        "nomor_stnk": "98762848",
        "user_id": (await prisma.user.findFirst({
          where: {
            email: 'pkmaioits@email.com'
          }
        })).id,
        "bbm_id": (await prisma.bbm.findFirst({
          where: {
            name: 'Pertamax'
          }
        })).id,
        createdAt: new Date("2023-03-01")
      },
      {
        "kategori_pengisian": "subsidi",
        "device_id": "a66ba172961f6d",
        "jenis_kendaraan": "truk",
        "spbu_id": (await prisma.device.findFirst({
          where: {
            device_id: 'a66ba172961f6d'
          }
        })).spbu_id,
        "jumlah": 123.96,
        "nomor_stnk": "98762848",
        "user_id": (await prisma.user.findFirst({
          where: {
            email: 'pkmaioits@email.com'
          }
        })).id,
        "bbm_id": (await prisma.bbm.findFirst({
          where: {
            name: 'Pertamax'
          }
        })).id,
        createdAt: new Date("2023-04-01")
      },
      {
        "kategori_pengisian": "subsidi",
        "device_id": "1c81fd1eb5b203",
        "jenis_kendaraan": "truk",
        "spbu_id": (await prisma.device.findFirst({
          where: {
            device_id: '1c81fd1eb5b203'
          }
        })).spbu_id,
        "jumlah": 123.96,
        "nomor_stnk": "98762848",
        "user_id": (await prisma.user.findFirst({
          where: {
            email: 'pkmaioits@email.com'
          }
        })).id,
        "bbm_id": (await prisma.bbm.findFirst({
          where: {
            name: 'Pertamax Turbo'
          }
        })).id,
        createdAt: new Date("2023-04-01")
      },
      {
        "kategori_pengisian": "subsidi",
        "device_id": "fbb2efc5c6bf77",
        "jenis_kendaraan": "mobil",
        "spbu_id": (await prisma.device.findFirst({
          where: {
            device_id: 'fbb2efc5c6bf77'
          }
        })).spbu_id,
        "jumlah": 123.96,
        "nomor_stnk": "98762848",
        "user_id": (await prisma.user.findFirst({
          where: {
            email: 'pkmaioits@email.com'
          }
        })).id,
        "bbm_id": (await prisma.bbm.findFirst({
          where: {
            name: 'Dexlite'
          }
        })).id,
        createdAt: new Date("2023-04-01")
      },
      {
        "kategori_pengisian": "subsidi",
        "device_id": "ed1476481360c7",
        "jenis_kendaraan": "bus",
        "spbu_id": (await prisma.device.findFirst({
          where: {
            device_id: 'ed1476481360c7'
          }
        })).spbu_id,
        "jumlah": 123.96,
        "nomor_stnk": "98762848",
        "user_id": (await prisma.user.findFirst({
          where: {
            email: 'pkmaioits@email.com'
          }
        })).id,
        "bbm_id": (await prisma.bbm.findFirst({
          where: {
            name: 'Pertalite'
          }
        })).id,
        createdAt: new Date("2023-04-01")
      },
      {
        "kategori_pengisian": "non_subsidi",
        "device_id": "495dd0256542c2",
        "jenis_kendaraan": "bus",
        "spbu_id": (await prisma.device.findFirst({
          where: {
            device_id: '495dd0256542c2'
          }
        })).spbu_id,
        "jumlah": 123.96,
        "nomor_stnk": "98762848",
        "user_id": (await prisma.user.findFirst({
          where: {
            email: 'pkmaioits@email.com'
          }
        })).id,
        "bbm_id": (await prisma.bbm.findFirst({
          where: {
            name: 'Pertamax Turbo'
          }
        })).id,
        createdAt: new Date("2023-04-01")
      },
      {
        "kategori_pengisian": "non_subsidi",
        "device_id": "495dd0256542c2",
        "jenis_kendaraan": "mobil",
        "spbu_id": (await prisma.device.findFirst({
          where: {
            device_id: '495dd0256542c2'
          }
        })).spbu_id,
        "jumlah": 123.96,
        "nomor_stnk": "98762848",
        "user_id": (await prisma.user.findFirst({
          where: {
            email: 'pkmaioits@email.com'
          }
        })).id,
        "bbm_id": (await prisma.bbm.findFirst({
          where: {
            name: 'Pertalite'
          }
        })).id,
        createdAt: new Date("2023-04-01")
      },
      {
        "kategori_pengisian": "subsidi",
        "device_id": "615bb72bee9b6f",
        "jenis_kendaraan": "sepeda motor",
        "spbu_id": (await prisma.device.findFirst({
          where: {
            device_id: '615bb72bee9b6f'
          }
        })).spbu_id,
        "jumlah": 123.96,
        "nomor_stnk": "98762848",
        "user_id": (await prisma.user.findFirst({
          where: {
            email: 'pkmaioits@email.com'
          }
        })).id,
        "bbm_id": (await prisma.bbm.findFirst({
          where: {
            name: 'Pertamina Dex'
          }
        })).id,
        createdAt: new Date("2023-04-01")
      },
      {
        "kategori_pengisian": "non_subsidi",
        "device_id": "43d5643ccef962",
        "jenis_kendaraan": "truk",
        "spbu_id": (await prisma.device.findFirst({
          where: {
            device_id: '43d5643ccef962'
          }
        })).spbu_id,
        "jumlah": 123.96,
        "nomor_stnk": "98762848",
        "user_id": (await prisma.user.findFirst({
          where: {
            email: 'pkmaioits@email.com'
          }
        })).id,
        "bbm_id": (await prisma.bbm.findFirst({
          where: {
            name: 'Dexlite'
          }
        })).id,
        createdAt: new Date("2023-04-01")
      },
      {
        "kategori_pengisian": "non_subsidi",
        "device_id": "615bb72bee9b6f",
        "jenis_kendaraan": "truk",
        "spbu_id": (await prisma.device.findFirst({
          where: {
            device_id: '615bb72bee9b6f'
          }
        })).spbu_id,
        "jumlah": 123.96,
        "nomor_stnk": "98762848",
        "user_id": (await prisma.user.findFirst({
          where: {
            email: 'pkmaioits@email.com'
          }
        })).id,
        "bbm_id": (await prisma.bbm.findFirst({
          where: {
            name: 'Pertamax Turbo'
          }
        })).id,
        createdAt: new Date("2023-04-01")
      },
      {
        "kategori_pengisian": "subsidi",
        "device_id": "fbb2efc5c6bf77",
        "jenis_kendaraan": "bus",
        "spbu_id": (await prisma.device.findFirst({
          where: {
            device_id: 'fbb2efc5c6bf77'
          }
        })).spbu_id,
        "jumlah": 123.96,
        "nomor_stnk": "98762848",
        "user_id": (await prisma.user.findFirst({
          where: {
            email: 'pkmaioits@email.com'
          }
        })).id,
        "bbm_id": (await prisma.bbm.findFirst({
          where: {
            name: 'Pertamina Dex'
          }
        })).id,
        createdAt: new Date("2023-04-01")
      },
      {
        "kategori_pengisian": "subsidi",
        "device_id": "495dd0256542c2",
        "jenis_kendaraan": "truk",
        "spbu_id": (await prisma.device.findFirst({
          where: {
            device_id: '495dd0256542c2'
          }
        })).spbu_id,
        "jumlah": 123.96,
        "nomor_stnk": "98762848",
        "user_id": (await prisma.user.findFirst({
          where: {
            email: 'pkmaioits@email.com'
          }
        })).id,
        "bbm_id": (await prisma.bbm.findFirst({
          where: {
            name: 'Solar / Biodiesel'
          }
        })).id,
        createdAt: new Date("2023-05-01")
      },
      {
        "kategori_pengisian": "non_subsidi",
        "device_id": "495dd0256542c2",
        "jenis_kendaraan": "truk",
        "spbu_id": (await prisma.device.findFirst({
          where: {
            device_id: '495dd0256542c2'
          }
        })).spbu_id,
        "jumlah": 123.96,
        "nomor_stnk": "98762848",
        "user_id": (await prisma.user.findFirst({
          where: {
            email: 'pkmaioits@email.com'
          }
        })).id,
        "bbm_id": (await prisma.bbm.findFirst({
          where: {
            name: 'Pertalite'
          }
        })).id,
        createdAt: new Date("2023-05-01")
      },
      {
        "kategori_pengisian": "subsidi",
        "device_id": "1c81fd1eb5b203",
        "jenis_kendaraan": "mobil",
        "spbu_id": (await prisma.device.findFirst({
          where: {
            device_id: '1c81fd1eb5b203'
          }
        })).spbu_id,
        "jumlah": 123.96,
        "nomor_stnk": "98762848",
        "user_id": (await prisma.user.findFirst({
          where: {
            email: 'pkmaioits@email.com'
          }
        })).id,
        "bbm_id": (await prisma.bbm.findFirst({
          where: {
            name: 'Pertalite'
          }
        })).id,
        createdAt: new Date("2023-05-01")
      },
      {
        "kategori_pengisian": "non_subsidi",
        "device_id": "44a6a79d317500",
        "jenis_kendaraan": "truk",
        "spbu_id": (await prisma.device.findFirst({
          where: {
            device_id: '44a6a79d317500'
          }
        })).spbu_id,
        "jumlah": 123.96,
        "nomor_stnk": "98762848",
        "user_id": (await prisma.user.findFirst({
          where: {
            email: 'pkmaioits@email.com'
          }
        })).id,
        "bbm_id": (await prisma.bbm.findFirst({
          where: {
            name: 'Pertamina Dex'
          }
        })).id,
        createdAt: new Date("2023-05-01")
      },
      {
        "kategori_pengisian": "non_subsidi",
        "device_id": "f5543cf6cad9d7",
        "jenis_kendaraan": "mobil",
        "spbu_id": (await prisma.device.findFirst({
          where: {
            device_id: 'f5543cf6cad9d7'
          }
        })).spbu_id,
        "jumlah": 123.96,
        "nomor_stnk": "98762848",
        "user_id": (await prisma.user.findFirst({
          where: {
            email: 'pkmaioits@email.com'
          }
        })).id,
        "bbm_id": (await prisma.bbm.findFirst({
          where: {
            name: 'Pertamax Turbo'
          }
        })).id,
        createdAt: new Date("2023-05-01")
      },
      {
        "kategori_pengisian": "subsidi",
        "device_id": "495dd0256542c2",
        "jenis_kendaraan": "mobil",
        "spbu_id": (await prisma.device.findFirst({
          where: {
            device_id: '495dd0256542c2'
          }
        })).spbu_id,
        "jumlah": 123.96,
        "nomor_stnk": "98762848",
        "user_id": (await prisma.user.findFirst({
          where: {
            email: 'pkmaioits@email.com'
          }
        })).id,
        "bbm_id": (await prisma.bbm.findFirst({
          where: {
            name: 'Dexlite'
          }
        })).id,
        createdAt: new Date("2023-05-01")
      },
      {
        "kategori_pengisian": "non_subsidi",
        "device_id": "b34284fa9d9267",
        "jenis_kendaraan": "mobil",
        "spbu_id": (await prisma.device.findFirst({
          where: {
            device_id: 'b34284fa9d9267'
          }
        })).spbu_id,
        "jumlah": 123.96,
        "nomor_stnk": "98762848",
        "user_id": (await prisma.user.findFirst({
          where: {
            email: 'pkmaioits@email.com'
          }
        })).id,
        "bbm_id": (await prisma.bbm.findFirst({
          where: {
            name: 'Pertamax'
          }
        })).id,
        createdAt: new Date("2023-05-01")
      },
      {
        "kategori_pengisian": "non_subsidi",
        "device_id": "1c81fd1eb5b203",
        "jenis_kendaraan": "mobil",
        "spbu_id": (await prisma.device.findFirst({
          where: {
            device_id: '1c81fd1eb5b203'
          }
        })).spbu_id,
        "jumlah": 123.96,
        "nomor_stnk": "98762848",
        "user_id": (await prisma.user.findFirst({
          where: {
            email: 'pkmaioits@email.com'
          }
        })).id,
        "bbm_id": (await prisma.bbm.findFirst({
          where: {
            name: 'Dexlite'
          }
        })).id,
        createdAt: new Date("2023-05-01")
      },
      {
        "kategori_pengisian": "non_subsidi",
        "device_id": "495dd0256542c2",
        "jenis_kendaraan": "bus",
        "spbu_id": (await prisma.device.findFirst({
          where: {
            device_id: '495dd0256542c2'
          }
        })).spbu_id,
        "jumlah": 123.96,
        "nomor_stnk": "98762848",
        "user_id": (await prisma.user.findFirst({
          where: {
            email: 'pkmaioits@email.com'
          }
        })).id,
        "bbm_id": (await prisma.bbm.findFirst({
          where: {
            name: 'Solar / Biodiesel'
          }
        })).id,
        createdAt: new Date("2023-05-01")
      },
      {
        "kategori_pengisian": "subsidi",
        "device_id": "fbb2efc5c6bf77",
        "jenis_kendaraan": "bus",
        "spbu_id": (await prisma.device.findFirst({
          where: {
            device_id: 'fbb2efc5c6bf77'
          }
        })).spbu_id,
        "jumlah": 123.96,
        "nomor_stnk": "98762848",
        "user_id": (await prisma.user.findFirst({
          where: {
            email: 'pkmaioits@email.com'
          }
        })).id,
        "bbm_id": (await prisma.bbm.findFirst({
          where: {
            name: 'Solar / Biodiesel'
          }
        })).id,
        createdAt: new Date("2023-05-01")
      },
      {
        "kategori_pengisian": "non_subsidi",
        "device_id": "b34284fa9d9267",
        "jenis_kendaraan": "sepeda motor",
        "spbu_id": (await prisma.device.findFirst({
          where: {
            device_id: 'b34284fa9d9267'
          }
        })).spbu_id,
        "jumlah": 123.96,
        "nomor_stnk": "98762848",
        "user_id": (await prisma.user.findFirst({
          where: {
            email: 'pkmaioits@email.com'
          }
        })).id,
        "bbm_id": (await prisma.bbm.findFirst({
          where: {
            name: 'Pertamax Turbo'
          }
        })).id,
        createdAt: new Date("2023-05-01")
      },
      {
        "kategori_pengisian": "non_subsidi",
        "device_id": "c71dda6bd35086",
        "jenis_kendaraan": "bus",
        "spbu_id": (await prisma.device.findFirst({
          where: {
            device_id: 'c71dda6bd35086'
          }
        })).spbu_id,
        "jumlah": 123.96,
        "nomor_stnk": "98762848",
        "user_id": (await prisma.user.findFirst({
          where: {
            email: 'pkmaioits@email.com'
          }
        })).id,
        "bbm_id": (await prisma.bbm.findFirst({
          where: {
            name: 'Dexlite'
          }
        })).id,
        createdAt: new Date("2023-05-01")
      },
      {
        "kategori_pengisian": "subsidi",
        "device_id": "495dd0256542c2",
        "jenis_kendaraan": "mobil",
        "spbu_id": (await prisma.device.findFirst({
          where: {
            device_id: '495dd0256542c2'
          }
        })).spbu_id,
        "jumlah": 123.96,
        "nomor_stnk": "98762848",
        "user_id": (await prisma.user.findFirst({
          where: {
            email: 'pkmaioits@email.com'
          }
        })).id,
        "bbm_id": (await prisma.bbm.findFirst({
          where: {
            name: 'Pertalite'
          }
        })).id,
        createdAt: new Date("2023-05-01")
      },
      {
        "kategori_pengisian": "non_subsidi",
        "device_id": "a66ba172961f6d",
        "jenis_kendaraan": "mobil",
        "spbu_id": (await prisma.device.findFirst({
          where: {
            device_id: 'a66ba172961f6d'
          }
        })).spbu_id,
        "jumlah": 123.96,
        "nomor_stnk": "98762848",
        "user_id": (await prisma.user.findFirst({
          where: {
            email: 'pkmaioits@email.com'
          }
        })).id,
        "bbm_id": (await prisma.bbm.findFirst({
          where: {
            name: 'Solar / Biodiesel'
          }
        })).id,
        createdAt: new Date("2023-05-01")
      },
      {
        "kategori_pengisian": "non_subsidi",
        "device_id": "07a6403e21e306",
        "jenis_kendaraan": "sepeda motor",
        "spbu_id": (await prisma.device.findFirst({
          where: {
            device_id: '07a6403e21e306'
          }
        })).spbu_id,
        "jumlah": 123.96,
        "nomor_stnk": "98762848",
        "user_id": (await prisma.user.findFirst({
          where: {
            email: 'pkmaioits@email.com'
          }
        })).id,
        "bbm_id": (await prisma.bbm.findFirst({
          where: {
            name: 'Pertamax Turbo'
          }
        })).id,
        createdAt: new Date("2023-06-01")
      },
      {
        "kategori_pengisian": "subsidi",
        "device_id": "a66ba172961f6d",
        "jenis_kendaraan": "truk",
        "spbu_id": (await prisma.device.findFirst({
          where: {
            device_id: 'a66ba172961f6d'
          }
        })).spbu_id,
        "jumlah": 123.96,
        "nomor_stnk": "98762848",
        "user_id": (await prisma.user.findFirst({
          where: {
            email: 'pkmaioits@email.com'
          }
        })).id,
        "bbm_id": (await prisma.bbm.findFirst({
          where: {
            name: 'Pertamax Turbo'
          }
        })).id,
        createdAt: new Date("2023-06-01")
      },
      {
        "kategori_pengisian": "non_subsidi",
        "device_id": "cf5b904e594214",
        "jenis_kendaraan": "mobil",
        "spbu_id": (await prisma.device.findFirst({
          where: {
            device_id: 'cf5b904e594214'
          }
        })).spbu_id,
        "jumlah": 123.96,
        "nomor_stnk": "98762848",
        "user_id": (await prisma.user.findFirst({
          where: {
            email: 'pkmaioits@email.com'
          }
        })).id,
        "bbm_id": (await prisma.bbm.findFirst({
          where: {
            name: 'Pertamax Turbo'
          }
        })).id,
        createdAt: new Date("2023-06-01")
      },
      {
        "kategori_pengisian": "non_subsidi",
        "device_id": "07a6403e21e306",
        "jenis_kendaraan": "truk",
        "spbu_id": (await prisma.device.findFirst({
          where: {
            device_id: '07a6403e21e306'
          }
        })).spbu_id,
        "jumlah": 123.96,
        "nomor_stnk": "98762848",
        "user_id": (await prisma.user.findFirst({
          where: {
            email: 'pkmaioits@email.com'
          }
        })).id,
        "bbm_id": (await prisma.bbm.findFirst({
          where: {
            name: 'Pertamax'
          }
        })).id,
        createdAt: new Date("2023-06-01")
      },
      {
        "kategori_pengisian": "subsidi",
        "device_id": "c71dda6bd35086",
        "jenis_kendaraan": "truk",
        "spbu_id": (await prisma.device.findFirst({
          where: {
            device_id: 'c71dda6bd35086'
          }
        })).spbu_id,
        "jumlah": 123.96,
        "nomor_stnk": "98762848",
        "user_id": (await prisma.user.findFirst({
          where: {
            email: 'pkmaioits@email.com'
          }
        })).id,
        "bbm_id": (await prisma.bbm.findFirst({
          where: {
            name: 'Pertamax'
          }
        })).id,
        createdAt: new Date("2023-06-01")
      },
      {
        "kategori_pengisian": "subsidi",
        "device_id": "587fb4f77520a8",
        "jenis_kendaraan": "mobil",
        "spbu_id": (await prisma.device.findFirst({
          where: {
            device_id: '587fb4f77520a8'
          }
        })).spbu_id,
        "jumlah": 123.96,
        "nomor_stnk": "98762848",
        "user_id": (await prisma.user.findFirst({
          where: {
            email: 'pkmaioits@email.com'
          }
        })).id,
        "bbm_id": (await prisma.bbm.findFirst({
          where: {
            name: 'Pertamax Turbo'
          }
        })).id,
        createdAt: new Date("2023-06-01")
      },
      {
        "kategori_pengisian": "non_subsidi",
        "device_id": "587fb4f77520a8",
        "jenis_kendaraan": "bus",
        "spbu_id": (await prisma.device.findFirst({
          where: {
            device_id: '587fb4f77520a8'
          }
        })).spbu_id,
        "jumlah": 123.96,
        "nomor_stnk": "98762848",
        "user_id": (await prisma.user.findFirst({
          where: {
            email: 'pkmaioits@email.com'
          }
        })).id,
        "bbm_id": (await prisma.bbm.findFirst({
          where: {
            name: 'Pertamina Dex'
          }
        })).id,
        createdAt: new Date("2023-06-01")
      },
      {
        "kategori_pengisian": "non_subsidi",
        "device_id": "43d5643ccef962",
        "jenis_kendaraan": "sepeda motor",
        "spbu_id": (await prisma.device.findFirst({
          where: {
            device_id: '43d5643ccef962'
          }
        })).spbu_id,
        "jumlah": 123.96,
        "nomor_stnk": "98762848",
        "user_id": (await prisma.user.findFirst({
          where: {
            email: 'pkmaioits@email.com'
          }
        })).id,
        "bbm_id": (await prisma.bbm.findFirst({
          where: {
            name: 'Pertamax Turbo'
          }
        })).id,
        createdAt: new Date("2023-06-01")
      },
      {
        "kategori_pengisian": "subsidi",
        "device_id": "44a6a79d317500",
        "jenis_kendaraan": "mobil",
        "spbu_id": (await prisma.device.findFirst({
          where: {
            device_id: '44a6a79d317500'
          }
        })).spbu_id,
        "jumlah": 123.96,
        "nomor_stnk": "98762848",
        "user_id": (await prisma.user.findFirst({
          where: {
            email: 'pkmaioits@email.com'
          }
        })).id,
        "bbm_id": (await prisma.bbm.findFirst({
          where: {
            name: 'Pertamina Dex'
          }
        })).id,
        createdAt: new Date("2023-07-01")
      },
      {
        "kategori_pengisian": "subsidi",
        "device_id": "1c81fd1eb5b203",
        "jenis_kendaraan": "mobil",
        "spbu_id": (await prisma.device.findFirst({
          where: {
            device_id: '1c81fd1eb5b203'
          }
        })).spbu_id,
        "jumlah": 123.96,
        "nomor_stnk": "98762848",
        "user_id": (await prisma.user.findFirst({
          where: {
            email: 'pkmaioits@email.com'
          }
        })).id,
        "bbm_id": (await prisma.bbm.findFirst({
          where: {
            name: 'Pertamina Dex'
          }
        })).id,
        createdAt: new Date("2023-07-01")
      },
      {
        "kategori_pengisian": "non_subsidi",
        "device_id": "cf5b904e594214",
        "jenis_kendaraan": "mobil",
        "spbu_id": (await prisma.device.findFirst({
          where: {
            device_id: 'cf5b904e594214'
          }
        })).spbu_id,
        "jumlah": 123.96,
        "nomor_stnk": "98762848",
        "user_id": (await prisma.user.findFirst({
          where: {
            email: 'pkmaioits@email.com'
          }
        })).id,
        "bbm_id": (await prisma.bbm.findFirst({
          where: {
            name: 'Pertamax Turbo'
          }
        })).id,
        createdAt: new Date("2023-07-01")
      },
      {
        "kategori_pengisian": "non_subsidi",
        "device_id": "587fb4f77520a8",
        "jenis_kendaraan": "bus",
        "spbu_id": (await prisma.device.findFirst({
          where: {
            device_id: '587fb4f77520a8'
          }
        })).spbu_id,
        "jumlah": 123.96,
        "nomor_stnk": "98762848",
        "user_id": (await prisma.user.findFirst({
          where: {
            email: 'pkmaioits@email.com'
          }
        })).id,
        "bbm_id": (await prisma.bbm.findFirst({
          where: {
            name: 'Dexlite'
          }
        })).id,
        createdAt: new Date("2023-07-01")
      },
      {
        "kategori_pengisian": "non_subsidi",
        "device_id": "091039535e1a29",
        "jenis_kendaraan": "bus",
        "spbu_id": (await prisma.device.findFirst({
          where: {
            device_id: '091039535e1a29'
          }
        })).spbu_id,
        "jumlah": 123.96,
        "nomor_stnk": "98762848",
        "user_id": (await prisma.user.findFirst({
          where: {
            email: 'pkmaioits@email.com'
          }
        })).id,
        "bbm_id": (await prisma.bbm.findFirst({
          where: {
            name: 'Pertamax Turbo'
          }
        })).id,
        createdAt: new Date("2023-07-01")
      },
      {
        "kategori_pengisian": "non_subsidi",
        "device_id": "3595f32ada1da5",
        "jenis_kendaraan": "mobil",
        "spbu_id": (await prisma.device.findFirst({
          where: {
            device_id: '3595f32ada1da5'
          }
        })).spbu_id,
        "jumlah": 123.96,
        "nomor_stnk": "98762848",
        "user_id": (await prisma.user.findFirst({
          where: {
            email: 'pkmaioits@email.com'
          }
        })).id,
        "bbm_id": (await prisma.bbm.findFirst({
          where: {
            name: 'Pertamina Dex'
          }
        })).id,
        createdAt: new Date("2023-07-01")
      },
      {
        "kategori_pengisian": "non_subsidi",
        "device_id": "f5543cf6cad9d7",
        "jenis_kendaraan": "bus",
        "spbu_id": (await prisma.device.findFirst({
          where: {
            device_id: 'f5543cf6cad9d7'
          }
        })).spbu_id,
        "jumlah": 123.96,
        "nomor_stnk": "98762848",
        "user_id": (await prisma.user.findFirst({
          where: {
            email: 'pkmaioits@email.com'
          }
        })).id,
        "bbm_id": (await prisma.bbm.findFirst({
          where: {
            name: 'Dexlite'
          }
        })).id,
        createdAt: new Date("2023-07-01")
      },
      {
        "kategori_pengisian": "non_subsidi",
        "device_id": "260ec23e1eae1a",
        "jenis_kendaraan": "bus",
        "spbu_id": (await prisma.device.findFirst({
          where: {
            device_id: '260ec23e1eae1a'
          }
        })).spbu_id,
        "jumlah": 123.96,
        "nomor_stnk": "98762848",
        "user_id": (await prisma.user.findFirst({
          where: {
            email: 'pkmaioits@email.com'
          }
        })).id,
        "bbm_id": (await prisma.bbm.findFirst({
          where: {
            name: 'Pertamina Dex'
          }
        })).id,
        createdAt: new Date("2023-07-01")
      },
      {
        "kategori_pengisian": "subsidi",
        "device_id": "587fb4f77520a8",
        "jenis_kendaraan": "sepeda motor",
        "spbu_id": (await prisma.device.findFirst({
          where: {
            device_id: '587fb4f77520a8'
          }
        })).spbu_id,
        "jumlah": 123.96,
        "nomor_stnk": "98762848",
        "user_id": (await prisma.user.findFirst({
          where: {
            email: 'pkmaioits@email.com'
          }
        })).id,
        "bbm_id": (await prisma.bbm.findFirst({
          where: {
            name: 'Pertamax Turbo'
          }
        })).id,
        createdAt: new Date("2023-07-01")
      },
      {
        "kategori_pengisian": "subsidi",
        "device_id": "f5543cf6cad9d7",
        "jenis_kendaraan": "truk",
        "spbu_id": (await prisma.device.findFirst({
          where: {
            device_id: 'f5543cf6cad9d7'
          }
        })).spbu_id,
        "jumlah": 123.96,
        "nomor_stnk": "98762848",
        "user_id": (await prisma.user.findFirst({
          where: {
            email: 'pkmaioits@email.com'
          }
        })).id,
        "bbm_id": (await prisma.bbm.findFirst({
          where: {
            name: 'Solar / Biodiesel'
          }
        })).id,
        createdAt: new Date("2023-07-01")
      },
      {
        "kategori_pengisian": "subsidi",
        "device_id": "02808d4e78cb79",
        "jenis_kendaraan": "truk",
        "spbu_id": (await prisma.device.findFirst({
          where: {
            device_id: '02808d4e78cb79'
          }
        })).spbu_id,
        "jumlah": 125.38,
        "nomor_stnk": "98762848",
        "user_id": (await prisma.user.findFirst({
          where: {
            email: 'pkmaioits@email.com'
          }
        })).id,
        "bbm_id": (await prisma.bbm.findFirst({
          where: {
            name: 'Solar / Biodiesel'
          }
        })).id,
        createdAt: new Date("2023-08-01")
      },
      {
        "kategori_pengisian": "subsidi",
        "device_id": "43d5643ccef962",
        "jenis_kendaraan": "truk",
        "spbu_id": (await prisma.device.findFirst({
          where: {
            device_id: '43d5643ccef962'
          }
        })).spbu_id,
        "jumlah": 125.38,
        "nomor_stnk": "98762848",
        "user_id": (await prisma.user.findFirst({
          where: {
            email: 'pkmaioits@email.com'
          }
        })).id,
        "bbm_id": (await prisma.bbm.findFirst({
          where: {
            name: 'Pertamax'
          }
        })).id,
        createdAt: new Date("2023-08-01")
      },
      {
        "kategori_pengisian": "subsidi",
        "device_id": "43d5643ccef962",
        "jenis_kendaraan": "truk",
        "spbu_id": (await prisma.device.findFirst({
          where: {
            device_id: '43d5643ccef962'
          }
        })).spbu_id,
        "jumlah": 125.38,
        "nomor_stnk": "98762848",
        "user_id": (await prisma.user.findFirst({
          where: {
            email: 'pkmaioits@email.com'
          }
        })).id,
        "bbm_id": (await prisma.bbm.findFirst({
          where: {
            name: 'Pertamax Turbo'
          }
        })).id,
        createdAt: new Date("2023-08-01")
      },
      {
        "kategori_pengisian": "subsidi",
        "device_id": "44a6a79d317500",
        "jenis_kendaraan": "mobil",
        "spbu_id": (await prisma.device.findFirst({
          where: {
            device_id: '44a6a79d317500'
          }
        })).spbu_id,
        "jumlah": 125.38,
        "nomor_stnk": "98762848",
        "user_id": (await prisma.user.findFirst({
          where: {
            email: 'pkmaioits@email.com'
          }
        })).id,
        "bbm_id": (await prisma.bbm.findFirst({
          where: {
            name: 'Pertalite'
          }
        })).id,
        createdAt: new Date("2023-08-01")
      },
      {
        "kategori_pengisian": "non_subsidi",
        "device_id": "cf5b904e594214",
        "jenis_kendaraan": "sepeda motor",
        "spbu_id": (await prisma.device.findFirst({
          where: {
            device_id: 'cf5b904e594214'
          }
        })).spbu_id,
        "jumlah": 125.38,
        "nomor_stnk": "98762848",
        "user_id": (await prisma.user.findFirst({
          where: {
            email: 'pkmaioits@email.com'
          }
        })).id,
        "bbm_id": (await prisma.bbm.findFirst({
          where: {
            name: 'Pertamax Turbo'
          }
        })).id,
        createdAt: new Date("2023-08-01")
      },
      {
        "kategori_pengisian": "non_subsidi",
        "device_id": "b34284fa9d9267",
        "jenis_kendaraan": "sepeda motor",
        "spbu_id": (await prisma.device.findFirst({
          where: {
            device_id: 'b34284fa9d9267'
          }
        })).spbu_id,
        "jumlah": 125.38,
        "nomor_stnk": "98762848",
        "user_id": (await prisma.user.findFirst({
          where: {
            email: 'pkmaioits@email.com'
          }
        })).id,
        "bbm_id": (await prisma.bbm.findFirst({
          where: {
            name: 'Pertamax Turbo'
          }
        })).id,
        createdAt: new Date("2023-08-01")
      },
      {
        "kategori_pengisian": "non_subsidi",
        "device_id": "b34284fa9d9267",
        "jenis_kendaraan": "bus",
        "spbu_id": (await prisma.device.findFirst({
          where: {
            device_id: 'b34284fa9d9267'
          }
        })).spbu_id,
        "jumlah": 125.38,
        "nomor_stnk": "98762848",
        "user_id": (await prisma.user.findFirst({
          where: {
            email: 'pkmaioits@email.com'
          }
        })).id,
        "bbm_id": (await prisma.bbm.findFirst({
          where: {
            name: 'Pertamax'
          }
        })).id,
        createdAt: new Date("2023-08-01")
      },
      {
        "kategori_pengisian": "subsidi",
        "device_id": "1c81fd1eb5b203",
        "jenis_kendaraan": "bus",
        "spbu_id": (await prisma.device.findFirst({
          where: {
            device_id: '1c81fd1eb5b203'
          }
        })).spbu_id,
        "jumlah": 125.38,
        "nomor_stnk": "98762848",
        "user_id": (await prisma.user.findFirst({
          where: {
            email: 'pkmaioits@email.com'
          }
        })).id,
        "bbm_id": (await prisma.bbm.findFirst({
          where: {
            name: 'Solar / Biodiesel'
          }
        })).id,
        createdAt: new Date("2023-08-01")
      },
      {
        "kategori_pengisian": "non_subsidi",
        "device_id": "44a6a79d317500",
        "jenis_kendaraan": "mobil",
        "spbu_id": (await prisma.device.findFirst({
          where: {
            device_id: '44a6a79d317500'
          }
        })).spbu_id,
        "jumlah": 125.38,
        "nomor_stnk": "98762848",
        "user_id": (await prisma.user.findFirst({
          where: {
            email: 'pkmaioits@email.com'
          }
        })).id,
        "bbm_id": (await prisma.bbm.findFirst({
          where: {
            name: 'Dexlite'
          }
        })).id,
        createdAt: new Date("2023-08-01")
      },
      {
        "kategori_pengisian": "subsidi",
        "device_id": "f5543cf6cad9d7",
        "jenis_kendaraan": "sepeda motor",
        "spbu_id": (await prisma.device.findFirst({
          where: {
            device_id: 'f5543cf6cad9d7'
          }
        })).spbu_id,
        "jumlah": 125.38,
        "nomor_stnk": "98762848",
        "user_id": (await prisma.user.findFirst({
          where: {
            email: 'pkmaioits@email.com'
          }
        })).id,
        "bbm_id": (await prisma.bbm.findFirst({
          where: {
            name: 'Dexlite'
          }
        })).id,
        createdAt: new Date("2023-09-01")
      },
      {
        "kategori_pengisian": "non_subsidi",
        "device_id": "fbb2efc5c6bf77",
        "jenis_kendaraan": "bus",
        "spbu_id": (await prisma.device.findFirst({
          where: {
            device_id: 'fbb2efc5c6bf77'
          }
        })).spbu_id,
        "jumlah": 125.38,
        "nomor_stnk": "98762848",
        "user_id": (await prisma.user.findFirst({
          where: {
            email: 'pkmaioits@email.com'
          }
        })).id,
        "bbm_id": (await prisma.bbm.findFirst({
          where: {
            name: 'Pertamax Turbo'
          }
        })).id,
        createdAt: new Date("2023-09-01")
      },
      {
        "kategori_pengisian": "subsidi",
        "device_id": "c71dda6bd35086",
        "jenis_kendaraan": "truk",
        "spbu_id": (await prisma.device.findFirst({
          where: {
            device_id: 'c71dda6bd35086'
          }
        })).spbu_id,
        "jumlah": 125.38,
        "nomor_stnk": "98762848",
        "user_id": (await prisma.user.findFirst({
          where: {
            email: 'pkmaioits@email.com'
          }
        })).id,
        "bbm_id": (await prisma.bbm.findFirst({
          where: {
            name: 'Pertalite'
          }
        })).id,
        createdAt: new Date("2023-09-01")
      },
      {
        "kategori_pengisian": "non_subsidi",
        "device_id": "587fb4f77520a8",
        "jenis_kendaraan": "truk",
        "spbu_id": (await prisma.device.findFirst({
          where: {
            device_id: '587fb4f77520a8'
          }
        })).spbu_id,
        "jumlah": 125.38,
        "nomor_stnk": "98762848",
        "user_id": (await prisma.user.findFirst({
          where: {
            email: 'pkmaioits@email.com'
          }
        })).id,
        "bbm_id": (await prisma.bbm.findFirst({
          where: {
            name: 'Pertamax Turbo'
          }
        })).id,
        createdAt: new Date("2023-09-01")
      },
      {
        "kategori_pengisian": "subsidi",
        "device_id": "615bb72bee9b6f",
        "jenis_kendaraan": "mobil",
        "spbu_id": (await prisma.device.findFirst({
          where: {
            device_id: '615bb72bee9b6f'
          }
        })).spbu_id,
        "jumlah": 125.38,
        "nomor_stnk": "98762848",
        "user_id": (await prisma.user.findFirst({
          where: {
            email: 'pkmaioits@email.com'
          }
        })).id,
        "bbm_id": (await prisma.bbm.findFirst({
          where: {
            name: 'Solar / Biodiesel'
          }
        })).id,
        createdAt: new Date("2023-09-01")
      },
      {
        "kategori_pengisian": "non_subsidi",
        "device_id": "b34284fa9d9267",
        "jenis_kendaraan": "sepeda motor",
        "spbu_id": (await prisma.device.findFirst({
          where: {
            device_id: 'b34284fa9d9267'
          }
        })).spbu_id,
        "jumlah": 125.38,
        "nomor_stnk": "98762848",
        "user_id": (await prisma.user.findFirst({
          where: {
            email: 'pkmaioits@email.com'
          }
        })).id,
        "bbm_id": (await prisma.bbm.findFirst({
          where: {
            name: 'Solar / Biodiesel'
          }
        })).id,
        createdAt: new Date("2023-09-01")
      },
      {
        "kategori_pengisian": "non_subsidi",
        "device_id": "c71dda6bd35086",
        "jenis_kendaraan": "sepeda motor",
        "spbu_id": (await prisma.device.findFirst({
          where: {
            device_id: 'c71dda6bd35086'
          }
        })).spbu_id,
        "jumlah": 125.38,
        "nomor_stnk": "98762848",
        "user_id": (await prisma.user.findFirst({
          where: {
            email: 'pkmaioits@email.com'
          }
        })).id,
        "bbm_id": (await prisma.bbm.findFirst({
          where: {
            name: 'Pertalite'
          }
        })).id,
        createdAt: new Date("2023-09-01")
      },
      {
        "kategori_pengisian": "non_subsidi",
        "device_id": "a66ba172961f6d",
        "jenis_kendaraan": "mobil",
        "spbu_id": (await prisma.device.findFirst({
          where: {
            device_id: 'a66ba172961f6d'
          }
        })).spbu_id,
        "jumlah": 125.38,
        "nomor_stnk": "98762848",
        "user_id": (await prisma.user.findFirst({
          where: {
            email: 'pkmaioits@email.com'
          }
        })).id,
        "bbm_id": (await prisma.bbm.findFirst({
          where: {
            name: 'Pertalite'
          }
        })).id,
        createdAt: new Date("2023-09-01")
      },
      {
        "kategori_pengisian": "subsidi",
        "device_id": "3595f32ada1da5",
        "jenis_kendaraan": "mobil",
        "spbu_id": (await prisma.device.findFirst({
          where: {
            device_id: '3595f32ada1da5'
          }
        })).spbu_id,
        "jumlah": 125.38,
        "nomor_stnk": "98762848",
        "user_id": (await prisma.user.findFirst({
          where: {
            email: 'pkmaioits@email.com'
          }
        })).id,
        "bbm_id": (await prisma.bbm.findFirst({
          where: {
            name: 'Pertamax'
          }
        })).id,
        createdAt: new Date("2023-10-01")
      },
      {
        "kategori_pengisian": "subsidi",
        "device_id": "495dd0256542c2",
        "jenis_kendaraan": "truk",
        "spbu_id": (await prisma.device.findFirst({
          where: {
            device_id: '495dd0256542c2'
          }
        })).spbu_id,
        "jumlah": 125.38,
        "nomor_stnk": "98762848",
        "user_id": (await prisma.user.findFirst({
          where: {
            email: 'pkmaioits@email.com'
          }
        })).id,
        "bbm_id": (await prisma.bbm.findFirst({
          where: {
            name: 'Pertalite'
          }
        })).id,
        createdAt: new Date("2023-10-01")
      },
      {
        "kategori_pengisian": "subsidi",
        "device_id": "a66ba172961f6d",
        "jenis_kendaraan": "truk",
        "spbu_id": (await prisma.device.findFirst({
          where: {
            device_id: 'a66ba172961f6d'
          }
        })).spbu_id,
        "jumlah": 125.38,
        "nomor_stnk": "98762848",
        "user_id": (await prisma.user.findFirst({
          where: {
            email: 'pkmaioits@email.com'
          }
        })).id,
        "bbm_id": (await prisma.bbm.findFirst({
          where: {
            name: 'Pertamax'
          }
        })).id,
        createdAt: new Date("2023-10-01")
      },
      {
        "kategori_pengisian": "subsidi",
        "device_id": "fbb2efc5c6bf77",
        "jenis_kendaraan": "bus",
        "spbu_id": (await prisma.device.findFirst({
          where: {
            device_id: 'fbb2efc5c6bf77'
          }
        })).spbu_id,
        "jumlah": 125.38,
        "nomor_stnk": "98762848",
        "user_id": (await prisma.user.findFirst({
          where: {
            email: 'pkmaioits@email.com'
          }
        })).id,
        "bbm_id": (await prisma.bbm.findFirst({
          where: {
            name: 'Solar / Biodiesel'
          }
        })).id,
        createdAt: new Date("2023-10-01")
      },
      {
        "kategori_pengisian": "subsidi",
        "device_id": "ed1476481360c7",
        "jenis_kendaraan": "mobil",
        "spbu_id": (await prisma.device.findFirst({
          where: {
            device_id: 'ed1476481360c7'
          }
        })).spbu_id,
        "jumlah": 125.38,
        "nomor_stnk": "98762848",
        "user_id": (await prisma.user.findFirst({
          where: {
            email: 'pkmaioits@email.com'
          }
        })).id,
        "bbm_id": (await prisma.bbm.findFirst({
          where: {
            name: 'Solar / Biodiesel'
          }
        })).id,
        createdAt: new Date("2023-10-01")
      },
      {
        "kategori_pengisian": "subsidi",
        "device_id": "3595f32ada1da5",
        "jenis_kendaraan": "sepeda motor",
        "spbu_id": (await prisma.device.findFirst({
          where: {
            device_id: '3595f32ada1da5'
          }
        })).spbu_id,
        "jumlah": 125.38,
        "nomor_stnk": "98762848",
        "user_id": (await prisma.user.findFirst({
          where: {
            email: 'pkmaioits@email.com'
          }
        })).id,
        "bbm_id": (await prisma.bbm.findFirst({
          where: {
            name: 'Pertamax'
          }
        })).id,
        createdAt: new Date("2023-10-01")
      },
      {
        "kategori_pengisian": "subsidi",
        "device_id": "ed1476481360c7",
        "jenis_kendaraan": "sepeda motor",
        "spbu_id": (await prisma.device.findFirst({
          where: {
            device_id: 'ed1476481360c7'
          }
        })).spbu_id,
        "jumlah": 125.38,
        "nomor_stnk": "98762848",
        "user_id": (await prisma.user.findFirst({
          where: {
            email: 'pkmaioits@email.com'
          }
        })).id,
        "bbm_id": (await prisma.bbm.findFirst({
          where: {
            name: 'Pertamax Turbo'
          }
        })).id,
        createdAt: new Date("2023-10-01")
      },
      {
        "kategori_pengisian": "non_subsidi",
        "device_id": "cf5b904e594214",
        "jenis_kendaraan": "truk",
        "spbu_id": (await prisma.device.findFirst({
          where: {
            device_id: 'cf5b904e594214'
          }
        })).spbu_id,
        "jumlah": 125.38,
        "nomor_stnk": "98762848",
        "user_id": (await prisma.user.findFirst({
          where: {
            email: 'pkmaioits@email.com'
          }
        })).id,
        "bbm_id": (await prisma.bbm.findFirst({
          where: {
            name: 'Solar / Biodiesel'
          }
        })).id,
        createdAt: new Date("2023-10-01")
      },
      {
        "kategori_pengisian": "non_subsidi",
        "device_id": "cf5b904e594214",
        "jenis_kendaraan": "sepeda motor",
        "spbu_id": (await prisma.device.findFirst({
          where: {
            device_id: 'cf5b904e594214'
          }
        })).spbu_id,
        "jumlah": 125.38,
        "nomor_stnk": "98762848",
        "user_id": (await prisma.user.findFirst({
          where: {
            email: 'pkmaioits@email.com'
          }
        })).id,
        "bbm_id": (await prisma.bbm.findFirst({
          where: {
            name: 'Pertamax'
          }
        })).id,
        createdAt: new Date("2023-11-01")
      },
      {
        "kategori_pengisian": "subsidi",
        "device_id": "1c81fd1eb5b203",
        "jenis_kendaraan": "mobil",
        "spbu_id": (await prisma.device.findFirst({
          where: {
            device_id: '1c81fd1eb5b203'
          }
        })).spbu_id,
        "jumlah": 125.38,
        "nomor_stnk": "98762848",
        "user_id": (await prisma.user.findFirst({
          where: {
            email: 'pkmaioits@email.com'
          }
        })).id,
        "bbm_id": (await prisma.bbm.findFirst({
          where: {
            name: 'Pertamax'
          }
        })).id,
        createdAt: new Date("2023-11-01")
      },
      {
        "kategori_pengisian": "subsidi",
        "device_id": "a66ba172961f6d",
        "jenis_kendaraan": "sepeda motor",
        "spbu_id": (await prisma.device.findFirst({
          where: {
            device_id: 'a66ba172961f6d'
          }
        })).spbu_id,
        "jumlah": 125.38,
        "nomor_stnk": "98762848",
        "user_id": (await prisma.user.findFirst({
          where: {
            email: 'pkmaioits@email.com'
          }
        })).id,
        "bbm_id": (await prisma.bbm.findFirst({
          where: {
            name: 'Dexlite'
          }
        })).id,
        createdAt: new Date("2023-11-01")
      },
      {
        "kategori_pengisian": "non_subsidi",
        "device_id": "a66ba172961f6d",
        "jenis_kendaraan": "truk",
        "spbu_id": (await prisma.device.findFirst({
          where: {
            device_id: 'a66ba172961f6d'
          }
        })).spbu_id,
        "jumlah": 125.38,
        "nomor_stnk": "98762848",
        "user_id": (await prisma.user.findFirst({
          where: {
            email: 'pkmaioits@email.com'
          }
        })).id,
        "bbm_id": (await prisma.bbm.findFirst({
          where: {
            name: 'Pertamina Dex'
          }
        })).id,
        createdAt: new Date("2023-11-01")
      },
      {
        "kategori_pengisian": "non_subsidi",
        "device_id": "c71dda6bd35086",
        "jenis_kendaraan": "truk",
        "spbu_id": (await prisma.device.findFirst({
          where: {
            device_id: 'c71dda6bd35086'
          }
        })).spbu_id,
        "jumlah": 125.38,
        "nomor_stnk": "98762848",
        "user_id": (await prisma.user.findFirst({
          where: {
            email: 'pkmaioits@email.com'
          }
        })).id,
        "bbm_id": (await prisma.bbm.findFirst({
          where: {
            name: 'Pertamax'
          }
        })).id,
        createdAt: new Date("2023-11-01")
      },
      {
        "kategori_pengisian": "subsidi",
        "device_id": "02808d4e78cb79",
        "jenis_kendaraan": "truk",
        "spbu_id": (await prisma.device.findFirst({
          where: {
            device_id: '02808d4e78cb79'
          }
        })).spbu_id,
        "jumlah": 125.38,
        "nomor_stnk": "98762848",
        "user_id": (await prisma.user.findFirst({
          where: {
            email: 'pkmaioits@email.com'
          }
        })).id,
        "bbm_id": (await prisma.bbm.findFirst({
          where: {
            name: 'Dexlite'
          }
        })).id
      }
    ]
  })
}

module.exports = seedHistoryPengisian;
