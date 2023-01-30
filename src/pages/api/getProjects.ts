import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler() {
    const data = await prisma.project.findMany()
    return
}
