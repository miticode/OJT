// Ví dụ về cách định nghĩa setDocument trong component cha
import React, { useState } from 'react';
import Verification from './Verification';

const ParentComponent = () => {
  const [courseTitle, setCourseTitle] = useState('');
  const [document, setDocument] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission
  };

  return (
    <Verification
      courseTitle={courseTitle}
      setCourseTitle={setCourseTitle}
      document={document}
      setDocument={setDocument}  // Đảm bảo rằng setDocument được truyền vào
      handleSubmit={handleSubmit}
    />
  );
};

export default ParentComponent;
