// ** MUI Imports
import Grid from '@mui/material/Grid'

import { Card } from "@mui/material"

// ** Icon Imports
// import Icon from 'src/@core/components/icon'

// ** Custom Component Import
// import CardStatisticsVertical from 'src/@core/components/card-statistics/card-stats-vertical'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

import Image from 'next/image'
import CrmMonthlyBudget from 'src/views/dashboards/crm/CrmMonthlyBudget'
import { useTheme } from '@mui/system'

// ** Demo Components Imports
// import CrmAward from 'src/views/dashboards/crm/CrmAward'
// import CrmTable from 'src/views/dashboards/crm/CrmTable'
// import CrmTotalGrowth from 'src/views/dashboards/crm/CrmTotalGrowth'
// import CrmTotalProfit from 'src/views/dashboards/crm/CrmTotalProfit'
// import CrmMonthlyBudget from 'src/views/dashboards/crm/CrmMonthlyBudget'
// import CrmExternalLinks from 'src/views/dashboards/crm/CrmExternalLinks'
// import CrmWeeklyOverview from 'src/views/dashboards/crm/CrmWeeklyOverview'
// import CrmPaymentHistory from 'src/views/dashboards/crm/CrmPaymentHistory'
// import CrmOrganicSessions from 'src/views/dashboards/crm/CrmOrganicSessions'
// import CrmProjectTimeline from 'src/views/dashboards/crm/CrmProjectTimeline'
// import CrmMeetingSchedule from 'src/views/dashboards/crm/CrmMeetingSchedule'
// import CrmSocialNetworkVisits from 'src/views/dashboards/crm/CrmSocialNetworkVisits'
// import CrmMostSalesInCountries from 'src/views/dashboards/crm/CrmMostSalesInCountries'

import DailyJournalPopup from 'src/pages/components/popup/dailyJournalPopup'

