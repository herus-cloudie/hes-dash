// // ** MUI Imports
// import Grid from '@mui/material/Grid'

// // ** Custom Components Imports
// import CardStatisticsCharacter from 'src/@core/components/card-statistics/card-stats-with-image'

// // ** Styled Component Import
// import KeenSliderWrapper from 'src/@core/styles/libs/keen-slider'
// import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// // ** Demo Components Imports
// import EcommerceTable from 'src/views/dashboards/ecommerce/EcommerceTable'
// import EcommerceTotalVisits from 'src/views/dashboards/ecommerce/EcommerceTotalVisits'
// import EcommerceVisitsByDay from 'src/views/dashboards/ecommerce/EcommerceVisitsByDay'
// import EcommerceLiveVisitors from 'src/views/dashboards/ecommerce/EcommerceLiveVisitors'
// import EcommerceSalesOverview from 'src/views/dashboards/ecommerce/EcommerceSalesOverview'
// import EcommerceWeeklySalesBg from 'src/views/dashboards/ecommerce/EcommerceWeeklySalesBg'
// import EcommerceSalesThisMonth from 'src/views/dashboards/ecommerce/EcommerceSalesThisMonth'
// import EcommerceMarketingSales from 'src/views/dashboards/ecommerce/EcommerceMarketingSales'
// import EcommerceActivityTimeline from 'src/views/dashboards/ecommerce/EcommerceActivityTimeline'
// import EcommerceImpressionsOrders from 'src/views/dashboards/ecommerce/EcommerceImpressionsOrders'
// import EcommerceSalesOverviewWithTabs from 'src/views/dashboards/ecommerce/EcommerceSalesOverviewWithTabs'

// const EcommerceDashboard = () => {
//   return (
//     <ApexChartWrapper>
//       <KeenSliderWrapper>
//         <Grid container spacing={6} className='match-height'>
//           <Grid item xs={12} md={6}>
//             <EcommerceSalesOverview />
//           </Grid>
//           <Grid item xs={12} sm={6} md={3}>
//             <CardStatisticsCharacter
//               data={{
//                 stats: '8.14k',
//                 title: 'Ratings',
//                 chipColor: 'primary',
//                 trendNumber: '+15.6%',
//                 chipText: 'Year of 2022',
//                 src: '/images/cards/card-stats-img-1.png'
//               }}
//             />
//           </Grid>
//           <Grid item xs={12} sm={6} md={3}>
//             <CardStatisticsCharacter
//               data={{
//                 stats: '12.2k',
//                 trend: 'negative',
//                 title: 'Sessions',
//                 chipColor: 'success',
//                 trendNumber: '-25.5%',
//                 chipText: 'Last Month',
//                 src: '/images/cards/card-stats-img-2.png'
//               }}
//             />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <EcommerceWeeklySalesBg />
//           </Grid>
//           <Grid item xs={12} sm={6} md={3}>
//             <EcommerceTotalVisits />
//           </Grid>
//           <Grid item xs={12} sm={6} md={3}>
//             <EcommerceSalesThisMonth />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <EcommerceActivityTimeline />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <EcommerceSalesOverviewWithTabs />
//           </Grid>
//           <Grid item xs={12} sm={6} md={3}>
//             <EcommerceImpressionsOrders />
//           </Grid>
//           <Grid item xs={12} md={5} sx={{ order: [2, 2, 1] }}>
//             <EcommerceMarketingSales />
//           </Grid>
//           <Grid item xs={12} sm={6} md={4} sx={{ order: [1, 1, 2] }}>
//             <EcommerceLiveVisitors />
//           </Grid>
//           <Grid item xs={12} md={8} sx={{ order: 3 }}>
//             <EcommerceTable />
//           </Grid>
//           <Grid item xs={12} md={4} sx={{ order: 3 }}>
//             <EcommerceVisitsByDay />
//           </Grid>
//         </Grid>
//       </KeenSliderWrapper>
//     </ApexChartWrapper>
//   )
// }

// export default EcommerceDashboard

import React from 'react';

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Component Import
import CardStatisticsVertical from 'src/@core/components/card-statistics/card-stats-vertical'
import Pending from 'src/@core/components/spinner/pending'
import MetaForm from 'src/pages/forms/metaForm'

// ** Chart Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import ApexDonutChart from 'src/views/charts/apex-charts/ApexDonutChart'
import ReactApexcharts from 'src/@core/components/react-apexcharts'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import { useTheme } from '@mui/material/styles'
import { Card } from '@mui/material'

// ** constant Imports
import {chartData} from 'src/constant'

// ** custom hooks Imports
import useCheckMeta from 'src/hooks/useCheckMeta'

const Trade = () => {  
  const theme = useTheme();
  
  const {status} = useCheckMeta();

  const { series , options} = chartData(theme)

  const average = (+series[0].data[0] / series[1].data[0]).toFixed(2);

  return (
    <> 
    {
      status == 'notEntered' ? <MetaForm />
      : status == 'pending' ?  <Pending />
      : <ApexChartWrapper>
        <Grid container spacing={6} className='match-height'>  
          <Grid item xs={12} sm={6} xl={3}>
              <ApexDonutChart title='Trade win' colors={[ '#72E128',  '#2c2cff','#FF4D49' ]} labels={['win', 'break even' , 'loss']} series={[7  , 2 , 18]} avrgNumb='25%'/> 
          </Grid>
          <Grid item xs={12} sm={6} xl={3}>
            <Card dir='ltr'>
              <div style={{display : 'flex' , justifyContent : 'space-between', flexDirection : 'column' , height : '100%' ,padding : '1.25rem' , justifyItems : 'center'}}>
                <div style={{}}>Average win/loss trade</div>
                <div style={{paddingRight : '10px'}}><ReactApexcharts type='bar' height={100} series={series} options={options} /></div>
                <p style={{fontSize : '1.82rem' , textAlign : 'center'}}>{ Math.abs(+average) }</p>
              </div>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} xl={3}>
            <CardStatisticsVertical
              stats='$9,820'
              color='success'
              trendNumber='+22%'
              title= 'Net P&L'
              chipText= 'یک ماه گذشته'
              icon={<Icon icon="solar:dollar-bold" />}
              
            />
          </Grid>
          <Grid item xs={12} sm={6} xl={3}>
              <ApexDonutChart title='Profit Factor' colors={[ '#72E128' ,'#FF4D49']} labels={['win', 'loss']} series={[68 , 32]} avrgNumb='1.6'/> 
          </Grid>
        </Grid>
      </ApexChartWrapper>
    }
    </>

  )
}

export default Trade
