import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';  // Import styles
import { Box, Typography } from '@mui/material';
import * as localForage from 'localforage';
import { UserData } from './types';

// Custom toolbar options (optional)
const modules = {
  toolbar: [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block'],

    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
    [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
    [{ 'direction': 'rtl' }],                         // text direction

    [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'font': [] }],
    [{ 'align': [] }],

    ['clean']                                         // remove formatting button
  ],
};

const RichTextEditor: React.FC = () => {
  const [editorContent, setEditorContent] = useState<string>('');
  const [userData, setUserData] = useState<UserData | null>(null); // Type appropriately


  function isUserData(data: any): data is UserData {
    return (
      typeof data === 'object' &&
      data !== null &&
      typeof data.id === 'string' &&
      typeof data.name === 'string' &&
      typeof data.address === 'string' &&
      typeof data.email === 'string' &&
      typeof data.phone === 'string'
    );
  }
  
  useEffect(() => {
    localForage.getItem('userData')
      .then((data) => {
        if (data && isUserData(data)) {
          setUserData(data);
          const formattedContent = `
            <h1>User Profile</h1>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Address:</strong> ${data.address}</p>
            <p><strong>Phone:</strong> ${data.phone}</p>
          `;
          setEditorContent(formattedContent);
        } else {
          console.warn('Invalid user data in local storage');
          setUserData(null); // Or handle the error in another way
        }
      })
      .catch((err) => {
        console.error('Error loading user data:', err);
      });
  }, []);
  
  const handleChange = (value: string) => {
    setEditorContent(value);
  };


  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Rich Text Editor
      </Typography>
      <ReactQuill
        theme="snow"
        value={editorContent}
        onChange={handleChange}
        modules={modules}
        style={{height: '300px'}}
      />
    </Box>
  );
};

export default RichTextEditor;