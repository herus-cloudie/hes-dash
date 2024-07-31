import NextAuth from "next-auth"

import CredentialsProvider from 'next-auth/providers/credentials';

import { compare } from 'bcryptjs';
import mongoose from "mongoose";
import {Schema , model , models} from 'mongoose';

let UserSchema = new Schema({
    email : {
        type : String,
        require : true
    },
    userName: {
        type : String,
        require : true
    },
    password :{
        type : String,
        require : true
    },
} , {timestamps : true}
)

let Hesnical = models.Hesnical|| model("Hesnical" , UserSchema)
async function DBconnection(){
  console.log('connecting to Data-base')
  let URI = 'mongodb+srv://herus2006cripto:Amir2006@cluster0.2lq51go.mongodb.net/?retryWrites=true&w=majority';
  if(mongoose.connections[0].readyState) return console.log('Data-base have already connected')
  await mongoose.connect(URI)
  console.log('Data-base connected')
}

export const AuthOptions = {
  session: { strategy: 'jwt' },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const { email, password } = credentials;

        try {
          await DBconnection();
        } catch (err) {
          console.log(err);
          throw new Error('Problem connecting to the database');
        }

        const user = await Hesnical.findOne({ email });

        if (!user) throw new Error('User does not exist');
        if (!await compare(password, user.password)) throw new Error('Password is incorrect');

        return { email: email, userName: user.userName  };
      },
    }),
  ],
};

export default NextAuth(AuthOptions)