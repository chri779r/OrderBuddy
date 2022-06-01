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
    <div className='faq__wrapper' style= {{maxWidth:"90%", margin:"0 auto", padding:"1rem 0px 4rem 0px"}}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ArrowCircleUpRoundedIcon style={{color:"26045d"}}/>}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '100%', flexShrink: 0, textAlign:"left" }}>Hvor kan jeg bruge OrderBuddy?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ width: '100%', flexShrink: 0, display:"flex", textAlign:"left", }}>
            OrderBuddy har samarbejde med en række samarbejdspartnere. Du kan finde dem under find os, hvor du både kan se det på et kort eller som en liste under. 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ArrowCircleUpRoundedIcon style={{color:"26045d"}}/>}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '100%', flexShrink: 0, textAlign:"left" }}>Skal jeg downloade en app?</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography sx={{ width: '100%', flexShrink: 0, display:"flex", textAlign:"left", }}>
                Det korte svar er nej! Det vigtigste for OrderBuddy er, at du hurtigt og nemt kan bestille. Derfor er OrderBuddy lavet som en webapp, der er tilgængelig for alle.
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
        </AccordionSummary>
        <AccordionDetails>
            <Typography sx={{ width: '100%', flexShrink: 0, display:"flex", textAlign:"left", }}>
            OrderBuddy logger ingen data. Af samme årsag kræver det ingen brugeroprettelse. Du forbliver anonym gennem hele processen.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ArrowCircleUpRoundedIcon style={{color:"26045d"}}/>}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '100%', flexShrink: 0, textAlign:"left" }}>Hvor får jeg min kvittering?</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography sx={{ width: '100%', flexShrink: 0, display:"flex", textAlign:"left", }}>
            OrderBuddy fører an i kampen mod en overflod af print. Derfor tilbyder vi muligheden for, at du kan få kvitteringen sendt som mail.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
