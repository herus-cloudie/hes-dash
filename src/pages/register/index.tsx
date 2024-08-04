// ** React Imports
import { ReactNode, useState } from 'react'

// ** Next Import
import Link from 'next/link'

// ** MUI Components
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Checkbox from '@mui/material/Checkbox'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import Box, { BoxProps } from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import useMediaQuery from '@mui/material/useMediaQuery'
import OutlinedInput from '@mui/material/OutlinedInput'
import { styled, useTheme } from '@mui/material/styles'
import InputAdornment from '@mui/material/InputAdornment'
import Typography, { TypographyProps } from '@mui/material/Typography'
import MuiFormControlLabel, { FormControlLabelProps } from '@mui/material/FormControlLabel'

// ** Icon spinner
import Loader from 'src/@core/components/spinner/loader'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Configs
import themeConfig from 'src/configs/themeConfig'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** Hooks
import { useSettings } from 'src/@core/hooks/useSettings'

// ** Demo Imports
import FooterIllustrationsV2 from 'src/views/pages/auth/FooterIllustrationsV2'
import { signUpType } from 'src/types/apps/userTypes'
import { useRouter } from 'next/navigation'

// ** Styled Components
const RegisterIllustrationWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  padding: theme.spacing(20),
  paddingRight: '0 !important',
  [theme.breakpoints.down('lg')]: {
    padding: theme.spacing(10)
  }
}))

const RegisterIllustration = styled('img')(({ theme }) => ({
  maxWidth: '48rem',
  [theme.breakpoints.down('xl')]: {
    maxWidth: '38rem'
  },
  [theme.breakpoints.down('lg')]: {
    maxWidth: '30rem'
  }
}))

const RightWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  width: '100%',
  [theme.breakpoints.up('md')]: {
    maxWidth: 400
  },
  [theme.breakpoints.up('lg')]: {
    maxWidth: 450
  }
}))

const BoxWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  width: '100%',
  [theme.breakpoints.down('md')]: {
    maxWidth: 400
  }
}))

const TypographyStyled = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontWeight: 600,
  letterSpacing: '0.18px',
  marginBottom: theme.spacing(1.5),
  [theme.breakpoints.down('md')]: { marginTop: theme.spacing(8) }
}))

const FormControlLabel = styled(MuiFormControlLabel)<FormControlLabelProps>(({ theme }) => ({
  marginBottom: theme.spacing(4),
  '& .MuiFormControlLabel-label': {
    fontSize: '0.875rem',
    color: theme.palette.text.secondary
  }
}))

const LinkStyled = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.primary.main
}))

