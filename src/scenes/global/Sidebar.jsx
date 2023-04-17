import React from 'react'

import { useState } from 'react'
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar'

import { Box, IconButton, Typography, useTheme } from '@mui/material'
import { Link } from 'react-router-dom'

import { tokens } from '../../theme'

import 'react-pro-sidebar/dist/css/styles.css'

import HomeOutLinedIcon  from '@mui/icons-material/HomeOutlined'
import PeopleOutLinedIcon  from '@mui/icons-material/PeopleOutlined'
import ContactsOutLinedIcon  from '@mui/icons-material/ContactsOutlined'
import ReceiptOutlinedIcon  from '@mui/icons-material/ReceiptOutlined'
import PersonOutLinedIcon  from '@mui/icons-material/PersonOutlined'
import CalendarTodayOutLinedIcon  from '@mui/icons-material/CalendarTodayOutlined'
import HelpOutLinedIcon  from '@mui/icons-material/HelpOutlined'
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined"
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined"
import TimelineOutLinedIcon  from '@mui/icons-material/TimelineOutlined'
import MenuOutLinedIcon  from '@mui/icons-material/MenuOutlined'
import MapOutLinedIcon  from '@mui/icons-material/MapOutlined'
import { InventoryOutlined } from '@mui/icons-material'


const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode)

  return(
    <MenuItem 
      active={selected === title} 
      style={{color: colors.grey[100]}}
      onClick={()=> setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to}/>
    </MenuItem>
  )
}


export default function Sidebar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState('Dashboard');
  
  return (
    <Box
      sx = {{
        '& .pro-sidebar-inner':{
          background: `${colors.primary[400]} !important`
        },
        '& .pro-icon-wrapper':{
          backgroundColor: 'transparent !important'
        },
        '& .pro-inner-item':{
          padding: '5px 35px 5px 20px !important'
        },
        '& .pro-inner-item:hover':{
          color: '#868dfb !important'
        },
        '& .pro-menu-item.active':{
          color: '#6870fa !important'
        }
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape='square'>
          {/* Logo and menu */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutLinedIcon/>:undefined}
            style={{
              margin:'10px 0 20px 0',
              color: colors.grey[100],
            }}
          >
            {!isCollapsed &&(
              <Box
                display='flex'
                justifyContent='space-between'
                alignItems='center'
                ml='15px'
              >
                <Typography 
                  variant='h5'
                  color={colors.grey[100]}
                >
                  ADMINS
                </Typography>
                <IconButton>
                  <MenuOutLinedIcon/>
                </IconButton>
              </Box>
            )}
          </MenuItem>
          
          {/* User */}
          {!isCollapsed && (
            <Box mb='15px'>
              <Box display='flex' justifyContent='center' alignItems='center'>
                <img 
                  src='../../assets/urano.png'
                  alt='profile-user' 
                  width='75px' 
                  height='75px'
                  style={{
                    backgroundSize: 'contain',
                    cursor: 'pointer',
                    borderRadius: '50%'
                  }}
                />
                {/* <img src="" alt="A" /> */}
              </Box>
              <Box textAlign='center'>
                <Typography 
                  variant='h4' 
                  color={colors.grey[100]} 
                  fontWeight='bold'
                  sx = {{ 
                    m: '10px 0 0 0'
                  }}
                >
                  JuanFe
                </Typography>
                <Typography 
                  variant='h5'
                  color={colors.greenAccent[500]}
                >
                  Data Scientist
                </Typography>
              </Box>             
            </Box>
          )}
          {/* Menu Items */}
          <Box paddingLeft={isCollapsed ? undefined : '10%'}>
            <Item
              title='Dashboard'
              to='/'
              icon={<HomeOutLinedIcon/>}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography 
              variant='h6' 
              color={colors.grey[300]} 
              sx={{m: '15px 0 5px 20px'}}
            >
              Data
            </Typography>

            <Item
              title='Manage Team'
              to='/team'
              icon={<PeopleOutLinedIcon/>}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title='Contacts Information'
              to='/invoices'
              icon={<ContactsOutLinedIcon/>}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title='Invoices Balances'
              to='/invoices'
              icon={<ReceiptOutlinedIcon/>}
              selected={selected}
              setSelected={setSelected}
            />
            
            <Typography 
              variant='h6' 
              color={colors.grey[300]} 
              sx={{m: '15px 0 5px 20px'}}
            >
              Pages
            </Typography>
            
            <Item
              title='Profile Form'
              to='/form'
              icon={<PersonOutLinedIcon/>}
              selected={selected}
              setSelected={setSelected}
            />
            
            <Item
              title='Calendar'
              to='/calendar'
              icon={<CalendarTodayOutLinedIcon/>}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title='FAQ Page'
              to='/faq'
              icon={<HelpOutLinedIcon/>}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography 
              variant='h6' 
              color={colors.grey[300]} 
              sx={{m: '15px 0 5px 20px'}}
            >
              Charts
            </Typography>


            <Item
              title='Bar Chart'
              to='/bar'
              icon={<BarChartOutlinedIcon/>}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title='Line chart'
              to='/line'
              icon={<TimelineOutLinedIcon/>}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title='Pie Chart'
              to='/pir'
              icon={<PieChartOutlineOutlinedIcon/>}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title='Geography Chart'
              to='/geography'
              icon={<MapOutLinedIcon/>}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  )
}