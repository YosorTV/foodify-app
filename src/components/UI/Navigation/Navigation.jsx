import React from 'react'
import { Nav, Link } from '../../../styles'
import { Typography, useMediaQuery, useTheme } from '@material-ui/core';
import { Drawer } from '../Navigation';

export const Navigation = () => {
  const { breakpoints } = useTheme();
  const isMedium = useMediaQuery(breakpoints.down('md'));
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
    </Nav>
  )
}
