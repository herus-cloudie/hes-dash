
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, Checkbox, FormControl, FormControlLabel, FormHelperText, TextField } from '@mui/material'
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form'
import { brokerCredentialSchema } from 'src/constant';
import { BrokerType } from 'src/types/forms/reactDatepickerTypes';
import ComboBox from '../components/comboBox';

const MetaForm = () => {
    const [status , setStatus] = useState<'notEntered' | 'pending' | 'success'>('pending')

    const [broker , setBroker] = useState<BrokerType>('Alpari');
    const handleBrokerChange = (newValue : BrokerType) => setBroker(newValue);
    
    const [metaTraderVersion , setMetaTraderVersion] = useState<'4' | '5'>('4');
    const handleMetaVersionChange = (newValue : '4' | '5') => setMetaTraderVersion(newValue);
  
    const [agree , setAgree] = useState<boolean>(false);
    const changeAgreeHandler = () => setAgree(!agree);
    const defaultValues = {
        accountNumber: '', 
        investPassword: '',
        serverName : ''
      }
    
      const onSubmit = async (data: any) => {
        const { accountNumber , investPassword , serverName } = data;
        console.log(accountNumber , investPassword , serverName , status)
        setStatus('pending')
        
        // setLoading(true);
        // const result = await signIn('credentials' , {
        //   email,
        //   password,
        //   redirect : false
        // })
        // setLoading(false)
        // if(result?.error == 'User does not exist') setError('.اکانتی با این شناسه وجود ندارد')
        // else if(result?.error == 'Password is incorrect') setError('.پسورد اشتباه است')
        // else if(result?.ok) {
        //   setError('')
        //   router.push('/dashboards/main')
        // }
      }
    
    const {
    handleSubmit,
    control,
    formState: { errors }
    } = useForm({
    defaultValues,
    mode: 'onBlur',
    resolver: yupResolver(brokerCredentialSchema)
    })
    
  return (
    <Box sx={{width: '100%', textAlign : 'center' , fontSize : '27px' , display : 'flex' , flexDirection : 'column' , alignItems : 'center' ,  justifyContent : 'center' , top : 0 , left : 0 , height : '100%'}}>
        <p style={{fontWeight : 700}}>تکمیل اطلاعات حساب متا تریدر</p>
        <div style={{width : '330px'}}>
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
                {errors.investPassword && <FormHelperText sx={{ color: 'error.main' }}> پسورد باید حداقل 3 کاراکتر باشد</FormHelperText>}
                
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
                {errors.serverName && <FormHelperText sx={{ color: 'error.main' }}> پسورد باید حداقل 3 کاراکتر باشد</FormHelperText>}
                <br />
                <div style={{display : 'flex' , justifyContent : 'space-between'}}>
                <ComboBox  value={broker} onChange={handleBrokerChange} />
                <ComboBox value={metaTraderVersion as '4' | '5'} onChange={handleMetaVersionChange} />
                </div>

            </FormControl>
            <div style={{display : 'flex' , flexDirection : 'column' , widows : '330px' }}>
            <FormControlLabel
                label='تمامی قوانین را قبول دارم'
                control={<Checkbox checked={agree} onChange={changeAgreeHandler} />}
                />
                <br />
            <Button fullWidth size='large' type='submit' variant='contained'>ارسال</Button>
            </div>
        </form>
        </div>
    </Box>
  )
}

export default MetaForm;