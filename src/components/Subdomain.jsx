import React, { useState, useEffect } from 'react';
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const generateDummySubdomains = (num) => {
  const subdomains = [];
  for (let i = 1; i <= num; i++) {
    subdomains.push({
      name: `subdomain${i}.example.com`,
      ip: `192.168.1.${i}`,
    });
  }
  return subdomains;
};

const Subdomain = () => {
  const [subdomains, setSubdomains] = useState([]);

  useEffect(() => {
    const dummyData = generateDummySubdomains(50);
    setSubdomains(dummyData);
  }, []);

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Subdomains and IP Addresses
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Subdomain</TableCell>
              <TableCell sx={{ fontWeight: 'bold', fontSize: '1.2rem' }}>IP Address</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {subdomains.map((subdomain, index) => (
              <TableRow key={index}>
                <TableCell>{subdomain.name}</TableCell>
                <TableCell>{subdomain.ip}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Subdomain;
