import { ID } from "react-native-appwrite";
import databaseService from "./databaseService";

const dbId = process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID;
const colId = process.env.EXPO_PUBLIC_APPWRITE_COLLECTION_ID;

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

  // delete a note
  async deleteNote(noteId) {
    try {
      const response = await databaseService.deleteDocument(
        dbId,
        colId,
        noteId
      );
      return { success: true };
    } catch (error) {
      console.error("Error deleting note:", error.message);
      throw error;
    }
  },
};

export default noteService;
