import NextAuth, { AuthOptions } from "next-auth";
import prisma from "@/lib/prisma";
import GoogleProvider from "next-auth/providers/google";

const authOptions: AuthOptions = {
    session: {
        strategy: 'jwt'
    },
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
    ],
    callbacks: {
        async session({session, user}) {
            if(user) {
                const existing = await prisma.user.findUnique({
                    where: {email: user.email},
                })
                if (!existing) {
                    await prisma.user.create({
                        data: {
                            email: user.email,
                            name: user.name as string,
                            churchId: 1,
                        },
                    })
                }
            }
            return session
        },
    },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
