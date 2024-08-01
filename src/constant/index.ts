import { ApexOptions } from "apexcharts"
import { hexToRGBA } from 'src/@core/utils/hex-to-rgba'
import * as yup from 'yup'

function chartData(theme : any){

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
    
    return {series , seriess , options , optionss}
}

const brokerCredentialSchema = yup.object().shape({
    accountNumber: yup.string().min(3).required(),
    investPassword: yup.string().min(3).required(),
    serverName: yup.string().min(3).required(),
})
const loginCredentialSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(5).required()
})

export {chartData , brokerCredentialSchema , loginCredentialSchema}