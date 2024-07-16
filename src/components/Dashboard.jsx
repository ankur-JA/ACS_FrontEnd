import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DomainInfo from './DomainInfo';
import Subdomain from './Subdomain';
import VirtualHostAPI from './VirtualHost';
import JSFile from './JSFile';
import APIKeyLeak from './Apikey';
import VulnerFound from './VulnerFound';
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssessmentIcon from '@mui/icons-material/Assessment';
import SecurityIcon from '@mui/icons-material/Security';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import CodeIcon from '@mui/icons-material/Code';
import BugReportIcon from '@mui/icons-material/BugReport';

const drawerWidth = 240;

function Dashboard() {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState('Dashboard');

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMenuItemClick = (text) => {
    setSelectedItem(text);
  };

  const drawerItems = [
    { text: 'Dashboard', icon: <DashboardIcon />, color: '#7b1fa2', fontWeight: 'bold' },
    { text: 'Subdomain', icon: <AssessmentIcon />, color: '#7b1fa2', fontWeight: 'bold' },
    { text: 'Virtual Host', icon: <SecurityIcon />, color: '#7b1fa2', fontWeight: 'bold' },
    { text: 'API Key Leak', icon: <VpnKeyIcon />, color: '#7b1fa2', fontWeight: 'bold' },
    { text: 'JS File', icon: <CodeIcon />, color: '#7b1fa2', fontWeight: 'bold' },
    { text: 'Vulnerabilities Found', icon: <BugReportIcon />, color: '#7b1fa2', fontWeight: 'bold' },
  ];

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {drawerItems.map((item) => (
          <ListItem
            button
            key={item.text}
            onClick={() => handleMenuItemClick(item.text)}
            selected={selectedItem === item.text}
            sx={{ 
              '&.Mui-selected': { backgroundColor: '#f0f0f0' }, // Selected item background color
              '&:hover': { backgroundColor: '#f5f5f5' }, // Hover background color
              color: selectedItem === item.text ? '#1976d2' : 'inherit', // Selected item text color
            }}
          >
            <ListItemIcon sx={{ color: item.color }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText
              primary={item.text}
              primaryTypographyProps={{
                variant: 'body1',
                fontWeight: item.fontWeight,
                color: 'inherit',
              }}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const renderContent = () => {
    switch (selectedItem) {
      case 'Dashboard':
        return <DomainInfo />;
      case 'Subdomain':
        return <Subdomain />;
      case 'Virtual Host':
        return <VirtualHostAPI />;
      case 'API Key Leak':
        return <APIKeyLeak/>
      case 'JS File':
        return <JSFile />;
      case 'Vulnerabilities Found':
        return <VulnerFound />;
      default:
        return <Typography variant="body1">Welcome back</Typography>;
    }
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: '#1976d2', // App bar background color
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            ACS Framework
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          backgroundColor: '#f4f6f8',
          minHeight: '100vh',
        }}
      >
        <Toolbar />
        {renderContent()}
      </Box>
    </Box>
  );
}

export default Dashboard;
