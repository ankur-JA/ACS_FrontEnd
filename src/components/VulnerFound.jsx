import React, { useState, useEffect } from 'react';
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

// Function to generate dummy data (replace with actual data fetch)
const generateVulnerabilities = (num) => {
    const vulnerabilities = [];
    for (let i = 1; i <= num; i++) {
        vulnerabilities.push({
            id: i,
            name: `Vulnerability ${i}`,
            severity: i % 3 === 0 ? 'High' : i % 2 === 0 ? 'Medium' : 'Low', // Example severity levels
            description: `Description of Vulnerability ${i}`,
        });
    }
    return vulnerabilities;
};

const VulnerFound = () => {
    const [vulnerabilities, setVulnerabilities] = useState([]);

    // Simulating data fetch with useEffect (replace with actual fetch logic)
    useEffect(() => {
        // Replace with actual fetch logic to retrieve vulnerabilities data
        const dummyData = generateVulnerabilities(10); // Generating 10 dummy vulnerabilities
        setVulnerabilities(dummyData);
    }, []);

    return (
        <div>
            <Typography variant="h5" gutterBottom>
                Vulnerabilities Found
            </Typography>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ fontWeight: 'bold', fontSize: '1rem' }}>ID</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', fontSize: '1rem' }}>Name</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', fontSize: '1rem' }}>Severity</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', fontSize: '1rem' }}>Description</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {vulnerabilities.map((vulnerability) => (
                            <TableRow key={vulnerability.id}>
                                <TableCell>{vulnerability.id}</TableCell>
                                <TableCell>{vulnerability.name}</TableCell>
                                <TableCell>{vulnerability.severity}</TableCell>
                                <TableCell>{vulnerability.description}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default VulnerFound;
