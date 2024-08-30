// ** MUI Imports
import Box, { BoxProps } from '@mui/material/Box'
import Loader from './loader'

const FallbackSpinner = ({ sx }: { sx?: BoxProps['sx'] }) => {

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        ...sx
      }}
    >
       <Loader />
    </Box>
  )
}

export default FallbackSpinner
