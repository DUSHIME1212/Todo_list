import NextAuth from "next-auth"
import  GoogleProvider from "next-auth/providers/google"

export const authOptions = {
   
  providers: [
     GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    EmailProvider({
     server: process.env.MAIL_SERVER,
     from: 'NextAuth.js <no-reply@example.com>'
   }),
   FacebookProvider({
     clientId: process.env.FACEBOOK_ID,
     clientSecret: process.env.FACEBOOK_SECRET
   }),
    
  ],
   // A database is optional, but required to persist accounts in a database
  //database: process.env.DATABASE_URL,
}

export default NextAuth(authOptions)