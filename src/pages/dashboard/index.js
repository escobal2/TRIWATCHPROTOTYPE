import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Link from 'next/link';
import { styled } from '@mui/system';
import Image from 'next/image';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';

const RootContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column', 
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  position: 'relative',
});

const StyledButton = styled(Button)({
  margin: '8px',
});

const WelcomePage = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  return (
    <RootContainer>
      <AppBar position="fixed">
  <Toolbar>
    <Typography variant="h6" component="div" sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
      <Image
        src="/images/logo1.png"
        alt="Logo"
        width={50}
        height={50}
        sx={{ marginRight: 1 }}
      />
      <span style={{ marginRight: '8px' }} />
      TRIWATCH
    </Typography>
    <Button sx={{ color: 'white' }} onClick={handleDrawerOpen}>
      <MenuIcon />
    </Button>
  </Toolbar>
</AppBar>
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={handleDrawerClose}
      >
        <List>
          <ListItem button>
            <Link href="/Admin_Login" passHref>
              <ListItemText>
                <StyledButton variant="contained" color="primary">
                  Login as Admin
                </StyledButton>
              </ListItemText>
            </Link>
          </ListItem>
          <ListItem button>
            <Link href="/sk_personel_login" passHref>
              <ListItemText>
                <StyledButton variant="contained" color="primary">
                  Login as SK Personnel
                </StyledButton>
              </ListItemText>
            </Link>
          </ListItem>
        </List>
      </Drawer>
      <div>
        <Link href="/commuter_report_form" passHref>
          <StyledButton variant="contained" color="primary">
            Report a Driver
          </StyledButton>
        </Link>
      </div>
    </RootContainer>
  );
};

export default WelcomePage;
