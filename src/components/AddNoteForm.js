import React, { useState } from 'react';
import axios from 'axios';
import './AddNoteForm.css'; // You can style it separately

function AddNoteForm({ onNoteAdded }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [showForm, setShowForm] = useState(false);

  const handleAddNote = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('access_token');

    try {
      await axios.post(
        'http://localhost:8080/users/notes',
        { title, content },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setTitle('');
      setContent('');
      setShowForm(false); // Hide form after adding
      onNoteAdded(); // Refresh notes
    } catch (error) {
      console.error('Error adding note:', error);
    }
  };

  return (
    <div className="add-note-container">
      {!showForm ? (
        <button className="add-note-btn" onClick={() => setShowForm(true)}>
          ➕ Add Note
        </button>
      ) : (
        <form onSubmit={handleAddNote} className="note-form">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <textarea
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
          <div className="form-actions">
            <button type="submit">Save</button>
            <button type="button" onClick={() => setShowForm(false)}>
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default AddNoteForm;
