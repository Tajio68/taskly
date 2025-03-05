import prisma from "@/lib/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";

export const authConfig = {
  trustHost: true,
  callbacks: {},
  providers: [
    //Google OAuth
  ],
  secret: process.env.AUTH_SECRET,
  session: {
    strategy: "database",
  },
  adapter: PrismaAdapter(prisma),
  jwt: {},
};
