"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("./config/prisma");
async function testDB() {
    try {
        await prisma_1.prisma.$connect();
        console.log("🚀 Prisma 7 connected to database successfully!");
    }
    catch (err) {
        console.error("❌ Database connection failed:", err);
    }
    finally {
        await prisma_1.prisma.$disconnect();
    }
}
testDB();
