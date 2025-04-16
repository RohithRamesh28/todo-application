import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AddEditNoteForm({ setIsAddNoteVisible, setNotes, editingNote, setEditingNote }) {
  const [note, setNote] = useState({ title: '', content: '' });

  useEffect(() => {
    if (editingNote) {
      setNote({ title: editingNote.title, content: editingNote.content });
    }
  }, [editingNote]);

  const handleSave = () => {
    const token = localStorage.getItem('access_token');
    if (note.title && note.content) {
      if (editingNote) {
        // Update existing note
        axios
          .put(`http://localhost:8080/users/notes/${editingNote.id}`, note, {
            headers: { Authorization: `Bearer ${token}` },
          })
          .then((response) => {
            setNotes(prevNotes => prevNotes.map(n => n.id === editingNote.id ? response.data : n));
            setIsAddNoteVisible(false);
            setEditingNote(null);
          })
          .catch((error) => console.error('Error updating note:', error));
      } else {
        // Create new note
        axios
          .post('http://localhost:8080/users/notes', note, {
            headers: { Authorization: `Bearer ${token}` },
          })
          .then((response) => {
            setNotes(prevNotes => [...prevNotes, response.data]);
            setIsAddNoteVisible(false);
          })
          .catch((error) => console.error('Error adding note:', error));
      }
    }
  };

  return (
    <div className="add-edit-note-form">
      <input
        type="text"
        placeholder="Title"
        value={note.title}
        onChange={(e) => setNote({ ...note, title: e.target.value })}
      />
      <textarea
        placeholder="Content"
        value={note.content}
        onChange={(e) => setNote({ ...note, content: e.target.value })}
      />
      <button onClick={handleSave}>{editingNote ? 'Update' : 'Add'} Note</button>
      <button onClick={() => setIsAddNoteVisible(false)}>Cancel</button>
    </div>
  );
}

export default AddEditNoteForm;
