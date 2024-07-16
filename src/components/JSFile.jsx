import React, { useState, useEffect } from 'react';
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const generateJSFiles = (num) => {
  const jsFiles = [];
  for (let i = 1; i <= num; i++) {
    jsFiles.push({
      name: `file${i}.js`,
      link: `http://example.com/js/file${i}.js`,
    });
  }
  return jsFiles;
};

const JSFile = () => {
  const [jsFiles, setJsFiles] = useState([]);

  useEffect(() => {
    const dummyData = generateJSFiles(100); // Generate 100 dummy JS files
    setJsFiles(dummyData);
  }, []);

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        JavaScript Files
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold', fontSize: '1.2rem' }}>File Name</TableCell>
              <TableCell sx={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Link</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {jsFiles.map((jsFile, index) => (
              <TableRow key={index}>
                <TableCell>{jsFile.name}</TableCell>
                <TableCell>
                  <a href={jsFile.link} target="_blank" rel="noopener noreferrer">
                    {jsFile.link}
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

export default JSFile;
