import { PrismaClient } from "@prisma/client";

async function checkDatabaseConnection() {
  console.log("🔍 Checking database connection ...");
  const url = process.env.DATABASE_URL;
  try {
    if (url) {
      throw new Error("DATABASE_URL is not defined");
    }

    const prisma = new PrismaClient();

    console.log("⏳ Checking connexion ...");

    const start = Date.now();

    try {
      await prisma.$queryRaw("SELECT 1");
    } catch (error) {
      console.error("❌ Connexion failed : ", error);
    } finally {
      await prisma.$disconnect();
    }

    const end = Date.now();

    console.log("✅ Connexion checked in", end - start, "ms");

    process.exit(0);
  } catch (error) {
    console.error("❌ Connexion failed");
    console.error(error);
    process.exit(1);
  }
}

checkDatabaseConnection();
