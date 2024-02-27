import React, { useState } from 'react';

const App = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log('Title:', title);
    console.log('Body:', body);
    setBody("");
    setTitle("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default App;