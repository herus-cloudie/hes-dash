// ** MUI Imports
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Grid, { GridProps } from '@mui/material/Grid'
import { styled, useTheme } from '@mui/material/styles'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Third Party Imports
import { ApexOptions } from 'apexcharts'

// ** Custom Components Imports
import CustomAvatar from 'src/@core/components/mui/avatar'
import OptionsMenu from 'src/@core/components/option-menu'
import ReactApexcharts from 'src/@core/components/react-apexcharts'

// ** Util Import
import { hexToRGBA } from 'src/@core/utils/hex-to-rgba'

const series = [
  {
    name: 'Last Week',
    data: [83, 153, 213, 279, 213, 153, 83]
  },
  {
    name: 'This Week',
    data: [-84, -156, -216, -282, -216, -156, -84]
  }
]

// Styled Grid component
const StyledGrid = styled(Grid)<GridProps>(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  [theme.breakpoints.up('sm')]: {
    borderRight: `1px solid ${theme.palette.divider}`
  }
}))

const AnalyticsTotalTransactions = () => {
  // ** Hook
  const theme = useTheme()

  const options: ApexOptions = {
    chart: {
      stacked: true,
      parentHeightOffset: 0,
      toolbar: { show: false }
    },
    plotOptions: {
      bar: {
        borderRadius: 5,
        barHeight: '30%',
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
    colors: [hexToRGBA(theme.palette.primary.main, 1), hexToRGBA(theme.palette.success.main, 1)],
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

  return (
    <Card>
      <Grid container>
        <StyledGrid item xs={12} sm={7}>
          <CardHeader title='مجموع ترکنش ها' titleTypographyProps={{ sx: { letterSpacing: '0.15px' } }} />
          <CardContent
            sx={{
              '& .apexcharts-series[rel="2"]': {
                transform: theme.direction === 'rtl' ? 'translateX(-5px)' : 'translateX(5px)'
              }
            }}
          >
            <ReactApexcharts type='bar' height={278} series={series} options={options} />
          </CardContent>
        </StyledGrid>
        <Grid item xs={12} sm={5}>
          <CardHeader
            title='گزارش'
            subheader='تراکنش های ماه گذشته $234.40k'
            subheaderTypographyProps={{ sx: { lineHeight: 1.429 } }}
            titleTypographyProps={{ sx: { letterSpacing: '0.15px' } }}
            action={
              <OptionsMenu
              options={['28 روز گذشته', 'ماه گذشته', ' سال گذشته']}
                iconButtonProps={{ size: 'small', className: 'card-more-options' }}
              />
            }
          />
          <CardContent sx={{ pt: theme => `${theme.spacing(6)} !important` }}>
            <Grid container>
              <Grid
                item
                xs={6}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: 'column',
                  borderRight: theme => `1px solid ${theme.palette.divider}`
                }}
              >
                <CustomAvatar skin='light' sx={{ mb: 3 }} color='success' variant='rounded'>
                  <Icon icon='mdi:trending-up' />
                </CustomAvatar>
                <Typography sx={{ mb: 0.5 }} variant='body2'>
                  هفته جاری
                </Typography>
                <Typography sx={{ fontWeight: 600 }}>+82.45%</Typography>
              </Grid>
              <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                <CustomAvatar skin='light' sx={{ mb: 3 }} variant='rounded'>
                  <Icon icon='mdi:trending-down' />
                </CustomAvatar>
                <Typography sx={{ mb: 0.5 }} variant='body2'>
                  هفته گذشته
                </Typography>
                <Typography sx={{ fontWeight: 600 }}>-24.86%</Typography>
              </Grid>
            </Grid>
            <Divider
              sx={{ mt: theme => `${theme.spacing(10)} !important`, mb: theme => `${theme.spacing(7.5)} !important` }}
            />
            <Grid container>
              <Grid
                item
                xs={6}
                sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center' }}
              >
                <Typography sx={{ mb: 0.5 }} variant='body2'>
                  عملکرد
                </Typography>
                <Typography sx={{ fontWeight: 600 }}>+94.15%</Typography>
              </Grid>
              <Grid item xs={6}>
                <Button fullWidth variant='contained'>
                  دیدن گزارش
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  )
}

export default AnalyticsTotalTransactions
