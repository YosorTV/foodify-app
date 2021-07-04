import React from 'react'
import { Snackbar } from '@material-ui/core';


export const ErrorNotification = ({ error }) => {

  const errorJSX = error && 
  <Snackbar
    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    open={!!error} 
    message={error}
  />

  return (
    <>
      { errorJSX }
    </>
  )
}

