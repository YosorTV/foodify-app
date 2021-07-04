//Core
import React from 'react'
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { CssBaseline, Container, AppBar } from "@material-ui/core";
import { sideBarSelector } from '../store/selectors';
import { sideBarAction } from '../store/actions';
import { Navigation } from './UI'
import { Main } from '../styles';

export const Layout = () => {
  const dispatch = useDispatch();
  const isOpened = useSelector(sideBarSelector);

  const handleDrawer = () => isOpened && dispatch(sideBarAction(false));

  return (
    <>
      <CssBaseline />
      <Container disableGutters maxWidth="xl" onClick = {handleDrawer}>
        <AppBar color="primary">
          <Navigation />
        </AppBar>
        <Main>
          <Outlet />
        </Main>
      </Container>
    </>
  )
}
