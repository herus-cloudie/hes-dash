// ** React Imports
import { ReactNode } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import TableContainer from '@mui/material/TableContainer'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Components Imports
import CustomChip from 'src/@core/components/mui/chip'
import OptionsMenu from 'src/@core/components/option-menu'

interface DataType {
  title: string
  sales: string
  trend: ReactNode
  trendNumber: string
}

const data: DataType[] = [
  {
    sales: '18,879',
    title: 'Australia',
    trendNumber: '15%',
    trend: (
      <Box component='span' sx={{ color: 'error.main', '& svg': { verticalAlign: 'bottom' } }}>
        <Icon icon='mdi:chevron-down' />
      </Box>
    )
  },
  {
    sales: '10,357',
    title: 'Canada',
    trendNumber: '85%',
    trend: (
      <Box component='span' sx={{ color: 'success.main', '& svg': { verticalAlign: 'bottom' } }}>
        <Icon icon='mdi:chevron-up' />
      </Box>
    )
  },
  {
    sales: '4,860',
    title: 'India',
    trendNumber: '48%',
    trend: (
      <Box component='span' sx={{ color: 'success.main', '& svg': { verticalAlign: 'bottom' } }}>
        <Icon icon='mdi:chevron-up' />
      </Box>
    )
  },
  {
    sales: '899',
    title: 'US',
    trendNumber: '16%',
    trend: (
      <Box component='span' sx={{ color: 'error.main', '& svg': { verticalAlign: 'bottom' } }}>
        <Icon icon='mdi:chevron-down' />
      </Box>
    )
  },
  {
    sales: '43',
    title: 'Japan',
    trendNumber: '35%',
    trend: (
      <Box component='span' sx={{ color: 'success.main', '& svg': { verticalAlign: 'bottom' } }}>
        <Icon icon='mdi:chevron-up' />
      </Box>
    )
  },
  {
    sales: '18',
    title: 'Brazil',
    trendNumber: '12%',
    trend: (
      <Box component='span' sx={{ color: 'success.main', '& svg': { verticalAlign: 'bottom' } }}>
        <Icon icon='mdi:chevron-up' />
      </Box>
    )
  }
]

const CardSalesInCountries = () => {
  return (
    <Card>
      <CardHeader
        title='Most Sales in Countries'
        titleTypographyProps={{ sx: { lineHeight: '2rem !important', letterSpacing: '0.15px !important' } }}
        action={
          <OptionsMenu
            options={['28 روز گذشته', 'ماه گذشته', 'سال گذشته']}
            iconButtonProps={{ size: 'small', sx: { color: 'text.primary' } }}
          />
        }
      />
      <CardContent>
        <Box sx={{ mb: 5, display: 'flex', flexDirection: 'column' }}>
          <Box sx={{ mb: 1.25, display: 'flex', alignItems: 'center' }}>
            <Typography variant='h3' sx={{ mr: 3.5 }}>
              22,842
            </Typography>
            <CustomChip
              skin='light'
              size='small'
              label='+42%'
              color='success'
              sx={{ height: 20, fontSize: '0.75rem', fontWeight: 500 }}
            />
          </Box>
          <Typography variant='caption'>Sales Last 90 Days</Typography>
        </Box>

        <TableContainer>
          <Table>
            <TableBody>
              {data.map((row: DataType) => {
                return (
                  <TableRow
                    key={row.title}
                    sx={{
                      '&:last-of-type td': { border: 0, pb: 0 },
                      '&:first-of-type td': { borderTop: theme => `1px solid ${theme.palette.divider}` },
                      '& .MuiTableCell-root': {
                        '&:last-of-type': { pr: 0 },
                        '&:first-of-type': { pl: '0 !important' },
                        py: theme => `${theme.spacing(2.75)} !important`
                      }
                    }}
                  >
                    <TableCell>
                      <Typography sx={{ fontSize: '0.875rem' }}>{row.title}</Typography>
                    </TableCell>
                    <TableCell align='right'>
                      <Typography sx={{ fontWeight: 600, fontSize: '0.875rem' }}>{row.sales}</Typography>
                    </TableCell>
                    <TableCell>
                      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                        <Typography sx={{ mr: 1.5, fontWeight: 600, fontSize: '0.875rem' }}>
                          {row.trendNumber}
                        </Typography>
                        {row.trend}
                      </Box>
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  )
}

export default CardSalesInCountries
