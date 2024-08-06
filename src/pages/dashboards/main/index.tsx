import React from 'react';

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Component Import
import CardStatisticsVertical from 'src/@core/components/card-statistics/card-stats-vertical'
import Pending from 'src/@core/components/spinner/pending'
import MetaForm from 'src/pages/forms/metaForm'

// ** Chart Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import AnalyticsPerformance from 'src/views/dashboards/analytics/AnalyticsPerformance'
import ApexDonutChart from 'src/views/charts/apex-charts/ApexDonutChart'
import ReactApexcharts from 'src/@core/components/react-apexcharts'
import ApexAreaChart from 'src/views/charts/apex-charts/ApexAreaChart'
import TableBasic from 'src/views/table/data-grid/TableBasic'
import AppCalendar from 'src/pages/apps/calendar'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import { useTheme } from '@mui/material/styles'
import { Card } from '@mui/material'

// ** constant Imports
import {chartData} from 'src/constant'

// ** custom hooks Imports
import useCheckMeta from 'src/hooks/useCheckMeta'

const AnalyticsDashboard = () => {  
  const theme = useTheme();

  const {isLoading , status} = useCheckMeta();

  const { series , seriess , optionss , options} = chartData(theme)
  const average = (+series[0].data[0] / series[1].data[0]).toFixed(2);

  return (
    <> 
    {
      status == 'notEntered' ? <MetaForm />
      : status == 'pending' ?  <Pending />
      : <ApexChartWrapper>
        <Grid container spacing={6} className='match-height'>  
          <Grid item xs={12} sm={6} xl={2.4}>
              <ApexDonutChart title='Trade win' colors={[ '#72E128',  '#2c2cff','#FF4D49' ]} labels={['win', 'break even' , 'loss']} series={[7  , 2 , 18]} avrgNumb='25%'/> 
          </Grid>
          <Grid item xs={12} sm={6} xl={2.4}>
            <Card dir='ltr'>
              <div style={{display : 'flex' , justifyContent : 'space-between', flexDirection : 'column' , height : '100%' ,padding : '1.25rem' , justifyItems : 'center'}}>
                <div style={{}}>Average win/loss trade</div>
                <div style={{paddingRight : '10px'}}><ReactApexcharts type='bar' height={100} series={series} options={options} /></div>
                <p style={{fontSize : '1.82rem' , textAlign : 'center'}}>{ Math.abs(+average) }</p>
              </div>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} xl={2.4}>
              <ApexDonutChart title='Day win' colors={[ '#72E128' ,'#FF4D49']} labels={['win', 'loss']} series={[22 , 78]} avrgNumb='1.6'/> 
          </Grid>
          <Grid item xs={12} sm={6} xl={2.4}>
            <CardStatisticsVertical
              stats='$9,820'
              color='success'
              trendNumber='+22%'
              title= 'Net P&L'
              chipText= 'یک ماه گذشته'
              icon={<Icon icon="solar:dollar-bold" />}
              
            />
          </Grid>
          <Grid item xs={12} sm={6} xl={2.4}>
              <ApexDonutChart title='Profit Factor' colors={[ '#72E128' ,'#FF4D49']} labels={['win', 'loss']} series={[68 , 32]} avrgNumb='1.6'/> 
          </Grid>
          <Grid item xs={12} sm={6} lg={6} xl={4}>
            <ApexAreaChart />
          </Grid>
          <Grid item xs={12} sm={6} lg={6} xl={4}>
            <Card dir='ltr'>
              <div style={{display : 'flex' , justifyContent : 'space-between', flexDirection : 'column' , height : '80%' ,padding : '1.25rem' , justifyItems : 'center'}}>
                <div>Net Cumulative P&L</div>
                <div style={{paddingRight : '10px'}}><ReactApexcharts type='bar' height={280} series={seriess as any} options={optionss} /></div>
              </div>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} lg={6} xl={4}>
            <AnalyticsPerformance />
          </Grid>
          <Grid item xs={12} md={8}>
            <AppCalendar/>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TableBasic />
          </Grid>
        </Grid>
      </ApexChartWrapper>
    }
    </>

  )
}

export default AnalyticsDashboard
