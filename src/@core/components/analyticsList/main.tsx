import React, {useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import { useTheme, Card, TextField, Autocomplete } from '@mui/material';
import ApexDonutChart from 'src/views/charts/apex-charts/ApexDonutChart';
import ReactApexcharts from 'src/@core/components/react-apexcharts';
import CardStatisticsVertical from 'src/@core/components/card-statistics/card-stats-vertical';
import { chartData } from 'src/constant';
import Icon from 'src/@core/components/icon';
import { Data } from 'src/constant/data';

const MainCharts = ({children} : {children ?: any}) => {
  
    const theme = useTheme();

    const { series, options } = chartData(theme);
    const {balance , total_net_profit , profit_trades_percent , loss_trades_percent  , gross_profit , gross_loss ,total_win_count 
      , total_trades , break_even , total_loss_count } = Data;

  return (
    <>
        <Grid item xs={12} sm={6} xl={2.4}>
            <ApexDonutChart title='Trade win' colors={['#72E128', '#2c2cff', '#FF4D49']} labels={['win', 'break even', 'loss']} series={[+total_win_count, +break_even, +total_loss_count]} avrgNumb={`${((+total_win_count / +total_trades) * 100).toFixed(1).toString()} %`} />
        </Grid>
        <Grid item xs={12} sm={6} xl={2.4}>
            <Card dir='ltr'>
            <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column', height: '100%', padding: '1.25rem', justifyItems: 'center' }}>
                <div>Average win/loss trade</div>
                <div style={{ paddingRight: '10px' }}>
                <ReactApexcharts type='bar' height={100} series={series} options={options} />
                </div>
                <p style={{ fontSize: '1.82rem', textAlign: 'center' }}>{Math.abs(+gross_profit / +gross_loss).toFixed(2)}</p>
            </div>
            </Card>
        </Grid>
        {children}
        <Grid item xs={12} sm={6} xl={2.4}>
            <CardStatisticsVertical trend={+total_net_profit >= 0 ? 'positive' : 'negative'} stats={total_net_profit} trendNumber={+((+total_net_profit / +balance) * 100).toFixed(1)} title='Net P&L' chipText='یک ماه گذشته' icon={<Icon icon="solar:dollar-bold" />} />
        </Grid>
        <Grid item xs={12} sm={6} xl={2.4}>
            <ApexDonutChart title='Profit Factor' colors={[ '#2c2cff', '#FF4D49','#72E128']} labels={['break even', 'loss','win' ]} series={[+break_even, +total_loss_count , +total_win_count ]} avrgNumb={(+profit_trades_percent / +loss_trades_percent).toFixed(2)} />
        </Grid>
    </>
  )
}

export default MainCharts