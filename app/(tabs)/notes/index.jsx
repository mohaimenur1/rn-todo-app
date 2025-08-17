import noteService from "@/services/noteService";
import { useEffect, useState } from "react";
import {
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const Notes = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      setLoading(true);
      const response = await noteService.getNotes();
      setNotes(response.data);
    } catch (error) {
      console.error("Error fetching notes:", error.message);
    } finally {
      setLoading(false);
    }
  };

  const addNote = async () => {
    if (newNote.trim() === "") {
      return; // Prevent adding empty notes
    }

    try {
      // Call your service correctly
      const response = await noteService.createNote(newNote);

      // Update state with new note
      setNotes((prevNotes) => [...prevNotes, response.data]);

      // Reset UI
      setNewNote("");
      setModalVisible(false);
    } catch (error) {
      console.error("Error adding note:", error.message);
    }
  };

  // delete a note
  const deleteNote = async (id) => {
    try {
      await noteService.deleteNote(id);
    } catch (error) {
      console.error("Error deleting note:", error.message);
    }
    setNotes((prevNotes) => prevNotes.filter((note) => note.$id !== id));
  };

  return (
    <View style={Styles.container}>
      <FlatList
        data={notes}
        keyExtractor={(item) => item?.$id}
        renderItem={({ item }) => {
          return (
            <View style={Styles.noteItem}>
              <Text>{item?.text}</Text>
              {/* Delete Button */}
              <TouchableOpacity onPress={() => deleteNote(item.$id)}>
                <Text style={Styles.deleteButton}>✕</Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Text style={Styles.addButton}>+ Add Note</Text>
      </TouchableOpacity>
      {/* Modal */}
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={Styles.modalOverlay}>
          <View style={Styles.modalContent}>
            <Text style={Styles.modalText}>Add a New Note</Text>
            <TextInput
              style={Styles.input}
              placeholder="Enter note..."
              placeholderTextColor="#aaa"
              value={newNote}
              onChangeText={setNewNote}
            ></TextInput>
            <View style={Styles.modalButtons}>
              <TouchableOpacity
                style={Styles.cancelButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={Styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>

              <TouchableOpacity style={Styles.saveButton} onPress={addNote}>
                <Text style={Styles.saveButtonText}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Notes;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: 20,
    padding: 26,
    backgroundColor: "#1e293b",
  },
  noteItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#aeadadff",
    marginTop: 10,
    padding: 15,
    borderRadius: 5,
    marginVertical: 5,
  },
  addButton: {
    position: "absolute",
    bottom: 60,
    right: 20,
    left: 20,
    backgroundColor: "#3d81ceff",
    color: "#fff",
    padding: 10,
    borderRadius: 5,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    width: "80%",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    marginBottom: 15,
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cancelButton: {
    backgroundColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginRight: 10,
    alignItems: "center",
  },
  cancelButtonText: {
    fontSize: 16,
    color: "#333",
  },
  saveButton: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 5,
    flex: 1,
    alignItems: "center",
  },
  saveButtonText: {
    fontSize: 16,
    color: "#fff",
  },
  deleteButton: {
    color: "red",
    fontSize: 18,
    fontWeight: "bold",
    paddingHorizontal: 8,
  },
});
