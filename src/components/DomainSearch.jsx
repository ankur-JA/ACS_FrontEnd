import React, { useState } from 'react';
import {
    Container,
    TextField,
    Button,
    Typography,
    Box,
    Grid,
    CircularProgress,
    Paper,
    Link,
    Divider,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const DomainSearch = () => {
    const navigate = useNavigate();
    const [domain, setDomain] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        if (!domain) {
            setError('Please enter a domain');
            setLoading(false);
            return;
        }

        try {
            // Replace 'http://127.0.0.1:5000/find_subdomains' with your backend API endpoint
            const response = await fetch('http://127.0.0.1:5000/find_subdomains', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ domain }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            // Navigate to dashboard route on successful submission
            navigate('/dashboard');
        } catch (err) {
            console.error(err);
            setError('An error occurred while submitting the domain');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Box
            sx={{
                backgroundColor: '#1a1a1a',
                minHeight: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                paddingX: { xs: 2, md: 0 },
                color: 'white',
                margin: 0, // Remove margin
                width: '100%', // Ensure full width
            }}
        >
            <Paper elevation={3} sx={{ p: 4, backgroundColor: '#2c2c2c', color: 'white', width: '100%' }}>
                <Typography variant="h4" component="h1" align="center" gutterBottom>
                    Welcome to ACS Framework
                </Typography>
                <Typography variant="body1" align="center" sx={{ mb: 6 }}>
                    Enter a Domain Name
                </Typography>
                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 5 }}>
                    <Grid container spacing={2} justifyContent="center" alignItems="center">
                        <Grid item xs={12} md={8}>
                            <TextField
                                fullWidth
                                label="Enter Domain"
                                variant="outlined"
                                value={domain}
                                onChange={(e) => setDomain(e.target.value)}
                                required
                                autoFocus
                                error={!!error}
                                helperText={error}
                                disabled={loading}
                                InputProps={{
                                    style: {
                                        borderRadius: 8,
                                        backgroundColor: '#333',
                                        color: 'white',
                                        height: '50px',
                                    },
                                    sx: { '& .MuiOutlinedInput-notchedOutline': { borderColor: '#555' } },
                                }}
                                InputLabelProps={{
                                    style: { color: '#aaa' },
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                fullWidth
                                onClick={handleSubmit}
                                sx={{
                                    height: '50px',
                                    borderRadius: 8,
                                    backgroundColor: '#1976d2',
                                    color: 'white',
                                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                                    '&:hover': {
                                        backgroundColor: '#1565c0',
                                    },
                                }}
                            >
                                {loading ? (
                                    <CircularProgress size={24} color="inherit" />
                                ) : (
                                    'Search'
                                )}
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
                <Divider sx={{ my: 5, borderColor: '#555' }} />
                <Typography variant="body2" align="center">
                    Need help? Check out our{' '}
                    <Link href="#" color="primary" sx={{ color: '#1976d2' }}>
                        documentation
                    </Link>
                </Typography>
            </Paper>
        </Box>
    );
};

export default DomainSearch;
