import React, { useState } from 'react';
import {
  AppBar,
  IconButton,
  Toolbar,
  Drawer,
  Button,
  Avatar,
  useMediaQuery,
} from '@mui/material';
import {
  Menu,
  AccountCircle,
  Brightness4,
  Brightness7,
  Brightness1,
} from '@mui/icons-material';

import { Link } from 'react-router-dom';
import { useTheme } from '@emotion/react';
import { ThemeConsumer } from 'styled-components';
import Sidebar from '../Sidebar/Sidebar';
import Search from '../Search/Search';

function NavBar() {
  const isMobile = useMediaQuery('(max-width:600px)');
  const theme = useTheme();
  const isAuthenticated = true;
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <AppBar position="fixed">
        <Toolbar className="flex justify-between h-[80px] ml-0 sm:ml-[240px] flex-wrap">
          {isMobile && (
            <IconButton
              color="inherit"
              edge="start"
              style={{ outline: 'none' }}
              onClick={() => setMobileOpen(!mobileOpen)}
              className="sm:hidden">
              <Menu />
            </IconButton>
          )}
          <IconButton color="inherit" sx={{ ml: 1 }} onClick={() => {}}>
            {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
          {!isMobile && 'Search...'}
          <div>
            {!isAuthenticated ? (
              <Button color="inherit" onClick={() => {}}>
                Login &nbsp;
              </Button>
            ) : (
              <Button
                color="inherit"
                component={Link}
                to="/profile/:id"
                onClick={() => {}}
                className="hover:text-white decoration-0">
                {!isMobile && <>My Movies &nbsp;</>}
                <Avatar
                  style={{ width: 30, height: 30 }}
                  alt="Profile"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpWvXdcjNuTkrkDCYKZRtWwZ-emiiDJdP6sUb7VRshRA&s"
                />
              </Button>
            )}
          </div>
          {isMobile && <Search />}
        </Toolbar>
      </AppBar>
      <div>
        <nav className="sm:w-[240] flex-shrink-0">
          {isMobile ? (
            <Drawer
              variant="temporary"
              anchor="right"
              open={mobileOpen}
              onClose={() => setMobileOpen(!mobileOpen)}
              classes={{
                paper: {
                  width: 240,
                },
              }}
              ModelProps={{ keepMounted: true }}>
              <Sidebar setMobileOpen={setMobileOpen} />
            </Drawer>
          ) : (
            <Drawer
              classes={{
                paper: {
                  width: 240,
                },
              }}
              variant="permanent"
              open>
              <Sidebar setMobileOpen={setMobileOpen} />
            </Drawer>
          )}
        </nav>
      </div>
    </>
  );
}

export default NavBar;
