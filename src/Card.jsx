import React from 'react';
import { Card, CardContent, Typography, Box, CardHeader, Grid } from '@mui/material';

const StatisticsCard = () => {
  const timestamp = new Date().toLocaleString();

  return (
    <Card sx={{ width: 480, height: 580, backgroundColor: '#EFE9E1', fontFamily: 'Garamond, serif' }}>
      <CardHeader 
        title={`${timestamp}`}
        sx={{ 
            background: 'linear-gradient(to right, #AC9C8D, #72383D)',
            textAlign: 'center', 
            fontSize: '1.5rem',
            color: '#EFE9E1',
        }}
      />
    <CardContent>
      <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography variant="h6" sx={{ fontFamily: 'Garamond, serif' }}>Speed</Typography>
            <Box sx={{ backgroundColor: '#D1C7BD', padding: '8px', borderRadius: '2px', marginBottom: 2 }}>
              <Typography variant="body1" color="#322D29">
                0 km/h
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" sx={{ fontFamily: 'Garamond, serif' }}>Distance</Typography>
            <Box sx={{ backgroundColor: '#D1C7BD', padding: '8px', borderRadius: '2px', marginBottom: 2 }}>
              <Typography variant="body1" color="#322D29">
                0 meters
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ width: '300px', height: '2px', backgroundColor: '#AC9C8D', margin: '16px auto' }} />

        <Box sx={{ marginTop: 2, marginBottom: 2 }}>
        <Typography variant="h6" sx={{ fontFamily: 'Garamond, serif' }}>Trajectory:</Typography>
        <img
            src="/logotext.png" 
            alt="Trajectory"
            style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
        />
        </Box>


        <Box sx={{ width: '300px', height: '2px', backgroundColor: '#AC9C8D', margin: '16px auto' }} />

        <Box sx={{ marginBottom: 2 }}>
          <Typography variant="h6" sx={{ fontFamily: 'Garamond, serif' }}>Form Comparison: </Typography>
          <Typography variant="body1">Your form is pog!</Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default StatisticsCard;
