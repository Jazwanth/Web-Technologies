import React, { useState } from 'react';

function App() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleAddPost = (e) => {
    e.preventDefault();
    if (!title || !content) return;

    const newPost = {
      id: Date.now(),
      title,
      content
    };

    setPosts([newPost, ...posts]);
    setTitle('');
    setContent('');
  };

  return (
    <div style={styles.container}>
      <h1>My Blog</h1>

      <form onSubmit={handleAddPost} style={styles.form}>
        <input
          type="text"
          placeholder="Post Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={styles.input}
          required
        />
        <textarea
          placeholder="Post Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          style={styles.textarea}
          required
        />
        <button type="submit" style={styles.button}>Add Post</button>
      </form>

      <hr style={{ margin: '30px 0' }} />

      <div>
        {posts.length === 0 ? (
          <p>No posts yet. Start writing!</p>
        ) : (
          posts.map((post) => (
            <div key={post.id} style={styles.post}>
              <h3>{post.title}</h3>
              <p>{post.content}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '600px',
    margin: '40px auto',
    fontFamily: 'Arial, sans-serif',
    padding: '0 20px'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    marginBottom: '20px'
  },
  input: {
    padding: '10px',
    fontSize: '16px'
  },
  textarea: {
    padding: '10px',
    fontSize: '16px',
    height: '100px',
    resize: 'vertical'
  },
  button: {
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#1976d2',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  },
  post: {
    backgroundColor: '#f5f5f5',
    padding: '15px',
    borderRadius: '5px',
    marginBottom: '15px'
  }
};

export default App;
