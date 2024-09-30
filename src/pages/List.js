import React from 'react';
import { Grid, Typography } from '@mui/material';
import Sidebar from '../components/Sidebar/Sidebar';
import Header from '../components/Header/Header';
import RightBar from '../components/RightBar/RightBar';
import Frame from '../components/Frame/Frame';
import HeaderList from '../components/Header/HeaderList';
import OrderList from '../components/OrderList';

const List = () => {
    return (
        <Grid container>
            {/* Sidebar */}
            <Grid item xs={2} sx={{ display: { xs: 'none', md: 'block' } }}>
                <Sidebar />
            </Grid>

            {/* Main content area */}
            <Grid item xs={10}>
                <HeaderList />
                <Typography
                    sx={{
                        width: '99px',
                        height: 'var(--28)',
                        position: 'absolute', // Use absolute positioning
                        top: '96px',
                        left: '260px',
                        padding: 'var(--4) var(--8)',
                        gap: '0px',
                        borderRadius: 'var(--8)',
                        opacity: 1,
                        fontFamily: 'Inter',
                        fontSize: '14px',
                        fontWeight: 600,
                        lineHeight: '20px',
                        textAlign: 'left',
                    }}
                >
                    Order List
                    
                </Typography>
                
                
            </Grid>

            <OrderList />
        </Grid>
       
    );
};

export default List;
