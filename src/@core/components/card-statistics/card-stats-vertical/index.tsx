// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Custom Components Imports
import CustomChip from 'src/@core/components/mui/chip'
import CustomAvatar from 'src/@core/components/mui/avatar'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Types Imports
import { CardStatsVerticalProps } from 'src/@core/components/card-statistics/types'

const CardStatsVertical = (props: CardStatsVerticalProps) => {
  // ** Props
  const { title, color, icon, stats, chipText, trendNumber, trend = 'positive' } = props

  return (
    <Card>
      <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ mb: 6, width: '100%', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
          <CustomAvatar skin='light' variant='rounded' color={color}>
            {icon}
          </CustomAvatar>
          <Box
            sx={{ display: 'flex', alignItems: 'center', color: trend === 'positive' ? 'success.main' : 'error.main' }}
          >
            <Typography variant='subtitle2' sx={{ color: trend === 'positive' ? 'success.main' : 'error.main' }}>
              {trendNumber}
            </Typography>
            <Icon icon={trend === 'positive' ? 'mdi:chevron-up' : 'mdi:chevron-down'} fontSize='1.25rem' />
          </Box>
        </Box>
        <div style={{display : 'flex' , height : '150px' , marginTop : '-10px' , flexDirection : 'column-reverse' , justifyContent : 'flex-end' , alignItems : 'flex-end'}}>
          <Typography variant='h4' sx={{ mb: 1 , color : '#72E128'}}>
            {stats}
          </Typography>
          <Typography variant='h4' sx={{ mb: -5 }}>
            <p>{title}</p>
          </Typography>
        </div>
        <CustomChip
          skin='light'
          size='medium'
          label={chipText}
          color='secondary'
          sx={{ height: 25, fontWeight: 500, fontSize: '.8rem', alignSelf: 'flex-start', color: 'text.secondary' }}
        />
      </CardContent>
    </Card>
  )
}

export default CardStatsVertical
