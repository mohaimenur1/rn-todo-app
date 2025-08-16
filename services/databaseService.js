import { database } from "./appwrite";

const databaseService = {
  // List Documents
  async listDocuments(databaseId, collectionId) {
    try {
      const response = await database.listDocuments(databaseId, collectionId);
      return response.documents || [];
    } catch (error) {
      console.error("Error listing documents:", error.message);
      throw error;
    }
  },
  //   Create Document
  async createDocument(databaseId, collectionId, id, data) {
    try {
      return await database.createDocument(databaseId, collectionId, id, data);
    } catch (error) {
      console.error("Error creating document:", error.message);
      throw error;
    }
  },
};

export default databaseService;
