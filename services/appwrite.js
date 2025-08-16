import { Client, Databases } from "react-native-appwrite";

const config = {
  endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
  project: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
  databaseId: process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID,
  collectionId: process.env.EXPO_PUBLIC_APPWRITE_COLLECTION_ID,
};

const client = new Client()
  .setEndpoint(config.endpoint)
  .setProject(config.project);

const database = new Databases(client);

export { client, config, database };
