import { ID } from "react-native-appwrite";
import databaseService from "./databaseService";

const dbId = process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID;
const colId = process.env.EXPO_PUBLIC_APPWRITE_COLLECTION_ID;

console.log("Database ID:", dbId);
console.log("Collection ID:", colId);

const noteService = {
  //get all notes
  async getNotes() {
    try {
      const response = await databaseService.listDocuments(dbId, colId);
      return { data: response };
    } catch (error) {
      console.error("Error fetching notes:", error.message);
      throw error;
    }
  },
  //   create a new note
  async createNote(note) {
    console.log("Creating note:", note);
    console.log("id", ID.unique());

    const docId = ID.unique();
    try {
      const data = {
        text: note,
        createdAt: new Date().toISOString(),
      };

      const response = await databaseService.createDocument(
        dbId,
        colId,
        docId,
        data
      );
      return { data: response };
    } catch (error) {
      console.error("Error creating note:", error.message);
      throw error;
    }
  },
};

export default noteService;
