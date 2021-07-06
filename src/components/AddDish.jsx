// Core
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Controller, useForm, useFormState } from 'react-hook-form'
// MUI
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, IconButton, TextField } from '@material-ui/core'
import PostAddSharpIcon from '@material-ui/icons/PostAddSharp';
//Models
import { Dish } from '../models';
//Hooks
import { useAddDish } from '../hooks';
//Selectors
import { dishesSelector } from '../store/selectors';

export const AddDish = () => {
  const { favourites } = useSelector(dishesSelector);
  const { strMeal, strInstructions } = new Dish('', '', null);
  const { control, handleSubmit, reset } = useForm({
    mode:"onSubmit",
    defaultValues: { strMeal, strInstructions },
  });
  
  const { isDirty } = useFormState({ control });
  const { add } = useAddDish();

  const submitForm = (callback) => handleSubmit(({strMeal, strInstructions}) => {
    const id = Math.ceil(Math.random() * 10000);
    const myDish = new Dish(strMeal, strInstructions, id);
      add(myDish);
      localStorage.setItem('favDishes', JSON.stringify([ myDish, ...favourites ]));
    reset();
    callback();
  });

  const [openDialog, setOpenDialog] = useState(false);
  const handleOpen = () => setOpenDialog(true);
  const handleClose = () => setOpenDialog(false);

  return (
    <>
      <IconButton onClick = {handleOpen} style={{ marginLeft:"0.5rem", marginTop:"0.5rem" }}> 
        <PostAddSharpIcon />
      </IconButton>

      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={openDialog}>
        <form onSubmit = { submitForm(handleClose) }>
          <DialogTitle id="dialog-title">
            Add your custom dish
          </DialogTitle>
            <DialogContent dividers>
            <Grid container alignItems="center" justify="center" spacing={3}>
              <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <Controller
                name="strMeal"
                control={control}
                defaultValue={ strMeal }
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                  <TextField
                    fullWidth
                    label="Title"
                    variant="outlined"
                    value={value}
                    onChange={onChange}
                    error={!!error}
                    helperText={error ? error.message : null}
                  />
                )}
                rules={{ required: 'Title required' }}
              />
              </Grid>
              <Grid item xl={12} lg={12} md={12} sm={12} xs={12} >
              <Controller
                name="strInstructions"
                control={control}
                defaultValue={ strInstructions }
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                  <TextField
                    label="Description"
                    fullWidth
                    multiline
                    variant="outlined"
                    value={value}
                    onChange={onChange}
                    error={!!error}
                    helperText={error ? error.message : null}
                  />
                )}
                rules={{ required: 'Description required' }}
              />
              </Grid>
            </Grid>
            </DialogContent>
            <DialogActions>
              <Button type="submit" disabled={!isDirty}>
                Add Dish
              </Button>
            </DialogActions>
          </form>
        </Dialog>
      </>
  )
}


