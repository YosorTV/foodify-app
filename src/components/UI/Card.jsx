// Core
import React from 'react';
import { useSelector } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion'
//MUI
import { Skeleton } from '@material-ui/lab';
import { CardActions, CardContent, CardMedia, Typography, Chip, IconButton, Grid, Divider } from '@material-ui/core';
import { YouTube, Favorite, Cached } from '@material-ui/icons';
// Styles
import { DishCard as Card } from '../../styles';
// Other
import placeholder from '../../assets/menu-item-placeholder.png';
// Selectors
import { dishesSelector } from '../../store/selectors';
import { popUp } from '../../styles/animation';

export const MediaCard = ({ data, onSkip, loading, onSave }) => {
  const { favourites } = useSelector(dishesSelector);
  //Card Image
  const CardImgJSX = loading
  ? <Skeleton animation="wave" variant="rect" height={300} /> 
  : <CardMedia
      component={'img'}
      image={data?.strMealThumb ? data?.strMealThumb : placeholder}
      title="Contemplative Reptile"
    />;
  // Card Title
  const CardTitleJSX = loading 
  ? <Skeleton animation="wave" variant="text" height={20} width="40%" /> 
  : <Typography gutterBottom variant="h5" component="h2"> { data?.strMeal } </Typography>;
  // Card Description
  const CardDescriptionJSX = loading 
  ? <Skeleton animation="wave" variant="text" height={155} width="100%"  /> 
  : <Typography variant="body2" color="textSecondary" component="p">{ data?.strInstructions }</Typography>;

  const CardTagJSX = loading
  ? <Skeleton animation="wave" variant="text" height={20} width="30%"  /> 
  : data?.strTags && 
    <Chip
      variant="default"
      label={data?.strTags}
    />

  const CardYouTubeJSX = loading
  ? <Skeleton animation="wave" variant="text" height={20} width="20%" /> 
  : data?.strYoutube && 
    <Chip
      component={'a'}
      label="watch"
      href={data?.strYoutube} 
      variant="outlined"
      avatar={<YouTube />}
      target="_blank"
      clickable
    />

  return (
    <Grid container justify="center" alignItems="center" component="section">
      <Grid item xs={10} sm={10} md={10} lg={10} xl={4} style={{ marginTop:"5rem"}}>
      <AnimatePresence>
        { !loading && 
          <Card component={motion.figure} variants={popUp} initial="hidden" animate="show">
            { CardImgJSX }
              <CardContent component={'figcaption'}>
                { CardTitleJSX }
                <div className="tags">
                  {CardTagJSX}
                  {CardYouTubeJSX}
                </div>
                { CardDescriptionJSX }
              </CardContent>
            <Divider />
            <CardActions className="actions">
              <IconButton color="primary" onClick = { () => onSkip() }>
                <Cached />
              </IconButton>
              <IconButton disabled={favourites.includes(data) ? true : false } color="secondary" onClick = { () => onSave(data?.idMeal) }>
                <Favorite />
              </IconButton>
            </CardActions>
          </Card>
        }
      </AnimatePresence>
      </Grid>
    </Grid>
  );
}