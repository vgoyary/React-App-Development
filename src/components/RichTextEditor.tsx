import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';  // Import styles
import { Box, Typography } from '@mui/material';
import * as localForage from 'localforage';
import { UserData } from './types';

const modules = {
  toolbar: [
    ['bold', 'italic', 'underline', 'strike'],        
    ['blockquote', 'code-block'],

    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    [{ 'script': 'sub' }, { 'script': 'super' }],      
    [{ 'indent': '-1' }, { 'indent': '+1' }],          
    [{ 'direction': 'rtl' }],                         

    [{ 'size': ['small', false, 'large', 'huge'] }],  
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

    [{ 'color': [] }, { 'background': [] }],          
    [{ 'font': [] }],
    [{ 'align': [] }],

    ['clean']                                    
  ],
};

const RichTextEditor: React.FC = () => {
  const [editorContent, setEditorContent] = useState<string>('');
  const [, setUserData] = useState<UserData | null>(null); 


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
          setUserData(null); 
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

function setInitialized(arg0: boolean) {
  throw new Error('Function not implemented.');
}
