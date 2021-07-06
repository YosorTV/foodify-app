// Core
import React, { Fragment } from 'react'
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion'
//MUI
import { CardActions, CardContent, CardMedia, Typography, Chip, IconButton, Grid, Divider } from '@material-ui/core';
import { YouTube, Delete } from '@material-ui/icons';
//Selectors
import { dishesSelector } from '../store/selectors'
// Hooks
import { useDelete } from '../hooks';
// Styles
import { FavCard as Card, Section } from '../styles';
import placeholder from '../assets/menu-item-placeholder.png';
import { fadeIn } from '../styles/animation';
export const Favourite = () => {
  const { favourites } = useSelector(dishesSelector);
  const { remove } = useDelete();

  const onRemove = (dish) => remove(dish);
  
  const FavouirteDishesJSX = favourites.map((dish) => {
    return (
      <Fragment key={dish.idMeal}>
        <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
          <Card component = {motion.figure} variants={fadeIn} initial="hidden" animate="show">
            <CardMedia
              component={'img'}
              image={dish?.strMealThumb ? dish?.strMealThumb : placeholder}
              title="Contemplative Reptile"
            />
            <CardContent component={'figcaption'}>
              <Typography 
                gutterBottom 
                variant="h5" 
                component="h3"> { dish?.strMeal }
              </Typography>
              <div className="tags">
                { dish?.strTags && 
                  <Chip 
                    variant="default"
                    label= { dish?.strTags } />
                }
                { dish?.strYoutube &&
                  <Chip
                    component={'a'} 
                    label="watch" 
                    href={ dish?.strYoutube } 
                    variant="outlined" 
                    avatar={<YouTube />} 
                    target="_blank" 
                    clickable />
                }
              </div>
              <Typography variant="body2" color="textSecondary" component="p">{ dish?.strInstructions }</Typography>
            </CardContent>
            <Divider />
            <CardActions className="actions">
              <IconButton color="secondary" onClick = { () => onRemove(dish) }>
                <Delete />
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
      </Fragment>
    )
  })

  return (
    <Section>
      <Grid container justify="flex-start" alignItems="center">
      { favourites.length > 0 
        ? FavouirteDishesJSX 
        : <Typography component="h2" variant="h2">No saved dishes at list</Typography>
      }
        
      </Grid>
    </Section>
  )
}
