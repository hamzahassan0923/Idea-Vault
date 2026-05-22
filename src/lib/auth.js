import { betterAuth } from "better-auth";
import { jwt } from "better-auth/plugins"
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(process.env.IDEA_URI);
const db = client.db('ideadb');

export const auth = betterAuth({
  database: mongodbAdapter(db, {
  
    client
  }),
   emailAndPassword: { 
    enabled: true, 
    
  },
  session:{
      cookieCache:{
        enabled:true,
        strategy:"jwt",
        maxAge: 5 * 24 * 60 * 60
      }
  },
   plugins: [
        jwt(), 
    ]
});