import React from 'react';
import './src/components/layout.module.css';
import type { GatsbyBrowser } from "gatsby"
import { ThemeProvider } from './src/components/themeContext'

export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({
  element,
}) => {
  return (
    <ThemeProvider>{element}</ThemeProvider>
  )
}
