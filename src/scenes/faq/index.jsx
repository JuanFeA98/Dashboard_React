import React from 'react'

import { Box } from '@mui/material'

import Header from '../../components/Header'
import DropDown from '../../components/DropDown'

export default function FAQ() {

    return (
        <Box m='20px' overflow='auto' height='80vh'>
            <Header title='FAQ' subtitle='Frequency Asked Questions Page'/>
            <DropDown 
                question='Question 1' 
                answer='Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus magnam quo quia voluptate cum placeat laudantium quidem ipsam autem quod, qui ut cumque? Recusandae laborum labore ad, amet tempora nihil.'
            />
            <DropDown 
                question='Question 2' 
                answer='Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus magnam quo quia voluptate cum placeat laudantium quidem ipsam autem quod, qui ut cumque? Recusandae laborum labore ad, amet tempora nihil.'
            />            
            <DropDown 
                question='Question 3' 
                answer='Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus magnam quo quia voluptate cum placeat laudantium quidem ipsam autem quod, qui ut cumque? Recusandae laborum labore ad, amet tempora nihil.'
            />
            <DropDown 
                question='Question 4' 
                answer='Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus magnam quo quia voluptate cum placeat laudantium quidem ipsam autem quod, qui ut cumque? Recusandae laborum labore ad, amet tempora nihil.'
            />            
            <DropDown 
                question='Question 5' 
                answer='Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus magnam quo quia voluptate cum placeat laudantium quidem ipsam autem quod, qui ut cumque? Recusandae laborum labore ad, amet tempora nihil.'
            />
        </Box>
  )
}
