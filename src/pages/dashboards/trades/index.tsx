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

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Component Import
import CardStatisticsVertical from 'src/@core/components/card-statistics/card-stats-vertical'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports
import AnalyticsPerformance from 'src/views/dashboards/analytics/AnalyticsPerformance'

import ApexDonutChart from 'src/views/charts/apex-charts/ApexDonutChart'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import { useTheme } from '@mui/material/styles'

// ** Third Party Imports
import ReactApexcharts from 'src/@core/components/react-apexcharts'

// ** Util Import
import { Box, Button, Card, Checkbox, FormControl, FormControlLabel, FormHelperText, TextField } from '@mui/material'
import ApexAreaChart from 'src/views/charts/apex-charts/ApexAreaChart'
import TableBasic from 'src/views/table/data-grid/TableBasic'
import AppCalendar from 'src/pages/apps/calendar'
import ComboBox from '../../components/comboBox/index'

// ** validation Imports
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import React, { useState } from 'react';

// ** constant Imports
import { BrokerType } from 'src/types/forms/reactDatepickerTypes'
import {brokerCredentialSchema, chartData} from 'src/constant'


const Trade = () => {  
  const theme = useTheme();
  const [status , setStatus] = useState<'notEntered' | 'pending' | 'success'>('success')

  const [broker , setBroker] = useState<BrokerType>('Alpari');
  const handleBrokerChange = (newValue : BrokerType) => setBroker(newValue);
  
  const [metaTraderVersion , setMetaTraderVersion] = useState<'4' | '5'>('4');
  const handleMetaVersionChange = (newValue : '4' | '5') => setMetaTraderVersion(newValue);

  const [agree , setAgree] = useState<boolean>(false);
  const changeAgreeHandler = () => setAgree(!agree);

  const { series , seriess , optionss , options} = chartData(theme)

  const average = (+series[0].data[0] / series[1].data[0]).toFixed(2);

  const defaultValues = {
    accountNumber: '', 
    investPassword: '',
    serverName : ''
  }

  const onSubmit = async (data: any) => {
    const { accountNumber , investPassword , serverName } = data;
    console.log(accountNumber , investPassword , serverName)
    setStatus('pending')
    
    // setLoading(true);
    // const result = await signIn('credentials' , {
    //   email,
    //   password,
    //   redirect : false
    // })
    // setLoading(false)
    // if(result?.error == 'User does not exist') setError('.اکانتی با این شناسه وجود ندارد')
    // else if(result?.error == 'Password is incorrect') setError('.پسورد اشتباه است')
    // else if(result?.ok) {
    //   setError('')
    //   router.push('/dashboards/main')
    // }
  }

  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm({
    defaultValues,
    mode: 'onBlur',
    resolver: yupResolver(brokerCredentialSchema)
  })

  return (
    <> 
    {
      status == 'notEntered' ? 
      <Box sx={{width: '100%', textAlign : 'center' , fontSize : '27px' , display : 'flex' , flexDirection : 'column' , alignItems : 'center' ,  justifyContent : 'center' , top : 0 , left : 0 , height : '100%'}}>
        <p style={{fontWeight : 700}}>تکمیل اطلاعات حساب متا تریدر</p>
        <div style={{width : '330px'}}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl dir="ltr" fullWidth sx={{ mb: 5 }}>
                <Controller
                  name='accountNumber'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      autoFocus
                      label='اکانت نامبر'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.accountNumber)}
                      placeholder=''
                    />
                  )}
                />
                {errors.accountNumber && <FormHelperText sx={{ color: 'error.main' }}>اکانت نامبر باید حداقل 3 کاراکتر باشد</FormHelperText>}
              
                <br />
                <Controller
                  name='investPassword'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      label='پسورد سرمایه گذار'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.investPassword)}
                      placeholder=''
                    />
                  )}
                />
                {errors.investPassword && <FormHelperText sx={{ color: 'error.main' }}> پسورد باید حداقل 3 کاراکتر باشد</FormHelperText>}
                
                <br />
                <Controller
                  name='serverName'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      label='سرور'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.serverName)}
                      placeholder=''
                    />
                  )}
                />
                {errors.serverName && <FormHelperText sx={{ color: 'error.main' }}> پسورد باید حداقل 3 کاراکتر باشد</FormHelperText>}
                <br />
                <div style={{display : 'flex' , justifyContent : 'space-between'}}>
                  <ComboBox  value={broker} onChange={handleBrokerChange} />
                  <ComboBox value={metaTraderVersion as '4' | '5'} onChange={handleMetaVersionChange} />
                </div>

            </FormControl>
            <div style={{display : 'flex' , flexDirection : 'column' , widows : '330px' }}>
              <FormControlLabel
                  label='تمامی قوانین را قبول دارم'
                  control={<Checkbox checked={agree} onChange={changeAgreeHandler} />}
                />
                <br />
              <Button fullWidth size='large' type='submit' variant='contained'>ارسال</Button>
            </div>
          </form>
        </div>
      </Box>
      : status == 'pending' ?  
      <Box sx={{width: '100%', textAlign : 'center' , display : 'flex' , flexDirection : 'column' , alignItems : 'center' ,  justifyContent : 'center' , top : 0 , left : 0 , height : '100%'}}>
        <div style={{display : 'flex' , justifyContent : 'space-evenly' , alignItems : 'center'}}>
          <h2 style={{fontSize : '27px' , marginLeft : '15px'}}>در حال بررسی ...</h2>
          <Icon icon="svg-spinners:clock" width={35}/>
        </div>
        <p>اطلاعات شما در دست بررسی میباشد. از شکیبایی شما متشکریم❤️</p>
        <div style={{width : '200px' , marginTop : '20px'}}><Button fullWidth size='large' type='submit' variant='contained'>مشاهده جزییات</Button></div>
      </Box>
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
