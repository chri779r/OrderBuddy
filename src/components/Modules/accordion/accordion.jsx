import * as React from 'react';
import { Accordion } from '@mui/material';
import { AccordionDetails } from '@mui/material';
import { AccordionSummary } from '@mui/material';
import { Typography } from '@mui/material';
import ArrowCircleUpRoundedIcon from '@mui/icons-material/ArrowCircleUpRounded';
import "./accordion.scss"

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className='faq__wrapper' style= {{maxWidth:"80%", margin:"0 auto", padding:"1rem 0px 4rem 0px"}}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ArrowCircleUpRoundedIcon style={{color:"26045d"}}/>}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '100%', flexShrink: 0, textAlign:"left" }}>Hvor kan jeg bruge OrderBuddy?</Typography>
          {/* <Typography sx={{ color: "#26045d", fontSize:"0.9rem" }}>Hvor kan jeg bruge OrderBuddy?</Typography> */}
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ width: '100%', flexShrink: 0, display:"flex", textAlign:"left", }}>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ArrowCircleUpRoundedIcon style={{color:"26045d"}}/>}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '100%', flexShrink: 0, textAlign:"left" }}>Hvad sker der med min data?</Typography>
          {/* <Typography sx={{ color: "#26045d", fontSize:"0.9rem" }}>Hvad sker der med min data?</Typography> */}
        </AccordionSummary>
        <AccordionDetails>
            <Typography sx={{ width: '100%', flexShrink: 0, display:"flex", textAlign:"left", }}>
                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                Aliquam eget maximus est, id dignissim quam.
            </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ArrowCircleUpRoundedIcon style={{color:"26045d"}}/>}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '100%', flexShrink: 0, textAlign:"left" }}>Hvad sker der med min data?</Typography>
          {/* <Typography sx={{ color: "#26045d", fontSize:"0.9rem" }}>Spørgsmål 3</Typography> */}
        </AccordionSummary>
        <AccordionDetails>
            <Typography sx={{ width: '100%', flexShrink: 0, display:"flex", textAlign:"left", }}>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ArrowCircleUpRoundedIcon style={{color:"26045d"}}/>}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '100%', flexShrink: 0, textAlign:"left" }}>Hvad sker der med min data?</Typography>
          {/* <Typography sx={{ color: "#26045d", fontSize:"0.9rem" }}>Spørgsmål 4</Typography> */}
        </AccordionSummary>
        <AccordionDetails>
        <Typography sx={{ width: '100%', flexShrink: 0, display:"flex", textAlign:"left", }}>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
