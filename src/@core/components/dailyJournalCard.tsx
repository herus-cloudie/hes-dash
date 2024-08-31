import React from 'react';
import Grid from '@mui/material/Grid';
import CrmMonthlyBudget from 'src/views/dashboards/crm/CrmMonthlyBudget';
import Box from '@mui/material/Box';

const DailyJournalCard = () => {
  return (
    <Box sx={{ p: 2 }}>
      <Grid container spacing={2}>
        <Grid className='chart-container' item xs={12} md={4}>
          <CrmMonthlyBudget />
        </Grid>

        <Grid item xs={6} md={2}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <div className='margin-lg-bottom'>
              <span style={{marginRight : '10px'}}>Total trades:</span>
              <span style={{ fontWeight: 700 }}>7</span>
            </div>
            <div className='margin-lg-bottom' >
              <span style={{marginRight : '10px'}} >Winrate:</span>
              <span style={{ fontWeight: 700 }}>42.8%</span>
            </div>
          </Box>
        </Grid>

        <Grid item xs={6} md={2}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <div className='margin-lg-bottom'>
              <span style={{marginRight : '10px'}}>Winners:</span>
              <span style={{ fontWeight: 700 }}>3</span>
            </div>
            <div className='margin-lg-bottom'>
              <span style={{marginRight : '10px'}}>Losers:</span>
              <span style={{ fontWeight: 700 }}>4</span>
            </div>
          </Box>
        </Grid>

        <Grid item xs={6} md={2}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <div className='margin-lg-bottom'>
              <span style={{marginRight : '10px'}}>Gross P&L:</span>
              <span style={{ fontWeight: 700 }}>$62.6</span>
            </div>
            <div className='margin-lg-bottom'>
              <span style={{marginRight : '10px'}}>Volume:</span>
              <span style={{ fontWeight: 700 }}>840</span>
            </div>
          </Box>
        </Grid>

        <Grid item xs={6} md={2}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <div className='margin-lg-bottom'>
              <span style={{marginRight : '10px'}}>Commissions:</span>
              <span style={{ fontWeight: 700 }}>$25</span>
            </div>
            <div className='margin-lg-bottom'>
              <span style={{marginRight : '10px'}}>Profit factor:</span>
              <span style={{ fontWeight: 700 }}>4.21</span>
            </div>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DailyJournalCard;
