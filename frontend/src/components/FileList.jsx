import { useState, useEffect } from 'react';

function FileList() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/files')
      .then(response => response.json())
      .then(data => setVideos(data));
  }, []);

  return (
    console.log('Hello world !')
  );
}