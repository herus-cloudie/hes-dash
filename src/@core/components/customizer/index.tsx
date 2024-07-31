// ** React Imports
import { useState } from 'react'

// ** Third Party Components
import PerfectScrollbar from 'react-perfect-scrollbar'

// ** MUI Imports
import Radio from '@mui/material/Radio'
import Switch from '@mui/material/Switch'
import Divider from '@mui/material/Divider'
import { styled } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import RadioGroup from '@mui/material/RadioGroup'
import Typography from '@mui/material/Typography'
import Box, { BoxProps } from '@mui/material/Box'
import FormControlLabel from '@mui/material/FormControlLabel'
import MuiDrawer, { DrawerProps } from '@mui/material/Drawer'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Type Import
import { Settings } from 'src/@core/context/settingsContext'

// ** Hook Import
import { useSettings } from 'src/@core/hooks/useSettings'

const Toggler = styled(Box)<BoxProps>(({ theme }) => ({
  right: 0,
  top: '50%',
  display: 'flex',
  cursor: 'pointer',
  position: 'fixed',
  zIndex: theme.zIndex.modal,
  padding: theme.spacing(2.5),
  transform: 'translateY(-50%)',
  color: theme.palette.common.white,
  backgroundColor: theme.palette.primary.main,
  borderTopLeftRadius: theme.shape.borderRadius,
  borderBottomLeftRadius: theme.shape.borderRadius
}))

const Drawer = styled(MuiDrawer)<DrawerProps>(({ theme }) => ({
  width: 400,
  zIndex: theme.zIndex.modal,
  '& .MuiFormControlLabel-root': {
    marginRight: '0.6875rem'
  },
  '& .MuiDrawer-paper': {
    border: 0,
    width: 400,
    zIndex: theme.zIndex.modal,
    boxShadow: theme.shadows[9]
  }
}))

const CustomizerSpacing = styled('div')(({ theme }) => ({
  padding: theme.spacing(5, 6)
}))

const ColorBox = styled(Box)<BoxProps>(({ theme }) => ({
  width: 40,
  height: 40,
  display: 'flex',
  borderRadius: 8,
  cursor: 'pointer',
  alignItems: 'center',
  justifyContent: 'center',
  margin: theme.spacing(0, 1.5),
  color: theme.palette.common.white,
  transition: 'box-shadow .25s ease'
}))

