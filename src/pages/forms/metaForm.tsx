import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, Checkbox, FormControl, FormControlLabel, FormHelperText, TextField } from '@mui/material';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { brokerCredentialSchema } from 'src/constant';
import { BrokerType } from 'src/types/forms/reactDatepickerTypes';
import ComboBox from '../components/comboBox';
import { useSession } from 'next-auth/react';
import Loader from 'src/@core/components/spinner/loader';
import { useTheme } from '@mui/material/styles';

const MetaForm = ({setState} : any) => {
  
  const theme = useTheme();

  const [err , setErr] = useState('');
  const [loading , setLoading] = useState<boolean>(false);

  const session = useSession();
  const email = session.data?.user?.email as string;

  const [broker, setBroker] = useState<BrokerType>('Alpari');
  const handleBrokerChange = (newValue: BrokerType) => setBroker(newValue);

  const [metaTraderVersion, setMetaTraderVersion] = useState<'4' | '5'>('4');
  const handleMetaVersionChange = (newValue: '4' | '5') => setMetaTraderVersion(newValue);

  const [agree, setAgree] = useState<boolean>(false);
  const changeAgreeHandler = () => setAgree(!agree);

  const defaultValues = {
    accountNumber: '', 
    investPassword: '',
    serverName: ''
  };

  const onSubmit = async (data: any) => {
    const { accountNumber, investPassword, serverName } = data;
    setLoading(true)
    await fetch('https://hesnical.com/fetch/cred/server.php', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        accountNumber,
        investPassword,
        serverName,
        broker,
        metaTraderVersion,
        email
      })
  }).then(response => response.json())
    .then(({message}) => {
        if(message === 'ok') setState('pending')
        else setErr('متاسفانه مشکلی به وجود آمده است.')
    }).catch(error => console.error('Error:', error)).finally(() => setLoading(false))
};
  
  const { 
    handleSubmit,
    control,
    formState: { errors } }
    = useForm({
    defaultValues,
    mode: 'onBlur',
    resolver: yupResolver(brokerCredentialSchema)
  });

  return (
    <Box sx={{ width: '100%', textAlign: 'center', fontSize: '27px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
      {
        theme.palette.mode == 'light' 
        ? <img className='step2' src='/images/2.png' width={330} />
        : <img className='step2' src='/images/2w.png' width={330} />
      }
      <p style={{ fontWeight: 700 }}>تکمیل اطلاعات حساب متا تریدر</p>
      <div style={{ width: '330px' }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl dir="ltr" fullWidth sx={{ mb: 5 }}>
            <Controller
              name='accountNumber'
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange, onBlur } }) => (
                <TextField
                  autoFocus
                  label='اکانت نامبر'
                  value={value}
                  onBlur={onBlur}
                  onChange={onChange}
                  error={Boolean(errors.accountNumber)}
                  placeholder=''
                />
              )}
            />
            {errors.accountNumber && <FormHelperText sx={{ color: 'error.main' }}>اکانت نامبر باید حداقل 3 کاراکتر باشد</FormHelperText>}
            <br />
            <Controller
              name='investPassword'
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange, onBlur } }) => (
                <TextField
                  label='پسورد سرمایه گذار'
                  value={value}
                  onBlur={onBlur}
                  onChange={onChange}
                  error={Boolean(errors.investPassword)}
                  placeholder=''
                />
              )}
            />
            {errors.investPassword && <FormHelperText sx={{ color: 'error.main' }}>پسورد باید حداقل 3 کاراکتر باشد</FormHelperText>}
            <br />
            <Controller
              name='serverName'
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange, onBlur } }) => (
                <TextField
                  label='سرور'
                  value={value}
                  onBlur={onBlur}
                  onChange={onChange}
                  error={Boolean(errors.serverName)}
                  placeholder=''
                />
              )}
            />
            {errors.serverName && <FormHelperText sx={{ color: 'error.main' }}>سرور باید حداقل 3 کاراکتر باشد</FormHelperText>}
            <br />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <ComboBox value={broker} onChange={handleBrokerChange} />
              <ComboBox value={metaTraderVersion as '4' | '5'} onChange={handleMetaVersionChange} />
            </div>
          </FormControl>
          <div style={{ display: 'flex', flexDirection: 'column', width: '330px' }}>
            <FormControlLabel
              label='تمامی قوانین را قبول دارم'
              control={<Checkbox checked={agree} onChange={changeAgreeHandler} />}
            />
            <br />
            {err && <p style={{marginTop : '-15px' , color : '#ff3d3d' , textAlign : 'center' , fontSize : '20px'}}>{err}</p>} 
            {loading ? 
              <div style={{textAlign : 'center' , display : 'flex' , justifyContent : 'center' , margin : '-45px 0 0'}}>
                <Loader />
              </div>
              :<Button fullWidth size='large' type='submit' variant='contained'>ارسال</Button>
            }
          </div>
        </form>
      </div>
    </Box>
  );
};

export default MetaForm;
