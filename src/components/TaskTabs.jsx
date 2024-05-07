"use client"
import * as React from 'react';
import {Box, Tab, Tabs,Typography} from '@mui/material';
import Form from './Form';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p:{xs:1, md:3}, mt:{xs:2,md:0} }}>
          <Box>{children}</Box>
        </Box>
      )}
    </div>
  );
}



function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function TaskTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 2, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Group View" {...a11yProps(0)} />
          <Tab label="+Add View" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        
        <Form />
       
       
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Box height={'65vh'} width={'90vw'} display={'flex'} justifyContent={'center'} alignItems='center'>
          <Typography variant='h4'>Some content here!</Typography>
        </Box>
      </CustomTabPanel>
    </Box>
  );
}
