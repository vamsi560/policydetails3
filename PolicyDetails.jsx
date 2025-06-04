
import React from 'react';
import { Box, Button, TextField } from '@mui/material';

const PolicyDetails = () => (
  <Box sx={ padding: '20px' }>
    <TextField label="Path ID" name="pathId" variant="outlined" required=true fullWidth=true placeholder="Enter Path ID" />
    <!-- Unknown component: TabPanel -->
    <Button color="primary" onClick={() => { /* navigate */ }}>Next</Button>
    <Button color="success" onClick={() => { /* submit */ }}>Ok</Button>
    <Button color="error" onClick={() => { /* reset */ }}>Cancel</Button>
  </Box>
);

export default PolicyDetails;
