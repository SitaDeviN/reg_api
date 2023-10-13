import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
//import AddchartIcon from '@mui/icons-material/Addchart';
import {Route,Routes,Link} from "react-router-dom";
import Project from './Project';
export default function Headerbar()
{
  return ( 
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor:"black"}} >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            GoodReads
          </Typography>
          <Button>
              <Routes>
                  <Route path="/Project" element={<Project/>}/>
              </Routes>
              <nav>
                  <ul>
                    <li><Link to="/Project">Login</Link></li>
                  </ul>
              </nav>
              </Button>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}