const Customizer = () => {
  // ** State
  const [open, setOpen] = useState<boolean>(false)

  // ** Hook
  const { settings, saveSettings } = useSettings()

  // ** Vars
  const {
    mode,
    skin,
    appBar,
    footer,
    layout,
    navHidden,
    appBarBlur,
    themeColor,
    navCollapsed,
    contentWidth,
    verticalNavToggleType
  } = settings

  const handleChange = (field: keyof Settings, value: Settings[keyof Settings]): void => {
    saveSettings({ ...settings, [field]: value })
  }

  return (
    <div className='customizer'>
      <Toggler className='customizer-toggler' onClick={() => setOpen(true)}>
        <Icon icon='mdi:cog-outline' fontSize={20} />
      </Toggler>
      <Drawer open={open} hideBackdrop anchor='right' variant='persistent'>
        <Box
          className='customizer-header'
          sx={{
            position: 'relative',
            p: theme => theme.spacing(3.5, 5),
            borderBottom: theme => `1px solid ${theme.palette.divider}`
          }}
        >
          <Typography variant='h6' sx={{ fontWeight: 600, textTransform: 'uppercase' }}>
          سفارشی ساز تم
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>سفارشی سازی و اعمال در لحظه</Typography>
          <IconButton
            onClick={() => setOpen(false)}
            sx={{
              right: 20,
              top: '50%',
              position: 'absolute',
              color: 'text.secondary',
              transform: 'translateY(-50%)'
            }}
          >
            <Icon icon='mdi:close' fontSize={20} />
          </IconButton>
        </Box>
        <PerfectScrollbar options={{ wheelPropagation: false }}>
          <CustomizerSpacing className='customizer-body'>
            <Typography
              component='p'
              variant='caption'
              sx={{ mb: 4, color: 'text.disabled', textTransform: 'uppercase' }}
            >
              دسته بندی
            </Typography>

            {/* Skin */}
            <Box sx={{ mb: 4 }}>
              <Typography>حاشیه</Typography>
              <RadioGroup
                row
                value={skin}
                onChange={e => handleChange('skin', e.target.value as Settings['skin'])}
                sx={{ '& .MuiFormControlLabel-label': { fontSize: '.875rem', color: 'text.secondary' } }}
              >
                <FormControlLabel value='default' label='بدون حاشیه' control={<Radio />} />
                <FormControlLabel value='bordered' label='با حاشیه' control={<Radio />} />
              </RadioGroup>
            </Box>

            {/* Mode */}
            <Box sx={{ mb: 4 }}>
              <Typography>رنگ پس زمنیه</Typography>
              <RadioGroup
                row
                value={mode}
                onChange={e => handleChange('mode', e.target.value as any)}
                sx={{ '& .MuiFormControlLabel-label': { fontSize: '.875rem', color: 'text.secondary' } }}
              >
                <FormControlLabel value='light' label='روشن' control={<Radio />} />
                <FormControlLabel value='dark' label='تیره' control={<Radio />} />
                {layout === 'horizontal' ? null : (
                  <FormControlLabel value='semi-dark' label='نیمه تاریک' control={<Radio />} />
                )}
              </RadioGroup>
            </Box>

            {/* Color Picker */}
            <div>
              <Typography sx={{ mb: 2.5 }}>رنگ پایه</Typography>
              <Box sx={{ display: 'flex' }}>
                <ColorBox
                  onClick={() => handleChange('themeColor', 'primary')}
                  sx={{
                    ml: 0,
                    backgroundColor: '#666CFF',
                    ...(themeColor === 'primary' ? { boxShadow: 9 } : { '&:hover': { boxShadow: 4 } })
                  }}
                >
                  {themeColor === 'primary' ? <Icon icon='mdi:check' fontSize='1.25rem' /> : null}
                </ColorBox>
                <ColorBox
                  onClick={() => handleChange('themeColor', 'secondary')}
                  sx={{
                    backgroundColor: 'secondary.main',
                    ...(themeColor === 'secondary' ? { boxShadow: 9 } : { '&:hover': { boxShadow: 4 } })
                  }}
                >
                  {themeColor === 'secondary' ? <Icon icon='mdi:check' fontSize='1.25rem' /> : null}
                </ColorBox>
                <ColorBox
                  onClick={() => handleChange('themeColor', 'success')}
                  sx={{
                    backgroundColor: 'success.main',
                    ...(themeColor === 'success' ? { boxShadow: 9 } : { '&:hover': { boxShadow: 4 } })
                  }}
                >
                  {themeColor === 'success' ? <Icon icon='mdi:check' fontSize='1.25rem' /> : null}
                </ColorBox>
                <ColorBox
                  onClick={() => handleChange('themeColor', 'error')}
                  sx={{
                    backgroundColor: 'error.main',
                    ...(themeColor === 'error' ? { boxShadow: 9 } : { '&:hover': { boxShadow: 4 } })
                  }}
                >
                  {themeColor === 'error' ? <Icon icon='mdi:check' fontSize='1.25rem' /> : null}
                </ColorBox>
                <ColorBox
                  onClick={() => handleChange('themeColor', 'warning')}
                  sx={{
                    backgroundColor: 'warning.main',
                    ...(themeColor === 'warning' ? { boxShadow: 9 } : { '&:hover': { boxShadow: 4 } })
                  }}
                >
                  {themeColor === 'warning' ? <Icon icon='mdi:check' fontSize='1.25rem' /> : null}
                </ColorBox>
                <ColorBox
                  onClick={() => handleChange('themeColor', 'info')}
                  sx={{
                    mr: 0,
                    backgroundColor: 'info.main',
                    ...(themeColor === 'info' ? { boxShadow: 9 } : { '&:hover': { boxShadow: 4 } })
                  }}
                >
                  {themeColor === 'info' ? <Icon icon='mdi:check' fontSize='1.25rem' /> : null}
                </ColorBox>
              </Box>
            </div>
          </CustomizerSpacing>

          <Divider sx={{ m: '0 !important' }} />

          <CustomizerSpacing className='customizer-body'>
            <Typography
              component='p'
              variant='caption'
              sx={{ mb: 4, color: 'text.disabled', textTransform: 'uppercase' }}
            >
              چیدمان
            </Typography>

            {/* Content Width */}
            <Box sx={{ mb: 4 }}>
              <Typography>عرض محتوا</Typography>
              <RadioGroup
                row
                value={contentWidth}
                onChange={e => handleChange('contentWidth', e.target.value as Settings['contentWidth'])}
                sx={{ '& .MuiFormControlLabel-label': { fontSize: '.875rem', color: 'text.secondary' } }}
              >
                <FormControlLabel value='full' label='کامل' control={<Radio />} />
                <FormControlLabel value='boxed' label='جعبه بندی' control={<Radio />} />
              </RadioGroup>
            </Box>

            {/* AppBar */}
            <Box sx={{ mb: 4 }}>
              <Typography> نوار برنامه</Typography>
              <RadioGroup
                row
                value={appBar}
                onChange={e => handleChange('appBar', e.target.value as Settings['appBar'])}
                sx={{ '& .MuiFormControlLabel-label': { fontSize: '.875rem', color: 'text.secondary' } }}
              >
                <FormControlLabel value='fixed' label='متحرک' control={<Radio />} />
                <FormControlLabel value='static' label='ثابت' control={<Radio />} />
                {layout === 'horizontal' ? null : (
                  <FormControlLabel value='hidden' label='مخفی' control={<Radio />} />
                )}
              </RadioGroup>
            </Box>

            {/* Footer */}
            <Box sx={{ mb: 4 }}>
              <Typography>حاشیه پایین</Typography>
              <RadioGroup
                row
                value={footer}
                onChange={e => handleChange('footer', e.target.value as Settings['footer'])}
                sx={{ '& .MuiFormControlLabel-label': { fontSize: '.875rem', color: 'text.secondary' } }}
              >
                <FormControlLabel value='fixed' label='متحرک' control={<Radio />} />
                <FormControlLabel value='static' label='ثابت' control={<Radio />} />
                <FormControlLabel value='hidden' label='مخفی' control={<Radio />} />
              </RadioGroup>
            </Box>

            {/* AppBar Blur */}
            <Box sx={{ mb: 4, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Typography>AppBar Blur</Typography>
              <Switch
                name='appBarBlur'
                checked={appBarBlur}
                onChange={(e: any) => handleChange('appBarBlur', e.target.checked)}
              />
            </Box>

            {/* RTL */}
            {/* <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Typography>RTL</Typography>
              <Switch
                name='direction'
                checked={direction === 'rtl'}
                onChange={e => handleChange('direction', e.target.checked ? 'rtl' : 'rtl')}
              />
            </Box> */}
          </CustomizerSpacing>

          <Divider sx={{ m: '0 !important' }} />

          <CustomizerSpacing className='customizer-body'>
            <Typography
              component='p'
              variant='caption'
              sx={{ mb: 4, color: 'text.disabled', textTransform: 'uppercase' }}
            >
              منو
            </Typography>

            {/* Menu Layout */}
            <Box sx={{ mb: layout === 'horizontal' && appBar === 'hidden' ? {} : 4 }}>
              <Typography>چیدمان منو</Typography>
              <RadioGroup
                row
                value={layout}
                onChange={e => {
                  saveSettings({
                    ...settings,
                    layout: e.target.value as Settings['layout'],
                    lastLayout: e.target.value as Settings['lastLayout']
                  })
                }}
                sx={{ '& .MuiFormControlLabel-label': { fontSize: '.875rem', color: 'text.secondary' } }}
              >
                <FormControlLabel value='vertical' label='عمودی' control={<Radio />} />
                <FormControlLabel value='horizontal' label='افقی' control={<Radio />} />
              </RadioGroup>
            </Box>

            {/* Menu Toggle */}
            {navHidden || layout === 'horizontal' ? null : (
              <Box sx={{ mb: 4 }}>
                <Typography>تغییر منو</Typography>
                <RadioGroup
                  row
                  value={verticalNavToggleType}
                  onChange={e =>
                    handleChange('verticalNavToggleType', e.target.value as Settings['verticalNavToggleType'])
                  }
                  sx={{ '& .MuiFormControlLabel-label': { fontSize: '.875rem', color: 'text.secondary' } }}
                >
                  <FormControlLabel value='accordion' label='آکوردئون ' control={<Radio />} />
                  <FormControlLabel value='collapse' label='از بین بردن' control={<Radio />} />
                </RadioGroup>
              </Box>
            )}

            {/* Menu Collapsed */}
            {navHidden || layout === 'horizontal' ? null : (
              <Box sx={{ mb: 4, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography>کوچک کردن</Typography>
                <Switch
                  name='navCollapsed'
                  checked={navCollapsed}
                  onChange={e => handleChange('navCollapsed', e.target.checked)}
                />
              </Box>
            )}

            {/* Menu Hidden */}
            {layout === 'horizontal' && appBar === 'hidden' ? null : (
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography>مخفی کردن منو</Typography>
                <Switch
                  name='navHidden'
                  checked={navHidden}
                  onChange={e => handleChange('navHidden', e.target.checked)}
                />
              </Box>
            )}
          </CustomizerSpacing>
        </PerfectScrollbar>
      </Drawer>
    </div>
  )
}

export default Customizer