const CrmDashboard = () => {

  const theme = useTheme();

  return (
    <ApexChartWrapper>
      <div >
        <Grid style={{marginBottom : '20px'}} container spacing={6} className='match-height'>
          <Grid item sm={12} dir="ltr">
            <Card style={{display : 'flex' , flexDirection : 'column' , padding : '10px 20px 30px'}}>

              <div style={{display : 'flex' , justifyContent : 'space-between' , borderBottom :  '1px #dcdcdc solid'}}>
                <div style={{display : 'flex' , justifyContent : 'space-between' , alignItems : 'center' , gap : '15px'}}>
                  <h3>Tue, Aug 01, 2024</h3>
                  <p style={{color : '#09dd09'}}>Net P&L $43,212</p>
                </div>
                <div style={{display : 'flex' , justifyContent : 'space-between' , alignItems : 'center' , gap : '15px'}}>
                  <DailyJournalPopup />
                  {
                    theme.palette.mode == 'light' ? <Image style={{cursor : 'pointer'}} src={'/images/logos/blue.png'} alt='icon' width={40} height={40}/>
                    : <Image style={{cursor : 'pointer'}} src={'/images/logos/white.png'} alt='icon' width={40} height={40}/>
                  }
                </div>
              </div>

              <div style={{display : 'flex' , gap : '5px' , marginTop : '20px'}}>
                <div>
                  <Grid item xs={12} sm={6} md={4}>
                    <CrmMonthlyBudget />
                  </Grid>
                </div>

                <Grid sm={3} style={{display :'flex', flexDirection : 'column' , justifyContent : 'space-around', borderRight : '1px #dcdcdc solid'}}>
                  <div style={{display : 'flex', justifyContent : 'space-around' ,  }}>
                    <span>Total trades</span>
                    <span style={{fontWeight : 700}}>7</span>
                  </div>
                  
                  <div style={{display : 'flex', justifyContent : 'space-around'}}>
                    <span>Winrate</span>
                    <span style={{fontWeight : 700}}>42.8%</span>
                  </div>
                </Grid>

                <Grid sm={3} style={{display :'flex', flexDirection : 'column' , justifyContent : 'space-around', borderRight : '1px #dcdcdc solid'}}>
                  <div style={{display : 'flex', justifyContent : 'space-around' }}>
                    <span>Winners</span>
                    <span style={{fontWeight : 700}}>3</span>
                  </div>
                  
                  <div style={{display : 'flex', justifyContent : 'space-around'}}>
                    <span>losers</span>
                    <span style={{fontWeight : 700}}>4</span>
                  </div>
                </Grid>

                <Grid sm={3} style={{display :'flex', flexDirection : 'column' , justifyContent : 'space-around', borderRight : '1px #dcdcdc solid'}}>
                  <div style={{display : 'flex', justifyContent : 'space-around'}}>
                    <span>Gross P&L</span>
                    <span style={{fontWeight : 700}}>$62.6</span>
                  </div>
                  
                  <div style={{display : 'flex', justifyContent : 'space-around'}}>
                    <span>Volume</span>
                    <span style={{fontWeight : 700}}>840</span>
                  </div>
                </Grid>
                
                <Grid sm={3} style={{display :'flex', flexDirection : 'column' , justifyContent : 'space-around'}}>
                  <div style={{display : 'flex', justifyContent : 'space-around' }}>
                    <span>Commissions</span>
                    <span style={{fontWeight : 700}}>$25</span>
                  </div>
                  
                  <div style={{display : 'flex', justifyContent : 'space-around' }}>
                    <span>Profit factor</span>
                    <span style={{fontWeight : 700}}>4.21</span>
                  </div>
                </Grid>
                <div className="App">

                </div>
              </div>
            </Card>
          </Grid>
        </Grid>
        
        <Grid container spacing={6} className='match-height'>
        <Grid item sm={12} dir="ltr">
          <Card style={{display : 'flex' , flexDirection : 'column' , padding : '10px 20px 30px'}}>

            <div style={{display : 'flex' , justifyContent : 'space-between', borderBottom :  '1px #dcdcdc solid'}}>
              <div style={{display : 'flex' , justifyContent : 'space-between' , alignItems : 'center' , gap : '15px'}}>
                <h3>Tue, Aug 01, 2024</h3>
                <p style={{color : '#09dd09'}}>Net P&L $43,212</p>
              </div>
              <div style={{display : 'flex' , justifyContent : 'space-between' , alignItems : 'center' , gap : '15px'}}>
              <DailyJournalPopup />
                {
                  theme.palette.mode == 'light' ? <Image style={{cursor : 'pointer'}} src={'/images/logos/blue.png'} alt='icon' width={40} height={40}/>
                  : <Image style={{cursor : 'pointer'}} src={'/images/logos/white.png'} alt='icon' width={40} height={40}/>
                }
              </div>
            </div>

            <div style={{display : 'flex' , gap : '5px' , marginTop : '20px'}}>
              <div>
                <Grid item xs={12} sm={6} md={4}>
                   <CrmMonthlyBudget />
                </Grid>
              </div>

              <Grid sm={3} style={{display :'flex', flexDirection : 'column' , justifyContent : 'space-around', borderRight : '1px #dcdcdc solid'}}>
                <div style={{display : 'flex', justifyContent : 'space-around' ,  }}>
                  <span>Total trades</span>
                  <span style={{fontWeight : 700}}>7</span>
                </div>
                
                <div style={{display : 'flex', justifyContent : 'space-around'}}>
                  <span>Winrate</span>
                  <span style={{fontWeight : 700}}>42.8%</span>
                </div>
              </Grid>

              <Grid sm={3} style={{display :'flex', flexDirection : 'column' , justifyContent : 'space-around', borderRight : '1px #dcdcdc solid'}}>
                <div style={{display : 'flex', justifyContent : 'space-around' }}>
                  <span>Winners</span>
                  <span style={{fontWeight : 700}}>3</span>
                </div>
                
                <div style={{display : 'flex', justifyContent : 'space-around'}}>
                  <span>losers</span>
                  <span style={{fontWeight : 700}}>4</span>
                </div>
              </Grid>

              <Grid sm={3} style={{display :'flex', flexDirection : 'column' , justifyContent : 'space-around', borderRight : '1px #dcdcdc solid'}}>
                <div style={{display : 'flex', justifyContent : 'space-around'}}>
                  <span>Gross P&L</span>
                  <span style={{fontWeight : 700}}>$62.6</span>
                </div>
                
                <div style={{display : 'flex', justifyContent : 'space-around'}}>
                  <span>Volume</span>
                  <span style={{fontWeight : 700}}>840</span>
                </div>
              </Grid>
              
              <Grid sm={3} style={{display :'flex', flexDirection : 'column' , justifyContent : 'space-around'}}>
                <div style={{display : 'flex', justifyContent : 'space-around' }}>
                  <span>Commissions</span>
                  <span style={{fontWeight : 700}}>$25</span>
                </div>
                
                <div style={{display : 'flex', justifyContent : 'space-around' }}>
                  <span>Profit factor</span>
                  <span style={{fontWeight : 700}}>4.21</span>
                </div>
              </Grid>
            </div>

          </Card>
        </Grid>
        </Grid>
      </div>

    </ApexChartWrapper>
  )
}

