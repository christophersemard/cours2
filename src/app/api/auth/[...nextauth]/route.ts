// src/app/api/auth/[...nextauth]/route.ts

import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/utils/db";
import bcrypt from "bcrypt";
import GoogleProvider from "next-auth/providers/google";
import DiscordProvider from "next-auth/providers/discord";

export const authOptions = {
    pages: {
        signIn: "/signin",
    },
    // Configure one or more authentication providers
    providers: [
        DiscordProvider({
            id: "discord",
            clientId: process.env.DISCORD_CLIENT_ID as string,
            clientSecret: process.env.DISCORD_CLIENT_SECRET as string,
        }),
        GoogleProvider({
            id: "google",
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {
                    label: "Email",
                    type: "text",
                    placeholder: "jsmith",
                },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials, req) {
                if (!credentials?.password || !credentials?.email) {
                    return null;
                }

                const user = await prisma.user.findFirst({
                    where: {
                        email: credentials?.email,
                    },
                });

                if (
                    user &&
                    (await bcrypt.compare(credentials.password, user.password))
                ) {
                    return user;
                }

                return null;
            },
        }),
    ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
