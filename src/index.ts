import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();


async function getAllUsers() {
    const allUsers = await prisma.user.findMany();
    return allUsers;
}

getAllUsers().catch(err => console.error(err));