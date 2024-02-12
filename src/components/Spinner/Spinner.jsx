import * as React from 'react';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';

export default function Spinner() {
    return (
      <Stack sx={{ width: '100%', color: 'grey' }} spacing={2}>
        <LinearProgress color="primary.main" />
        <LinearProgress color="primary.main" />
        <LinearProgress color="primary.main" />
      </Stack>
    );
  }