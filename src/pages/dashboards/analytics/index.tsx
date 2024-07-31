// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Component Import
import CardStatisticsVertical from 'src/@core/components/card-statistics/card-stats-vertical'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports
// import AnalyticsSessions from 'src/views/dashboards/analytics/AnalyticsSessions'
// import AnalyticsOverview from 'src/views/dashboards/analytics/AnalyticsOverview'
import AnalyticsPerformance from 'src/views/dashboards/analytics/AnalyticsPerformance'

// import AnalyticsWeeklySales from 'src/views/dashboards/analytics/AnalyticsWeeklySales'
// import AnalyticsVisitsByDay from 'src/views/dashboards/analytics/AnalyticsVisitsByDay'
// import AnalyticsTotalRevenue from 'src/views/dashboards/analytics/AnalyticsTotalRevenue'
// import AnalyticsSalesCountry from 'src/views/dashboards/analytics/AnalyticsSalesCountry'
// import AnalyticsCongratulations from 'src/views/dashboards/analytics/AnalyticsCongratulations'
// import AnalyticsActivityTimeline from 'src/views/dashboards/analytics/AnalyticsActivityTimeline'
// import AnalyticsTotalTransactions from 'src/views/dashboards/analytics/AnalyticsTotalTransactions'
// import AnalyticsProjectStatistics from 'src/views/dashboards/analytics/AnalyticsProjectStatistics'
// import AnalyticsTopReferralSources from 'src/views/dashboards/analytics/AnalyticsTopReferralSources'
import ApexDonutChart from 'src/views/charts/apex-charts/ApexDonutChart'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import { useTheme } from '@mui/material/styles'


// ** Third Party Imports
import { ApexOptions } from 'apexcharts'

import ReactApexcharts from 'src/@core/components/react-apexcharts'

// ** Util Import
import { hexToRGBA } from 'src/@core/utils/hex-to-rgba'
import { Card } from '@mui/material'
import ApexAreaChart from 'src/views/charts/apex-charts/ApexAreaChart'
import TableBasic from 'src/views/table/data-grid/TableBasic'
import AppCalendar from 'src/pages/apps/calendar'

const AnalyticsDashboard = () => {  
  const theme = useTheme();

  const series = [
  {
    name: 'Profit',
    data: [1055]
  },
  {
    name: 'Loss',
    data: [-238]
  }
  ]
  const options: ApexOptions = {
    chart: {
      stacked: true,
      parentHeightOffset: 0,
      toolbar: { show: false }
    },
    plotOptions: {
      bar: {
        borderRadius: 5,
        barHeight: '40%',
        horizontal: true,
        endingShape: 'flat',
        startingShape: 'rounded'
      }
    },
    tooltip: {
      y: {
        formatter: val => `${Math.abs(val)}`
      }
    },
    xaxis: {
      position: 'top',
      axisTicks: { show: false },
      axisBorder: { show: false },
      categories: ['dollar'],
      labels: {
        formatter: val => `${Math.abs(Number(val))}`,
        style: { colors: theme.palette.text.disabled }
      }
    },
    yaxis: {
      labels: { show: false }
    },
    colors: [hexToRGBA('#72E128', 1),hexToRGBA('#FF4D49', 1)],
    grid: {
      borderColor: '#ffffff33',
      xaxis: {
        lines: { show: true }
      },
      yaxis: {
        lines: { show: false }
      },
      padding: {
        top: 5,
        bottom: -25
      }
    },
    legend: { show: false },
    dataLabels: { enabled: false },
    states: {
      hover: {
        filter: { type: 'none' }
      },
      active: {
        filter: { type: 'none' }
      }
    }
  }

  const seriess = [
    {
      name: 'Above',
      data: [83 , 153 , , , , 45 , 320]
    },
    {
      name: 'Below',
      data: [ , , -216 , -282 , -5 , , ]
    }
  ]
  const optionss: ApexOptions = {
    chart: {
      stacked: true,
      parentHeightOffset: 0,
      toolbar: { show: false }
    },
    plotOptions: {
      bar: {
        borderRadius: 5,
        barHeight: '40%',
        horizontal: true,
        endingShape: 'flat',
        startingShape: 'rounded'
      }
    },
    tooltip: {
      y: {
        formatter: val => `${Math.abs(val)}`
      }
    },
    xaxis: {
      position: 'top',
      axisTicks: { show: false },
      axisBorder: { show: false },
      categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      labels: {
        formatter: val => `${Math.abs(Number(val))}`,
        style: { colors: theme.palette.text.disabled }
      }
    },
    yaxis: {
      labels: { show: false }
    },
    colors: [hexToRGBA('#72E128', 1),hexToRGBA('#FF4D49', 1)],
    grid: {
      borderColor: theme.palette.divider,
      xaxis: {
        lines: { show: true }
      },
      yaxis: {
        lines: { show: false }
      },
      padding: {
        top: 5,
        bottom: -25
      }
    },
    legend: { show: false },
    dataLabels: { enabled: false },
    states: {
      hover: {
        filter: { type: 'none' }
      },
      active: {
        filter: { type: 'none' }
      }
    }
  }

  const average = (+series[0].data[0] / +series[1].data[0]).toFixed(2);

  return (
    <ApexChartWrapper>
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
          {/* <AnalyticsProjectStatistics /> */}
        </Grid>
        
        {/* <Grid item xs={12} sm={6} md={12}>
          <Grid container spacing={6}>
            <Grid item xs={6}>
              <AnalyticsTotalRevenue />
            </Grid>
            <Grid item xs={6}>
              <CardStatisticsVertical
                stats='$13.4k'
                color='success'
                trendNumber='+38%'
                title='مجموع فروش'
                chipText='شیش ماه گذشته'
                icon={<Icon icon='mdi:currency-usd' />}
              />
            </Grid>
            <Grid item xs={6}>
              <CardStatisticsVertical
                color='info'
                stats='142.8k'
                trendNumber='+62%'
                chipText='یکسال گذشته'
                title='کل برداشت ها'
                icon={<Icon icon='mdi:link' />}
              />
            </Grid>
            <Grid item xs={6}>
              <AnalyticsOverview />
            </Grid>
          </Grid>
        </Grid> */}
        {/* <Grid item xs={12} sm={6} md={4}>
          <AnalyticsSalesCountry />
        </Grid>
        <Grid item xs={12} md={8}>
          <AnalyticsTopReferralSources />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <AnalyticsWeeklySales />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <AnalyticsVisitsByDay />
        </Grid>
        <Grid item xs={12} md={8}>
          <AnalyticsActivityTimeline />
        </Grid> */}
      </Grid>
    </ApexChartWrapper>
  )
}

export default AnalyticsDashboard
