/* import NextAuth from "next-auth";
// import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
// import LinkedInProvider from "next-auth/providers/linkedin";
// import EmailProvider from "next-auth/providers/email";
import User from "@/models/User";
import mongoose from "mongoose";
import Payment from "@/models/Payment";
import connectDb from "@/db/connectDb";

export const handler = NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    // OAuth authentication providers...
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_ID,
    //   clientSecret: process.env.GOOGLE_SECRET,
    // }),
    // LinkedInProvider({
    //   clientId: process.env.LINKEDIN_CLIENT_ID,
    //   clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
    // }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // Passwordless / email sign in
    // EmailProvider({
    //   server: process.env.MAIL_SERVER,
    //   from: "NextAuth.js <no-reply@example.com>",
    // }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (account.provider == "github") {
        await connectDb();
        //check if the user already exist in the db
        const currentUser =await User.findOne({ email:email });
        if (!currentUser) {
          //create new user
          const newUser = await User.create({
            email: user.email,
            username: user.email.split("@")[0],
          });
          // user.name =newUser.username
        } 
        // else{
        //   user.name = currentUser.username
        // }
        return true
      }
    },
    async session({ session, user, token }) {
      const dbUser = await User.findOne({email:session.user.email})
      
      
      session.user.name = dbUser.username;
      return session
    },
  },
});

export { handler as GET, handler as POST };*/



// code by claude
import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import User from "@/models/User";
import connectDb from "@/db/connectDb";

export const handler = NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account.provider === "github") {
        try {
          await connectDb();
          
          // Check if the user already exists in the db
          const currentUser = await User.findOne({ email: user.email });
          
          if (!currentUser) {
            // Create new user
            await User.create({
              email: user.email,
              username: user.email.split("@")[0],
            });
          }
          
          return true;
        } catch (error) {
          console.error("Error in signIn callback:", error);
          return false;
        }
      }
      return true;
    },
    
    async session({ session, token }) {
      try {
        await connectDb();
        const dbUser = await User.findOne({ email: session.user.email });
        
        if (dbUser) {
          session.user.name = dbUser.username;
        }
        
        return session;
      } catch (error) {
        console.error("Error in session callback:", error);
        return session;
      }
    },
  },
});

export { handler as GET, handler as POST };