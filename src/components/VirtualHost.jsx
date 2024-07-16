import React, { useState, useEffect } from 'react';
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const generateIP = (num) => {
  const virtualHosts = [];
  for (let i = 1; i <= num; i++) {
    virtualHosts.push({
      name: `virtualhost${i}.example.com`,
      ip: `192.168.1.${i}`,
    });
  }
  return virtualHosts;
};

const VirtualHost = () => {
  const [virtualHosts, setVirtualHosts] = useState([]);

  useEffect(() => {
    const dummyData = generateIP(50);
    setVirtualHosts(dummyData);
  }, []);

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Virtual Host and IP Addresses
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Virtual Host</TableCell>
              <TableCell sx={{ fontWeight: 'bold', fontSize: '1.2rem' }}>IP Address</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {virtualHosts.map((virtualHost, index) => (
              <TableRow key={index}>
                <TableCell>{virtualHost.name}</TableCell>
                <TableCell>{virtualHost.ip}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default VirtualHost;
