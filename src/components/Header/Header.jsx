import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export const Header = () => {
    return (
        <AppBar position="static" style={{backgroundColor: 'rgb(35, 48, 68)'}}>
            <Toolbar variant="dense">
                <Typography variant="h6" color="inherit" component="div">
                    Crypto Dashboard Demo
                </Typography>
            </Toolbar>
        </AppBar>
    )
};