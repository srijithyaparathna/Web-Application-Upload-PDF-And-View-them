import  { useState, useEffect } from 'react';
import axios from 'axios';

const ViewPDFs = () => {
  const [pdfs, setPdfs] = useState([]);

  useEffect(() => {
    const fetchPdfs = async () => {
      try {
        const response = await axios.get('http://localhost:3001/pdf/get-files');
        setPdfs(response.data.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchPdfs();
  }, []);

  return (
    <div>
      <h2>View PDFs</h2>
      <ul>
        {pdfs.map(pdf => (
          <li key={pdf.title}>
            <a href={`http://localhost:3001/uploads/${pdf.pdf}`} target="_blank" rel="noopener noreferrer">{pdf.pdf}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewPDFs;
