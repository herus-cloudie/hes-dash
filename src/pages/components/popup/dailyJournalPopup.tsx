import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';

import dynamic from 'next/dynamic';

const FroalaEditorComponent = dynamic(() => import('react-froala-wysiwyg'), { ssr: false });

import { Icon } from '@iconify/react';
import { Grid } from '@mui/material';
import CrmMonthlyBudget from 'src/views/dashboards/crm/CrmMonthlyBudget';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  padding : '10px',
  p: 4,
};

export default function DailyJournalPopup() {
    
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} variant='contained' size='small'>View note</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box  dir='ltr' sx={style}>
          <Typography style={{display : 'flex' , justifyContent  : 'space-between'}} id="modal-modal-title" variant="h6" component="h2">
            <span>Daily Log</span>
            <Icon onClick={handleClose} icon="material-symbols:close" />
          </Typography>
          <Button style={{margin : '15px 0 20px'}} onClick={handleOpen} variant='contained' size='medium'>View in Notebook</Button>
          <Typography style={{marginBottom : '15px'}}>
          <span style={{marginRight : '15px'}}>Tue, Aug 27, 2024</span> <span  style={{color : '#09dd09'}}>Net P&L $0.02</span>
          <hr />
          </Typography>
          <div style={{display : 'flex' , gap : '35px' , margin : '40px 0'}}>
            <div>
                <Grid item xs={12} sm={6} md={4}>
                <CrmMonthlyBudget />
                </Grid>
            </div>

            <Grid sm={12} md={6} lg={3} style={{display :'flex', flexDirection : 'column' , justifyContent : 'space-around',}}>
                <div style={{display : 'flex', justifyContent : 'space-around' ,  }}>
                <span>Total trades</span>
                <span style={{fontWeight : 700}}>7</span>
                </div>
                
                <div style={{display : 'flex', justifyContent : 'space-around'}}>
                <span>Winrate</span>
                <span style={{fontWeight : 700}}>42.8%</span>
                </div>
            </Grid>

            <Grid sm={12} md={6} lg={3} style={{display :'flex', flexDirection : 'column' , justifyContent : 'space-around',}}>
                <div style={{display : 'flex', justifyContent : 'space-around' }}>
                <span>Winners</span>
                <span style={{fontWeight : 700}}>3</span>
                </div>
                
                <div style={{display : 'flex', justifyContent : 'space-around'}}>
                <span>losers</span>
                <span style={{fontWeight : 700}}>4</span>
                </div>
            </Grid>

            <Grid sm={12} md={6} lg={3} style={{display :'flex', flexDirection : 'column' , justifyContent : 'space-around',}}>
                <div style={{display : 'flex', justifyContent : 'space-around'}}>
                <span>Gross P&L</span>
                <span style={{fontWeight : 700}}>$62.6</span>
                </div>
                
                <div style={{display : 'flex', justifyContent : 'space-around'}}>
                <span>Volume</span>
                <span style={{fontWeight : 700}}>840</span>
                </div>
            </Grid>
            
            <Grid sm={12} md={6} lg={3} style={{display :'flex', flexDirection : 'column' , justifyContent : 'space-around'}}>
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
          <FroalaEditorComponent 
          
          tag='textarea'
          onModelChange={() => console.log('f')}
        />
        </Box>
      </Modal>
    </div>
  );
}
