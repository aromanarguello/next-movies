import * as React from 'react'
import { ThemeProvider } from 'styled-components'

const theme = {}

interface ThemeProviderProps {
  children: React.ReactElement
}

const Theme = ({ children }: ThemeProviderProps) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default Theme