import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { theme } from 'theme'
import App from './App'
import { ReactNotifications } from 'react-notifications-component'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <ReactNotifications />
        <App />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
