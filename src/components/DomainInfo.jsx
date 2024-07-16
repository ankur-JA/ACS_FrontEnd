import React, { useState, useEffect } from 'react';
import { Grid, Paper, Typography, Box } from '@mui/material';

const fetchDomainData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        subdomain: '23',
        ip: '21',
        virtualhost: '2',
        api: '0', // Number of API token leaks
        foundVul: 6, // Number of found vulnerabilities
        jsfiles: '15', // Number of JavaScript files
      });
    }, 100);
  });
};

const determineSeverity = (apiLeaks, foundVul) => {
  if (apiLeaks > 0) {
    return 'High';
  } else if (apiLeaks === 0 && foundVul > 4) {
    return 'Medium';
  } else {
    return 'Low';
  }
};

const DomainInfo = () => {
  const [domainData, setDomainData] = useState(null);

  useEffect(() => {
    fetchDomainData().then(data => {
      data.bugSeverity = determineSeverity(data.api, data.foundVul);
      setDomainData(data);
    });
  }, []);

  const boxStyles = {
    padding: '20px',
    textAlign: 'center',
    color: 'white',
  };

  const renderBox = (label, value, bgColor) => (
    <Grid item xs={12} sm={6} md={4}>
      <Paper sx={{ ...boxStyles, backgroundColor: bgColor }}>
        <Typography variant="h5">{label}</Typography>
        <Typography variant="h3">{value}</Typography>
      </Paper>
    </Grid>
  );

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'Low':
        return '#4caf50'; // Green
      case 'Medium':
        return '#ff9800'; // Orange
      case 'High':
        return '#f44336'; // Red
      case 'Critical':
        return '#d32f2f'; // Dark Red
      default:
        return '#2196f3'; // Blue
    }
  };

  const renderSeverityBanner = (severity) => (
    <Grid item xs={12}>
      <Box
        sx={{
          padding: '20px',
          textAlign: 'center',
          backgroundColor: getSeverityColor(severity),
          color: 'white',
          marginBottom: '20px',
        }}
      >
        <Typography variant="h4">Bug Severity: {severity}</Typography>
      </Box>
    </Grid>
  );

  return domainData ? (
    <Grid container spacing={3}>
      {renderSeverityBanner(domainData.bugSeverity)}
      {renderBox('Number of Subdomains', domainData.subdomain, 'primary.main')}
      {renderBox('Number of IPs', domainData.ip, 'secondary.main')}
      {renderBox('Number of Virtual Hosts', domainData.virtualhost, 'error.main')}
      {renderBox('API Token Leaks', domainData.api, 'warning.main')}
      {renderBox('Vulnerabilities Found', domainData.foundVul, 'success.main')}
      {renderBox('Number of JavaScript Files', domainData.jsfiles, 'info.main')}
    </Grid>
  ) : (
    <Typography variant="body1">Loading data...</Typography>
  );
};

export default DomainInfo;