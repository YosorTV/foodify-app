import React from 'react'
import { Typography } from '@material-ui/core';
import { Link } from '../styles'
import NotFoundSVG from '../assets/not-found.svg';
export const NotFound = () => {
  return (
    <>
      <img src={ NotFoundSVG } alt="Not Found"/>
      <Typography component={Link} to="/" variant="button" style={{marginTop:"2rem"}}>
        Return
      </Typography>
    </>
  )
}

