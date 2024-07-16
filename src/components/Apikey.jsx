import React, { useState, useEffect } from 'react';
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const generateAPIKeys = (num) => {
  const apiKeys = [];
  for (let i = 1; i <= num; i++) {
    apiKeys.push({
      key: `API_KEY_${i}`,
      source: `http://example.com/source${i}`,
    });
  }
  return apiKeys;
};

const APIKeyLeak = () => {
  const [apiKeys, setApiKeys] = useState([]);

  useEffect(() => {
    const dummyData = generateAPIKeys(50); // Generate 50 dummy API keys
    setApiKeys(dummyData);
  }, []);

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        API Key Leaks
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold', fontSize: '1.2rem' }}>API Key</TableCell>
              <TableCell sx={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Source</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {apiKeys.map((apiKey, index) => (
              <TableRow key={index}>
                <TableCell>{apiKey.key}</TableCell>
                <TableCell>
                  <a href={apiKey.source} target="_blank" rel="noopener noreferrer">
                    {apiKey.source}
                  </a>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default APIKeyLeak;
