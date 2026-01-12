import { useState } from 'react';
import { Box, Tabs, Tab, ThemeProvider } from '@mui/material';
import './App.css'
import NameTag from './components/NameTag';
import AboutMe from './components/AboutMe';
import theme from './theme';
//import Projects from './components/Projects';

function App() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <div className="column">
          <NameTag />
        </div>
        <div className="column">
          <Box>
            <Tabs className="tabs-container" 
              value={value} 
              onChange={handleChange} 
              TabIndicatorProps={{ style: { display: 'none' } }}
              sx={{
                '& .MuiTab-root': {
                  borderRadius: '8px',
                  transition: 'background-color 0.3s',
                },
                '& .Mui-selected': {
                  backgroundColor: '#0e3b17', 
                  color: '#ffffff',
                  borderRadius: '30px',
                  margin: '2px',
                }
              }}
            >
              <Tab label="About Me" />
              <Tab label="Projects" />
              <Tab label="Experiences" />
            </Tabs>
          </Box>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
