const { PrismaClient } = require('@prisma/client')
const seedSbpu = require('./spbuSeeder')
const seedUser = require('./userSeeder')
const seedHistoryPengisian = require('./historyPengisianSeeder')
const seedBbm = require('./bbmSeeder')
const prisma = new PrismaClient()

async function main() {  
  await prisma.historyPengisian.deleteMany()
  await prisma.bbm.deleteMany()
  await prisma.device.deleteMany()
  await prisma.spbu.deleteMany()
  await prisma.user.deleteMany()
  await prisma.ktp.deleteMany()
  await prisma.sim.deleteMany()
  await prisma.stnk.deleteMany()
  await prisma.pkb.deleteMany()
  await prisma.ajuanSubsidi.deleteMany()

  await seedBbm()
  await seedUser()
  await seedSbpu()
  await seedHistoryPengisian()
}

main()
  .catch((error) => {
    console.error(error)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
