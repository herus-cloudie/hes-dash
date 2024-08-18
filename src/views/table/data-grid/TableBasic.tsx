// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import { DataGrid, GridColDef } from '@mui/x-data-grid'

import { Data } from "src/constant/data"

const {position_table_data} = Data;

const rows = position_table_data.map(item => {
  return {
    symbol : item.symbol,
    time : item.time,
    id: `${item.profit} $`,
  }
})

const columns: GridColDef[] = [
  {
    flex: 0.2,
    field: 'id',
    minWidth: 120,
    headerName: 'Net P&L'
  },
  {
    flex: 0.2,
    minWidth: 120,
    field: 'symbol',
    headerName: 'Symbol'
  },
  {
    flex: 0.2,
    minWidth: 120,
    field: 'time',
    headerName: 'Close Date'
  },
]

const TableBasic = () => {
  return (
    <Card  dir='ltr'>
      <CardHeader title='Recent Trade'/>
      <Box sx={{ height: 660 }}>
        <DataGrid columns={columns} rows={rows.slice(0, 15)} />
      </Box>
    </Card>
  )
}

export default TableBasic
