import { betterAuth } from "better-auth";
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
   trustedOrigins: [
    "http://localhost:3000",]
});