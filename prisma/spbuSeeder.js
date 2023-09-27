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

  await prisma.spbu.create({
    data: {
    name: 'SPBU Karah',
    alamat: 'Jl. SPBU Karah No 6',
    device: {
      createMany: {
        data: [
          {
            device_id: "02808d4e78cb79",
          }
        ]
      }
    }
  }})
  
  await prisma.spbu.create({
    data: {
    name: 'SPBU Rungkut',
    alamat: 'Jl. SPBU Rungkut No 43',
    device: {
      createMany: {
        data: [
          {
            device_id: "07a6403e21e306",
          }
        ]
      }
    }
  }})
  
  await prisma.spbu.create({
    data: {
    name: 'SPBU Mulyosari',
    alamat: 'Jl. SPBU Mulyosari No 61',
    device: {
      createMany: {
        data: [
          {
            device_id: "091039535e1a29",
          }
        ]
      }
    }
  }})
  
  await prisma.spbu.create({
    data: {
    name: 'SPBU Mulyosari',
    alamat: 'Jl. SPBU Mulyosari No 26',
    device: {
      createMany: {
        data: [
          {
            device_id: "1c81fd1eb5b203",
          }
        ]
      }
    }
  }})
  
  await prisma.spbu.create({
    data: {
    name: 'SPBU Mulyosari',
    alamat: 'Jl. SPBU Mulyosari No 59',
    device: {
      createMany: {
        data: [
          {
            device_id: "260ec23e1eae1a",
          }
        ]
      }
    }
  }})
  
  await prisma.spbu.create({
    data: {
    name: 'SPBU Semampir',
    alamat: 'Jl. SPBU Semampir No 34',
    device: {
      createMany: {
        data: [
          {
            device_id: "3595f32ada1da5",
          }
        ]
      }
    }
  }})
  
  await prisma.spbu.create({
    data: {
    name: 'SPBU Bubutan',
    alamat: 'Jl. SPBU Bubutan No 58',
    device: {
      createMany: {
        data: [
          {
            device_id: "43d5643ccef962",
          }
        ]
      }
    }
  }})
  
  await prisma.spbu.create({
    data: {
    name: 'SPBU Pucang',
    alamat: 'Jl. SPBU Pucang No 52',
    device: {
      createMany: {
        data: [
          {
            device_id: "44a6a79d317500",
          }
        ]
      }
    }
  }})
  
  await prisma.spbu.create({
    data: {
    name: 'SPBU Karang Pilang',
    alamat: 'Jl. SPBU Karang Pilang No 90',
    device: {
      createMany: {
        data: [
          {
            device_id: "495dd0256542c2",
          }
        ]
      }
    }
  }})
  
  await prisma.spbu.create({
    data: {
    name: 'SPBU Darmo',
    alamat: 'Jl. SPBU Darmo No 98',
    device: {
      createMany: {
        data: [
          {
            device_id: "587fb4f77520a8",
          }
        ]
      }
    }
  }})
  
  await prisma.spbu.create({
    data: {
    name: 'SPBU Bubutan',
    alamat: 'Jl. SPBU Bubutan No 58',
    device: {
      createMany: {
        data: [
          {
            device_id: "615bb72bee9b6f",
          }
        ]
      }
    }
  }})
  
  await prisma.spbu.create({
    data: {
    name: 'SPBU A. Yani',
    alamat: 'Jl. SPBU A. Yani No 82',
    device: {
      createMany: {
        data: [
          {
            device_id: "a66ba172961f6d",
          }
        ]
      }
    }
  }})
  
  await prisma.spbu.create({
    data: {
    name: 'SPBU Tegalsari',
    alamat: 'Jl. SPBU Tegalsari No 88',
    device: {
      createMany: {
        data: [
          {
            device_id: "b34284fa9d9267",
          }
        ]
      }
    }
  }})
  
  await prisma.spbu.create({
    data: {
    name: 'SPBU Karang Pilang',
    alamat: 'Jl. SPBU Karang Pilang No 48',
    device: {
      createMany: {
        data: [
          {
            device_id: "c71dda6bd35086",
          }
        ]
      }
    }
  }})
  
  await prisma.spbu.create({
    data: {
    name: 'SPBU Karah',
    alamat: 'Jl. SPBU Karah No 25',
    device: {
      createMany: {
        data: [
          {
            device_id: "cf5b904e594214",
          }
        ]
      }
    }
  }})
  
  await prisma.spbu.create({
    data: {
    name: 'SPBU Gubeng',
    alamat: 'Jl. SPBU Gubeng No 97',
    device: {
      createMany: {
        data: [
          {
            device_id: "ed1476481360c7",
          }
        ]
      }
    }
  }})
  
  await prisma.spbu.create({
    data: {
    name: 'SPBU A. Yani',
    alamat: 'Jl. SPBU A. Yani No 31',
    device: {
      createMany: {
        data: [
          {
            device_id: "f5543cf6cad9d7",
          }
        ]
      }
    }
  }})
  
  await prisma.spbu.create({
    data: {
    name: 'SPBU Gubeng',
    alamat: 'Jl. SPBU Gubeng No 92',
    device: {
      createMany: {
        data: [
          {
            device_id: "fbb2efc5c6bf77",
          }
        ]
      }
    }
  }})
  

}

module.exports = seedSpbu;