const Register = () => {
  // ** States
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState('');
  const [state, setState] = useState<signUpType>({
    email : '',
    password : '',
    userName : '',
    policy : false
  })

  // ** Hooks
  const theme = useTheme()
  const { settings } = useSettings()
  const hidden = useMediaQuery(theme.breakpoints.down('md'))
  const router = useRouter();

  // ** Vars
  const { skin } = settings

  // const imageSource = skin === 'bordered' ? 'auth-v2-register-illustration-bordered' : 'auth-v2-register-illustration'

  const changeHandler = (e : any) => setState({...state , [e.target.name] : e.target.value})

  const signUpHandler = async () => {
    if (state.email && state.password  && state.userName) {
        if (state.password.length < 6) return setError('طول پسورد باید بیش از 5 حرف باشد')
        if (state.email.length < 10 || !state.email.includes('@')) return setError('ایمیل نامعتبر است')
        if(state.policy == false) return setError('موافقت با قوانین الزامی است')
        setLoading(true)
        const sendReq = await fetch('/api/auth/sign-up' , {
          method : 'POST' ,
          body : JSON.stringify({email : state.email, password : state.password , userName : state.userName}),
          headers : {'Content-Type': 'application/json'}
        })
        const result = await sendReq.json();

        setLoading(false)
        if(result.status == 'success'){
          setError('')
          router.push('/login')
        } else if(sendReq.status == 409) return setError('! اکانت از قبل ساخته شده است')
        else if(sendReq.status == 500) return setError('.به نظر میاد مشکلی پیش آمده , لظفا بعدا تلاش کنید')
    }
    else setError('لطفا تمامی مقادیر را وارد کنید')
  }
  
  return (
    <div dir='ltr'>
      
        <Box className='content-right'>
          {!hidden ? (
            <Box sx={{ flex: 1, display: 'flex', position: 'relative', alignItems: 'center', justifyContent: 'center' }}>
              <RegisterIllustrationWrapper>
                <RegisterIllustration
                  alt='register-illustration'
                  src={`/images/pages/menphone.png`}
                />
              </RegisterIllustrationWrapper>
              <FooterIllustrationsV2 image={`/images/pages/auth-v2-register-mask-${theme.palette.mode}.png`} />
            </Box>
          ) : null}
          <RightWrapper sx={skin === 'bordered' && !hidden ? { borderLeft: `1px solid ${theme.palette.divider}` } : {}}>
            <Box
              sx={{
                p: 7,
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'background.paper'
              }}
            >
              <BoxWrapper>
                <Box
                  sx={{
                    top: 30,
                    left: 40,
                    display: 'flex',
                    position: 'absolute',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <svg width={47} fill='none' height={26} viewBox='0 0 268 150' xmlns='http://www.w3.org/2000/svg'>
                    <rect
                      rx='25.1443'
                      width='50.2886'
                      height='143.953'
                      fill={theme.palette.primary.main}
                      transform='matrix(-0.865206 0.501417 0.498585 0.866841 195.571 0)'
                    />
                    <rect
                      rx='25.1443'
                      width='50.2886'
                      height='143.953'
                      fillOpacity='0.4'
                      fill='url(#paint0_linear_7821_79167)'
                      transform='matrix(-0.865206 0.501417 0.498585 0.866841 196.084 0)'
                    />
                    <rect
                      rx='25.1443'
                      width='50.2886'
                      height='143.953'
                      fill={theme.palette.primary.main}
                      transform='matrix(0.865206 0.501417 -0.498585 0.866841 173.147 0)'
                    />
                    <rect
                      rx='25.1443'
                      width='50.2886'
                      height='143.953'
                      fill={theme.palette.primary.main}
                      transform='matrix(-0.865206 0.501417 0.498585 0.866841 94.1973 0)'
                    />
                    <rect
                      rx='25.1443'
                      width='50.2886'
                      height='143.953'
                      fillOpacity='0.4'
                      fill='url(#paint1_linear_7821_79167)'
                      transform='matrix(-0.865206 0.501417 0.498585 0.866841 94.1973 0)'
                    />
                    <rect
                      rx='25.1443'
                      width='50.2886'
                      height='143.953'
                      fill={theme.palette.primary.main}
                      transform='matrix(0.865206 0.501417 -0.498585 0.866841 71.7728 0)'
                    />
                    <defs>
                      <linearGradient
                        y1='0'
                        x1='25.1443'
                        x2='25.1443'
                        y2='143.953'
                        id='paint0_linear_7821_79167'
                        gradientUnits='userSpaceOnUse'
                      >
                        <stop />
                        <stop offset='1' stopOpacity='0' />
                      </linearGradient>
                      <linearGradient
                        y1='0'
                        x1='25.1443'
                        x2='25.1443'
                        y2='143.953'
                        id='paint1_linear_7821_79167'
                        gradientUnits='userSpaceOnUse'
                      >
                        <stop />
                        <stop offset='1' stopOpacity='0' />
                      </linearGradient>
                    </defs>
                  </svg>
                  <Typography variant='h6' sx={{ ml: 2, lineHeight: 1, fontWeight: 700, fontSize: '1.5rem !important' }}>
                    {themeConfig.templateName}
                  </Typography>
                </Box>
                <Box sx={{ mb: 6 }} dir="rtl">
                  <TypographyStyled variant='h5'>ماجراجویی از اینجا شروع می شود 🚀</TypographyStyled>
                  <Typography variant='body2'>مدیریت برنامه خود را آسان و سرگرم کننده کنید!</Typography>
                </Box>
                <div>
                  <TextField autoFocus name='userName' onChange={changeHandler} fullWidth sx={{ mb: 4 }} label='Username' placeholder='johndoe' />
                  <TextField fullWidth name='email'  onChange={changeHandler} label='Email' sx={{ mb: 4 }} placeholder='user@email.com' />
                  <FormControl fullWidth>
                    <InputLabel htmlFor='auth-login-v2-password'>Password</InputLabel>
                    <OutlinedInput
                    onChange={changeHandler}
                    name='password'
                    dir='rtl'
                      label='Password'
                      id='auth-login-v2-password'
                      type={showPassword ? 'text' : 'password'}
                      endAdornment={
                        <InputAdornment position='end'>
                          <IconButton
                            edge='end'
                            onMouseDown={e => e.preventDefault()}
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            <Icon icon={showPassword ? 'mdi:eye-outline' : 'mdi:eye-off-outline'} />
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </FormControl>

                  <FormControlLabel
                    control={<Checkbox onClick={() => setState({...state , policy : !state.policy})} />}
                    sx={{ mb: 4, mt: 1.5, '& .MuiFormControlLabel-label': { fontSize: '0.875rem' } }}
                    label={
                      <>
                        <Typography variant='body2' component='span'>
                          با  {' '}
                        </Typography>
                        <LinkStyled href='/' onClick={e => e.preventDefault()}>
                          قوانین و خط مشی
                        </LinkStyled>
                        <Typography variant='body2' component='span'>
                          {' '}موافقت میکنم 
                        </Typography>
                      </>
                    }
                  />
                  {error && <p style={{color : '#ff3d3d' , textAlign : 'center'}}>{error}</p>} 
                  {loading ? 
                  <div style={{textAlign : 'center' , display : 'flex' , justifyContent : 'center' , margin : '15px 0'}}>
                    <Loader />
                  </div>
                  : <Button onClick={signUpHandler} fullWidth size='large' type='submit' variant='contained' sx={{ mb: 7 }}>
                    ایجاد حساب
                  </Button>}
                  <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}  dir="rtl">
                    <Typography sx={{ mr: 2, color: 'text.secondary' }}>از قبل حساب دارید؟</Typography>
                    <Typography href='/login' component={Link} sx={{ color: 'primary.main', textDecoration: 'none' }}>
                      ورود به حساب
                    </Typography>
                  </Box>
                  <Divider
                    sx={{
                      '& .MuiDivider-wrapper': { px: 4 },
                      mt: theme => `${theme.spacing(5)} !important`,
                      mb: theme => `${theme.spacing(7.5)} !important`
                    }}
                  >
                    or
                  </Divider>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <IconButton href='/' component={Link} sx={{ color: '#497ce2' }} onClick={e => e.preventDefault()}>
                      <Icon icon='mdi:facebook' />
                    </IconButton>
                    <IconButton href='/' component={Link} sx={{ color: '#1da1f2' }} onClick={e => e.preventDefault()}>
                      <Icon icon='mdi:twitter' />
                    </IconButton>
                    <IconButton
                      href='/'
                      component={Link}
                      onClick={e => e.preventDefault()}
                      sx={{ color: theme => (theme.palette.mode === 'light' ? '#272727' : 'grey.300') }}
                    >
                      <Icon icon='mdi:github' />
                    </IconButton>
                    <IconButton href='/' component={Link} sx={{ color: '#db4437' }} onClick={e => e.preventDefault()}>
                      <Icon icon='mdi:google' />
                    </IconButton>
                  </Box>
                </div>
              </BoxWrapper>
            </Box>
          </RightWrapper>
        </Box>
      
    </div>
  )
}

Register.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

Register.guestGuard = true

export default Register
