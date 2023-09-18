import { PrismaAdapter } from '@auth/prisma-adapter';
import NextAuth, { AuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import prisma from '../../../../../prisma/client';

// export const authOptions : AuthOptions = {
//   providers : [
//     GoogleProvider({
//       clientId : process.env.GOOGLE_CLIENT_ID!,
//       clientSecret : process.env.GOOGLE_CLIENT_SECRET!,
//     })
//   ],
//   callbacks : {
//     async signIn({ user, account, profile, email, credentials  }) {
//       if (account?.provider === "google") {
//         const isAllowed =  && profile.email.endsWith("@gmail.com");
//         return isAllowed;
//       } else {
//         return true;
//       }
//     }
//   }
// }

// export default NextAuth(authOptions);

const handler = NextAuth({
  adapter : PrismaAdapter(prisma),
  providers : [
    GoogleProvider({
      clientId : process.env.GOOGLE_CLIENT_ID!,
      clientSecret : process.env.GOOGLE_CLIENT_SECRET!,
    })
  ]
})

export { handler as GET, handler as POST };