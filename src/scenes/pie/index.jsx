import React from 'react'

import { Box } from '@mui/material' 

import Header from '../../components/Header'
import PieChart from '../../components/PieChart'

export default function Pie() {
  return (
    <Box m='20px'>
        <Header title='Pie Chart' subtitle='A simple pie chart'/>
        <Box height='70vh'>
            <PieChart/>
        </Box>
    </Box>
    )
}
