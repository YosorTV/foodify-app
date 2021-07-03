import React from 'react'
import { Nav, Link } from '../../../styles'
import { Typography } from '@material-ui/core';

export const Navigation = () => {
  return (
    <Nav>
      <Typography 
        component={Link} 
        to="/" 
        end>
        Random Dish
      </Typography>
      <Typography 
        component={Link} 
        to="/favourites">
        Favourite Dishes
      </Typography>
    </Nav>
  )
}
