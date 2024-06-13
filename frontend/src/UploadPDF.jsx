import { useState } from 'react';
import axios from 'axios';

const UploadPDF = () => {
  const [title, setTitle] = useState('');
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('file', file);

    try {
      const token = localStorage.getItem('token');
      const response = await axios.post('http://localhost:3001/pdf/upload-files', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
      setMessage('PDF uploaded successfully');
    } catch (err) {
      setMessage(err.response?.data || 'An error occurred during file upload');
    }
  };

  return (
    <div>
      <h2>Upload PDF</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>PDF:</label>
          <input
            type="file"
            onChange={handleFileChange}
            accept="application/pdf"
            required
          />
        </div>
        <button type="submit">Upload</button>
      </form>
      {typeof message === 'string' ? <p>{message}</p> : null}
    </div>
  );
};

export default UploadPDF;
