//Core
import React from 'react'
import { Outlet } from 'react-router-dom';
import { CssBaseline, Container, AppBar } from "@material-ui/core";
import { Navigation } from './UI'

export const Layout = () => {
  return (
    <>
      <CssBaseline />
      <Container disableGutters maxWidth="xl">
        <AppBar>
          <Navigation />
        </AppBar>
        <main>
          <Outlet />
        </main>
      </Container>
    </>
  )
}
