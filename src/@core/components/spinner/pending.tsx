import { Box, Button } from "@mui/material"
import Icon from 'src/@core/components/icon'

const Pending = () => {
  return (
    <Box sx={{width: '100%', textAlign : 'center' , display : 'flex' , flexDirection : 'column' , alignItems : 'center' ,  justifyContent : 'center' , top : 0 , left : 0 , height : '100%'}}>
        <div style={{display : 'flex' , justifyContent : 'space-evenly' , alignItems : 'center'}}>
            <h2 style={{fontSize : '27px' , marginLeft : '15px'}}>در حال بررسی ...</h2>
            <Icon icon="svg-spinners:clock" width={35}/>
        </div>
        <p>اطلاعات شما در دست بررسی میباشد، از شکیبایی شما متشکریم.</p>
        <div style={{width : '200px' , marginTop : '20px'}}>
            <Button fullWidth size='large' type='submit' variant='contained'>مشاهده جزییات</Button>
        </div>
    </Box>
  )
}

export default Pending