import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';


const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid #BEA632`,
  color:`#BEA632`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&::before': {
    display: 'none',
  },
  
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
  ...theme.applyStyles('dark', {
    backgroundColor: 'rgba(255, 255, 255, .05)',
  }),
  '&:hover' :{
    backgroundColor:'#BEA632',
    color:'white'
  }
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function Accordions() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const acordionsetup=[{header:'What hotel is closest to Coimbatore Airport?',
    body:'It will be convenient for you if your hotel is close to Coimbatore International Airport.Hotel Kiscol Grands is one of the best luxury hotels near Coimbatore Airport.'},
   {header:'Are luxury hotels expensive?',
    body:'Just because a hotel offers exquisite services, does not mean it has to be expensive. There are many luxury hotels in Coimbatore that offer a variety of services at extremely affordable rates.'},
   {header:'What facilities do luxury hotels offer?',
    body:'Most luxury hotels like Hotel Kiscol Grands offer a variety of services such as spas, swimming pools, buffet facilities, laundry services, etc.'},
   {header:'What is the best luxury hotel to stay in Coimbatore?',
    body:'Hotel Kiscol Grands is one of the best luxury hotels in Coimbatore for your stay owing to its blend of affordability and luxury.'},
   {header:'How many luxury hotels will I be able to find in Coimbatore?',
    body:'There are several luxury hotels in Coimbatore but not all of them live up to the standards they set. Be on the lookout for top quality star hotels like Kiscol Grands.'},
   {header:'What is the best pet-friendly hotel in Coimbatore?',
    body:'Kiscol Grands is one of the best pet-friendly hotels in Coimbatore that offers facilities to pamper your pet while enjoying your comfortable stay. All the amenities are at affordable prices for the best experience.'},
          ]


  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>{acordionsetup[0].header}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {acordionsetup[0].body}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>{acordionsetup[1].header}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {acordionsetup[1].body}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>{acordionsetup[2].header}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {acordionsetup[2].body}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography>{acordionsetup[3].header}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {acordionsetup[3].body}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
          <Typography>{acordionsetup[4].header}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {acordionsetup[4].body}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
          <Typography>{acordionsetup[5].header}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {acordionsetup[5].body}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
