import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NoteCard from '../components/NoteCard';
import AddNoteForm from '../components/AddNoteForm';
import SearchBar from '../components/SearchBar';
import './DashboardPage.css';

function DashboardPage() {
  const [notes, setNotes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Fetch notes
  const fetchNotes = async () => {
    const token = localStorage.getItem('access_token');
    try {
      const response = await axios.get('http://localhost:8080/users/notes', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setNotes(response.data);
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  };

 

  // Handle pin toggle


  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('access_token'); // Remove the token from localStorage
    window.location.href = '/'; // Redirect to login page
  };

  useEffect(() => {
    fetchNotes();
  
  }, []);

  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    note.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="dashboard-container">
      <h1 className='title-header'>Notsieee</h1>
      <button 
        onClick={handleLogout} 
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
        Logout
      </button>
      <SearchBar value={searchQuery} onChange={setSearchQuery} />
      <AddNoteForm onNoteAdded={fetchNotes} />
      <div className="notes-grid">
        {filteredNotes.map(note => (
          <NoteCard
            key={note.id}
            note={note}
            onNoteDeleted={fetchNotes}
            onNoteUpdated={fetchNotes}
  
          />
        ))}
      </div>
    </div>
  );
}

export default DashboardPage;
