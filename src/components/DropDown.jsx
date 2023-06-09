import React from 'react'

import { useTheme, Typography } from '@mui/material'

import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import { tokens } from '../theme'

export default function DropDown(props) {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography color={colors.greenAccent[500]} variant='h5'>
                    {props.question}
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    {props.answer}
                </Typography>
            </AccordionDetails>
        </Accordion>
  )
}
