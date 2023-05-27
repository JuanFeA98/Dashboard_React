import React from 'react'

import { Box } from '@mui/material'

import Header from '../../components/Header'
import GeographyChart from '../../components/GeographyChart'

export default function Geography() {
  return (
    <Box m='20px'>
      <Header title='Map Chart' subtitle='A simple map chart'/>
      <Box height='70vh'>
          <GeographyChart/>
      </Box>
    </Box>
  )
}
