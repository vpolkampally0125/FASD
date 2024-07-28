import { useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { createTheme } from '@mui/material/styles'
import { themeSettings } from './theme'
import { ThemeProvider } from '@mui/material'
import { Box, CssBaseline } from '@mui/material'
import Navbar from '@/scenes/navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard  from '@/scenes/dashboard'

function App() {
  const theme = useMemo(() => createTheme(themeSettings), [])
  return (
      <div className='app'>
        <BrowserRouter>
          <ThemeProvider theme = {theme}>
            <CssBaseline />
            <Box width = "100%" height="100%" padding="1rem 2rem 4rem 2rem">
              <Navbar />
              <Routes>
                <Route path = "/" element = {<Dashboard />} />
                <Route path = "/predictions" element = {<div>predictions</div>} />
              </Routes>
            </Box>
          </ThemeProvider>
        </BrowserRouter> 
      </div>
  );
}

export default App
