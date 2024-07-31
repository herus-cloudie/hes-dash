// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import { DataGrid, GridColDef } from '@mui/x-data-grid'

// ** Data Import
import { rows } from 'src/@fake-db/table/static-data'

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
    field: 'full_name',
    headerName: 'Symbol'
  },
  {
    flex: 0.2,
    minWidth: 120,
    field: 'email',
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
