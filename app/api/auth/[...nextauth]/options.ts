import { prisma } from "@/lib/prisma";
import { User } from "@prisma/client";
import bcrypt from "bcrypt";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

async function hashPassword(plaintextPassword: string) {
  const hash = await bcrypt.hash(plaintextPassword, 10);
  return hash;
}

async function comparePassword(plaintextPassword: string, hash: string) {
  const result = await bcrypt.compare(plaintextPassword, hash);
  return result;
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        let user: User | null = null;

        user = await prisma.user.findFirst({
          where: {
            email: credentials?.email,
          },
        });

        if (!user) {
          const passwordHash = await hashPassword(credentials!.password);
          user = await prisma.user.create({
            data: {
              email: credentials?.email!,
              password: passwordHash,
              name: "Test name",
            },
          });
        }

        if (!(await comparePassword(credentials!.password, user.password))) {
          return null;
        }

        if (!user) {
          throw new Error("User was not found and could not be created.");
        }

        return { id: `${user.id}`, email: user.email, password: user.password };
      },
    }),
  ],
};
