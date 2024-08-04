// ** MUI Imports
import Box from '@mui/material/Box'

// ** Type Import
import { Settings } from 'src/@core/context/settingsContext'

// ** Components
import Autocomplete from 'src/layouts/components/Autocomplete'
import ModeToggler from 'src/@core/layouts/components/shared-components/ModeToggler'
import UserDropdown from 'src/@core/layouts/components/shared-components/UserDropdown'
import NotificationDropdown, {
  NotificationsType
} from 'src/@core/layouts/components/shared-components/NotificationDropdown'
import ShortcutsDropdown, { ShortcutsType } from 'src/@core/layouts/components/shared-components/ShortcutsDropdown'

// ** Hook Import

interface Props {
  hidden: boolean
  settings: Settings
  saveSettings: (values: Settings) => void
}

const notifications: NotificationsType[] = [
  {
    meta: 'Today',
    avatarAlt: 'Flora',
    title: 'Congratulation Flora! 🎉',
    avatarImg: '/images/avatars/4.png',
    subtitle: 'Won the monthly best seller badge'
  },
  {
    meta: 'Yesterday',
    avatarColor: 'primary',
    subtitle: '5 hours ago',
    avatarText: 'Robert Austin',
    title: 'New user registered.'
  },
  {
    meta: '11 Aug',
    avatarAlt: 'message',
    title: 'New message received 👋🏻',
    avatarImg: '/images/avatars/5.png',
    subtitle: 'You have 10 unread messages'
  },
  {
    meta: '25 May',
    title: 'Paypal',
    avatarAlt: 'paypal',
    subtitle: 'Received Payment',
    avatarImg: '/images/misc/paypal.png'
  },
  {
    meta: '19 Mar',
    avatarAlt: 'order',
    title: 'Received Order 📦',
    avatarImg: '/images/avatars/3.png',
    subtitle: 'New order received from John'
  },
  {
    meta: '27 Dec',
    avatarAlt: 'chart',
    subtitle: '25 hrs ago',
    avatarImg: '/images/misc/chart.png',
    title: 'Finance report has been generated'
  }
]

const shortcuts: ShortcutsType[] = [
  {
    title: 'تقویم',
    url: '/apps/calendar',
    subtitle: 'وقت تعيين شده',
    icon: 'mdi:calendar-month-outline'
  },
  {
    title: ' صورتحساب',
    url: '/apps/invoice/list',
    subtitle: 'مدیریت حساب ها',
    icon: 'mdi:receipt-text-outline'
  },
  {
    title: 'کاربران',
    url: '/apps/user/list',
    subtitle: 'مدیریت کاربران',
    icon: 'mdi:account-outline'
  },
  {
    url: '/apps/roles',
    title: 'قوانین',
    subtitle: 'مجوزها',
    icon: 'mdi:shield-check-outline'
  },
  {
    url: '/',
    title: 'داشبورد',
    icon: 'mdi:chart-pie',
    subtitle: 'داشبورد کاربر'
  },
  {
    title: 'تنظیمات',
    icon: 'mdi:cog-outline',
    subtitle: 'تنظیمات حساب',
    url: '/pages/account-settings/account'
  },
  {
    title: 'راهنمایی و کمک',
    subtitle: 'سوالات و مقالات',
    icon: 'mdi:help-circle-outline',
    url: '/pages/help-center'
  },
  {
    title: 'گفتگوها',
    subtitle: 'گفتگوهای پراستفاده',
    icon: 'mdi:window-maximize',
    url: '/pages/dialog-examples'
  }
]

const AppBarContent = (props: Props) => {
  // ** Props
  const { hidden, settings, saveSettings } = props

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Autocomplete hidden={hidden} settings={settings} />
      <ModeToggler settings={settings} saveSettings={saveSettings} />
    
        <>
          <ShortcutsDropdown settings={settings} shortcuts={shortcuts} />
          <NotificationDropdown settings={settings} notifications={notifications} />
          <UserDropdown settings={settings} />
        </>
      
    </Box>
  )
}

export default AppBarContent
