import Prisma from '@prisma/client';
const { PrismaClient } = Prisma;

const prisma = new PrismaClient()

const main = async () => {
  const data = []
  
  const hasNaruto = await prisma.character.findFirst({where: {name: 'Naruto Uzumaki'}})
  const hasIchigo = await prisma.character.findFirst({where: {name: 'Ichigo Kurosaki'}})
  const hasLuffy = await prisma.character.findFirst({where: {name: 'Monkey D. Luffy'}})
  
  if (!hasNaruto) {
    data.push({name: 'Naruto Uzumaki', manga: 'Naruto'})
  }
  if (!hasIchigo) {
    data.push({name: 'Ichigo Kurosaki', manga: 'Bleach'})
  }
  if (!hasLuffy) {
    data.push({name: 'Monkey D. Luffy', manga: 'One Piece'})
  }

  console.log('inserting data', data)

  await prisma.character.createMany({data})
}

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })