import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { userAgent } from "next/server";
export const authOptions: NextAuthOptions = {
    providers: [
      CredentialsProvider({
        name: "Credentials",
        credentials: {
          username: { label: "Username", type: "text", placeholder: "username" },
          password: { label: "Password", type: "password", placeholder: "password" },
        },
        async authorize(credentials) {
          // You need to provide your own logic here that takes the credentials
          // submitted and returns either a object representing a user or value
          // that is false/null if the credentials are invalid.
          // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
          // You can also use the `req` object to obtain additional parameters
          // (i.e., the request IP address)
          const hardcoded = {id: '1', name: "admin", password: "admin" }

        if (credentials?.username === hardcoded.name && credentials?.password === hardcoded.password){
            return hardcoded;
        }
        else{
            return null;
        }
        },
      }),
    ],
  };