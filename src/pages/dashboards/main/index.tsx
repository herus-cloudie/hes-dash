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


const AnalyticsDashboard = () => {  
  const theme = useTheme();
  const [status , setStatus] = useState<'notEntered' | 'pending' | 'success'>('notEntered')

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
