import { prisma } from "./config/prisma";

async function testDB() {
  try {
    await prisma.$connect();
    console.log("🚀 Prisma 7 connected to database successfully!");
  } catch (err) {
    console.error("❌ Database connection failed:", err);
  } finally {
    await prisma.$disconnect();
  }
}

testDB();
