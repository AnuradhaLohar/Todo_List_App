import { Client, Account, Databases } from "appwrite";

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1") // Your Appwrite endpoint
  .setProject("YOUR_PROJECT_ID"); // Your Project ID

export const account = new Account(client);
export const databases = new Databases(client);

export const databaseId = "YOUR_DATABASE_ID";
export const collectionId = "YOUR_COLLECTION_ID";
