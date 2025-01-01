import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

export async function clearDb() {
  client.request.deleteMany();
}
