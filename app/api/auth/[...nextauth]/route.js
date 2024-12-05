import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

import User from '@models/user';
import { connectToDB } from '@utils/database';

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    callbacks: {
        async session({ session }) { // Make sure existing sessions has the signed in user's data. Over here got a lot more details: https://next-auth.js.org/getting-started/example
            const sessionUser = await User.findOne({
                email: session.user.email
            })
    
            session.user.id = sessionUser._id.toString();
    
            return session;
        },
        async signIn({ profile }) {
            try {
                await connectToDB(); // serverless - > Lambda -> dynamodb
                
                // check if a user already exists
                const userExists = await User.findOne({
                    email: profile.email
                })
    
                // if not, create a new user
                if(!userExists) {
                    await User.create({
                        email: profile.email,
                        username: profile.name.replace(" ","").toLowerCase(),
                        image: profile.picture
                    })
                }
    
                return true;
              
            } catch (error) {
                console.log(error);
                return false;
            }
        }
    }
})

export {handler as GET, handler as POST};