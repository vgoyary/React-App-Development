import React, { useState, useEffect } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import { v4 as uuidv4 } from 'uuid'; // For generating unique IDs
import * as localForage from 'localforage'; // using localforage to store data
import { UserData } from './types';

// interface UserData {
//     id: string;
//     name: string;
//     address: string;
//     email: string;
//     phone: string;
//   }

const UserForm: React.FC = () => {
  const [userData, setUserData] = useState<UserData>({
    id: '',
    name: '',
    address: '',
    email: '',
    phone: '',
  });

  const [isDirty, setIsDirty] = useState(false); // Track unsaved changes

  // Handle form input changes
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
    setIsDirty(true); // Mark form as dirty on any change
  };

  // Generate User ID and Save to Local Storage
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const userId = uuidv4();
    const newData: UserData = { ...userData, id: userId };
    setUserData(newData);

    localForage.setItem('userData', newData)
    .then(() => {
      console.log('User data saved to local storage');
      setIsDirty(false); // Reset dirty flag after saving
    })
    .catch((err) => {
      console.error('Error saving user data:', err);
    });
  };

  // Unsaved Changes Warning
  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (isDirty) {
        event.preventDefault();
        event.returnValue = 'You have unsaved changes.  Are you sure you want to leave?'; // Standard message
        return 'You have unsaved changes.  Are you sure you want to leave?'; // For some older browsers
      }
      return undefined;
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [isDirty]);


  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2, p: 2 }}>
      <Typography variant="h6" gutterBottom>
        User Data Form
      </Typography>
      <TextField
        fullWidth
        label="Name"
        name="name"
        value={userData.name}
        onChange={handleChange}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Address"
        name="address"
        value={userData.address}
        onChange={handleChange}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Email"
        name="email"
        value={userData.email}
        onChange={handleChange}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Phone"
        name="phone"
        value={userData.phone}
        onChange={handleChange}
        margin="normal"
      />
      <Button variant="contained" type="submit" disabled={!isDirty}>
        Save
      </Button>
    </Box>
  );
};

export default UserForm;