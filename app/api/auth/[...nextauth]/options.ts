import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const hardcoded = { id: "1", name: "admin", password: "admin" };

        if (
          credentials?.username === hardcoded.name &&
          credentials?.password === hardcoded.password
        ) {
          return hardcoded;
        } else {
          return null;
        }
      },
    }),
  ],
};
