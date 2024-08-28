import React, {useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import { useTheme, Card, TextField, Autocomplete } from '@mui/material';
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts';
import ApexDonutChart from 'src/views/charts/apex-charts/ApexDonutChart';
import ReactApexcharts from 'src/@core/components/react-apexcharts';
import ApexAreaChart from 'src/views/charts/apex-charts/ApexAreaChart';
import CardStatisticsVertical from 'src/@core/components/card-statistics/card-stats-vertical';
import Pending from 'src/@core/components/spinner/pending';
import MetaForm from 'src/pages/forms/metaForm';
import AppCalendar from 'src/pages/apps/calendar';
import TableBasic from 'src/views/table/data-grid/TableBasic';
import AnalyticsPerformance from 'src/views/dashboards/analytics/AnalyticsPerformance';
import useCheckMeta from 'src/hooks/useCheckMeta';
import { chartData } from 'src/constant';
import Icon from 'src/@core/components/icon';
import Spinner from 'src/@core/components/spinner'
import { Data } from 'src/constant/data';
import ComboBox from 'src/pages/components/comboBox';

const AnalyticsDashboard = () => {
  const { status } = useCheckMeta();
  
  useEffect(() => {
    setState(status)
  }, [status])

  const [state, setState] = useState(status);

  const theme = useTheme();
  const { series, seriess, optionss, options } = chartData(theme);
  const {balance , total_net_profit , profit_trades_percent , loss_trades_percent , position_table_data , gross_profit , gross_loss ,total_win_count 
    , total_trades , break_even , total_loss_count , daily_profits} = Data;
 
  const allProfit = position_table_data.map(item => item.profit)

  const positiveProfit = allProfit.filter(profit => profit >= 0)
  const negativeProfit = allProfit.filter(profit => profit < 0)
  
  return (
    <>
      {state === 'notEntered' ? (
        <MetaForm setState={setState}/>
      ) : state === 'pending' ? <Pending />
      : state === 'loading' ? <Spinner />
      :(
        <ApexChartWrapper>
            <Autocomplete
              options={['452443 (MT 4)' , '766685 (MT 5)']}
              getOptionLabel={(option: any) => option}
              value={'452443 (MT 4)'}
              className='comboAcc'
              onChange={(e, newValue) => console.log(e , newValue)}
              renderInput={(params) => <TextField {...params} label={'حساب متاتریدر'} variant="standard" />}
            />
          <Grid container spacing={6} className='match-height'>
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
            <Grid item xs={12} sm={6} xl={2.4}>
              <ApexDonutChart title='Day win' colors={['#72E128',  '#FF4D49']} labels={['win', 'loss']} series={[positiveProfit.length , negativeProfit.length]} avrgNumb={positiveProfit.length.toString()} />
            </Grid>
            <Grid item xs={12} sm={6} xl={2.4}>
              <CardStatisticsVertical trend={+total_net_profit >= 0 ? 'positive' : 'negative'} stats={total_net_profit} trendNumber={+((+total_net_profit / +balance) * 100).toFixed(1)} title='Net P&L' chipText='یک ماه گذشته' icon={<Icon icon="solar:dollar-bold" />} />
            </Grid>
            <Grid item xs={12} sm={6} xl={2.4}>
              <ApexDonutChart title='Profit Factor' colors={[ '#2c2cff', '#FF4D49','#72E128']} labels={['break even', 'loss','win' ]} series={[+break_even, +total_loss_count , +total_win_count ]} avrgNumb={(+profit_trades_percent / +loss_trades_percent).toFixed(2)} />
            </Grid>
            <Grid item xs={12} sm={6} lg={6} xl={4}>
              <ApexAreaChart />
            </Grid>
            <Grid item xs={12} sm={6} lg={6} xl={4}>
              <Card dir='ltr'>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column', height: '80%', padding: '1.25rem', justifyItems: 'center' }}>
                  <div>Net Cumulative P&L</div>
                  <div style={{ paddingRight: '10px' }}>
                    <ReactApexcharts type='bar' height={280} series={seriess as any} options={optionss} />
                  </div>
                </div>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} lg={6} xl={4}>
              <AnalyticsPerformance />
            </Grid>
            <Grid item sm={12}>
              <AppCalendar />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TableBasic />
            </Grid>
          </Grid>
        </ApexChartWrapper>
      )}
    </>
  );
};

export default AnalyticsDashboard;
