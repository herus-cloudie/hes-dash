// ** MUI Imports
import Card from '@mui/material/Card'
import { useTheme } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Third Party Imports
import { ApexOptions } from 'apexcharts'

// ** Custom Components Imports
import OptionsMenu from 'src/@core/components/option-menu'
import ReactApexcharts from 'src/@core/components/react-apexcharts'

const CrmMonthlyBudget = () => {
  // ** Hook
  const theme = useTheme()

  const options: ApexOptions = {
    chart: {
      offsetY: 20,
      offsetX : -20,
      parentHeightOffset: 0,
      toolbar: { show: true , offsetX : -20}
    },
    tooltip: { enabled: false },
    dataLabels: { enabled: false },
    stroke: {
      width: 3,
      curve: 'smooth'
    },
    grid: {
      show: theme.palette.mode == 'light' ? true : false,
      padding: {
        left: 10,
        top: -24,
        right: 12
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
        opacityTo: 0.7,
        opacityFrom: 0.5,
        shadeIntensity: 1,
        stops: [0, 90, 100],
        colorStops: [
          [
            {
              offset: 0,
              opacity: 0.6,
              color: theme.palette.success.main
            },
            {
              offset: 100,
              opacity: 0.1,
              color: theme.palette.background.paper
            }
          ]
        ]
      }
    },
    theme: {
      monochrome: {
        enabled: true,
        shadeTo: 'light',
        shadeIntensity: 1,
        color: theme.palette.success.main
      }
    },
    xaxis: {
      type: 'numeric',
      labels: { show: false },
      axisTicks: { show: false },
      axisBorder: { show: false }
    },
    yaxis: { show: true },
    markers: {
      size: 1,
      offsetY: 1,
      offsetX: -5,
      strokeWidth: 4,
      strokeOpacity: 1,
      colors: ['transparent'],
      strokeColors: 'transparent',
      discrete: [
        {
          size: 7,
          seriesIndex: 0,
          dataPointIndex: 7,
          strokeColor: theme.palette.success.main,
          fillColor: theme.palette.background.paper
        }
      ]
    }
  }

  return (
    <div>
        <ReactApexcharts
          type='area'
          height={200}
          width={280}
          options={options}
          series={[{ name: 'Traffic Rate', data: [0, 85, 25, 125, 90, 550, 200, 350] }]}
        />
    </div>
  )
}

export default CrmMonthlyBudget
