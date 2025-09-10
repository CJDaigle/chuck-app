import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [joke, setJoke] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchJoke = async () => {
    setLoading(true);
    setError('');
    
    try {
      const response = await axios.get('https://api.chucknorris.io/jokes/random');
      setJoke(response.data.value);
    } catch (err) {
      setError('Failed to fetch joke. Please try again.');
      console.error('Error fetching joke:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <header className="header">
          <h1 className="title">Chuck Norris Jokes</h1>
          <p className="subtitle">Get ready for some legendary facts!</p>
        </header>

        <div className="joke-section">
          <button 
            className={`fetch-button ${loading ? 'loading' : ''}`}
            onClick={fetchJoke}
            disabled={loading}
          >
            {loading ? 'Loading...' : 'Get Random Joke'}
          </button>

          {error && (
            <div className="error-message">
              {error}
            </div>
          )}

          {joke && !error && (
            <div className="joke-container">
              <div className="joke-text">
                "{joke}"
              </div>
            </div>
          )}
        </div>

        <footer className="footer">
          <p>Powered by <a href="https://api.chucknorris.io" target="_blank" rel="noopener noreferrer">Chuck Norris API</a></p>
        </footer>
      </div>
    </div>
  );
}

export default App;