export default CrmDashboard


    // <ApexChartWrapper>
    //   <Grid container spacing={6} className='match-height'>
    //     <Grid item xs={12} md={4}>
    //       <CrmAward />
    //     </Grid>
    //     <Grid item xs={6} sm={3} md={2}>
    //       <CardStatisticsVertical
    //         stats='155k'
    //         color='primary'
    //         trendNumber='+22%'
    //         title='Total Orders'
    //         chipText='Last 4 Month'
    //         icon={<Icon icon='mdi:cart-plus' />}
    //       />
    //     </Grid>
    //     <Grid item xs={6} sm={3} md={2}>
    //       <CardStatisticsVertical
    //         stats='$13.4k'
    //         color='success'
    //         trendNumber='+38%'
    //         title='Total Sales'
    //         chipText='Last Six Month'
    //         icon={<Icon icon='mdi:currency-usd' />}
    //       />
    //     </Grid>
    //     <Grid item xs={6} sm={3} md={2}>
    //       <CrmTotalProfit />
    //     </Grid>
    //     <Grid item xs={6} sm={3} md={2}>
    //       <CrmTotalGrowth />
    //     </Grid>
    //     <Grid item xs={12} md={4}>
    //       <CrmOrganicSessions />
    //     </Grid>
    //     <Grid item xs={12} md={8}>
    //       <CrmProjectTimeline />
    //     </Grid>
    //     <Grid item xs={12} sm={6} md={4}>
    //       <CrmWeeklyOverview />
    //     </Grid>
    //     <Grid item xs={12} sm={6} md={4}>
    //       <CrmSocialNetworkVisits />
    //     </Grid>
    //     <Grid item xs={12} sm={6} md={4}>
    //       <CrmMonthlyBudget />
    //     </Grid>
    //     <Grid item xs={12} sm={6} md={4}>
    //       <CrmMeetingSchedule />
    //     </Grid>
    //     <Grid item xs={12} sm={6} md={4}>
    //       <CrmExternalLinks />
    //     </Grid>
    //     <Grid item xs={12} sm={6} md={4}>
    //       <CrmPaymentHistory />
    //     </Grid>
    //     <Grid item xs={12} md={4}>
    //       <CrmMostSalesInCountries />
    //     </Grid>
    //     <Grid item xs={12} md={8}>
    //       <CrmTable />
    //     </Grid>
    //   </Grid>
    // </ApexChartWrapper>