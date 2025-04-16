import React, { useState } from 'react';
import axios from 'axios';
import './NoteCard.css';

function NoteCard({ note, onNoteUpdated, onNoteDeleted, onPinToggle }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(note.title);
  const [newContent, setNewContent] = useState(note.content);

  // Handle delete operation
  const handleDelete = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this note?");
    if (!confirmDelete) return;

    const token = localStorage.getItem('access_token');
    try {
      await axios.delete(`http://localhost:8080/users/${note.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      onNoteDeleted(); // Trigger refresh in parent
    } catch (error) {
      console.error('Error deleting note:', error);
    }
  };

  // Handle edit toggle
  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  // Handle update operation
  const handleUpdate = async () => {
    const token = localStorage.getItem('access_token');
    try {
      await axios.put(`http://localhost:8080/users/${note.id}`, {
        title: newTitle,
        content: newContent,
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      onNoteUpdated(); // Trigger refresh in parent
      setIsEditing(false); // Close the edit form
    } catch (error) {
      console.error('Error updating note:', error);
    }
  };

  // Handle pin toggle


  return (
    <div className="note-card">
      {isEditing ? (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', backgroundColor: '#F8F9FA', padding: '15px', borderRadius: '10px' }}>
    <input
      type="text"
      value={newTitle}
      onChange={(e) => setNewTitle(e.target.value)}
      placeholder="Title"
      style={{
        padding: '10px',
        borderRadius: '6px',
        border: '1px solid #ccc',
        fontSize: '16px',
        backgroundColor: '#E3F4F4', // pastel mint
      }}
    />
    <textarea
      value={newContent}
      onChange={(e) => setNewContent(e.target.value)}
      placeholder="Content"
      rows={4}
      style={{
        padding: '10px',
        borderRadius: '6px',
        border: '1px solid #ccc',
        fontSize: '16px',
        backgroundColor: '#FFF0F5', // pastel lavender blush
        resize: 'vertical',
      }}
    />
    <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
      <button
        onClick={handleUpdate}
        style={{
          padding: '6px 12px',
          backgroundColor: '#B9FBC0', // pastel green
          color: '#2C3333',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          fontWeight: 'bold',
        }}
      >
        Save
      </button>
      <button
        onClick={handleEditToggle}
        style={{
          padding: '6px 12px',
          backgroundColor: '#FFDAC1', // pastel orange-pink
          color: '#2C3333',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          fontWeight: 'bold',
        }}
      >
        Cancel
      </button>
    </div>
  </div>
) : ( 
        <div>
          <h3>{note.title}</h3>
          <p>{note.content}</p>
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '10px' }}>
  <button
    onClick={handleEditToggle}
    style={{
      padding: '6px 12px',
      backgroundColor: '#A3D2CA',  // soft teal
      color: '#2C3333',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',
      fontWeight: 'bold',
    }}
  >
    Edit
  </button>
  <button
    onClick={handleDelete}
    style={{
      padding: '6px 12px',
      backgroundColor: '#FFB3C6',  // pastel pink
      color: '#2C3333',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',
      fontWeight: 'bold',
    }}
  >
    Delete
  </button>
</div>

        </div>
      )}
    </div>
  );
}

export default NoteCard;
