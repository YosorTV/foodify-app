// Core
import React from 'react'
import { useLocation } from 'react-router-dom';
// Styles
import { Nav, Link } from '../../../styles'
import { Typography, useMediaQuery, useTheme } from '@material-ui/core';
// Components
import { Drawer } from '../Navigation';
import { AddDish } from '../../AddDish';

export const Navigation = () => {
  const { breakpoints } = useTheme();
  const { pathname } = useLocation();
  const isMedium = useMediaQuery(breakpoints.down('md'));

  const AddDishJSX = pathname.includes('favourites') ? <AddDish /> : null
  return (
    <Nav>
    {!isMedium ?
      <div style={{margin:'0 auto'}}>
        <Typography 
          component={Link}
          variant="button"
          to="/" 
          end>
          Random Dish
        </Typography>
        <Typography 
          component={Link} 
          variant="button"
          to="/favourites">
          Favourite Dishes
        </Typography>
      </div>
      : <Drawer />
    }
    { AddDishJSX }
    </Nav>
  )
}
