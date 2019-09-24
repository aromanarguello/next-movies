import * as React from 'react'
import { ThemeProvider } from 'styled-components'

const theme = {}

interface IThemeProviderProps {
  children: React.ReactElement;
}

const Theme: React.SFC = ({ children }: IThemeProviderProps) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default Theme