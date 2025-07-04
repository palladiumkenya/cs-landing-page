import * as React from 'react';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import HighchartSankey from "./cs/HighchartSankey";
import Home from "./cs/Home";
import Card from "@mui/material/Card";
import InfoBar from './cs/InfoBar';

export default function MainGrid() {
  return (
    <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px', zoom: "90%" } }}>
        <Home />
        <InfoBar />
      <Grid
        container
        spacing={2}
        columns={12}
        sx={{ mb: (theme) => theme.spacing(2) }}
      >
          <Grid size={{lg:12}}>
              <Card sx={{ border: "none", boxShadow: "none" }}>
                <HighchartSankey />
              </Card>
          </Grid>
      </Grid>
    </Box>
  );
}
