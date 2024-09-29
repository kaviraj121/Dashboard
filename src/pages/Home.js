import React from 'react';
import { Grid, Typography } from '@mui/material';
import Sidebar from '../components/Sidebar/Sidebar';
import Header from '../components/Header/Header';
import RightBar from '../components/RightBar/RightBar';
import Frame from '../components/Frame/Frame';

const Home = () => {
    return (
        <Grid container>
            {/* Sidebar */}
            <Grid item xs={2} sx={{ display: { xs: 'none', md: 'block' } }}>
                <Sidebar />
            </Grid>

            {/* Main content area */}
            <Grid item xs={8}>
                <Header />
                {/* eCommerce Text with Layout */}
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
                    eCommerce
                </Typography>
                <Frame />
            </Grid>

            {/* Right Bar */}
            <Grid item xs={2} sx={{ display: { xs: 'none', md: 'block' } }}>
                <RightBar />
            </Grid>
        </Grid>
    );
};

export default Home;
