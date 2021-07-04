import React from 'react';
import { Skeleton } from '@material-ui/lab';
import { CardActions, CardContent, CardMedia, Button, Typography, Grid, Chip, Box } from '@material-ui/core';
import placeholder from '../../assets/menu-item-placeholder.png';
import { DishCard as Card } from '../../styles';

export const MediaCard = ({ data, onSkip, loading }) => {
  //Card Image
  const CardImgJSX = loading
  ? <Skeleton animation="wave" variant="rect" height={200} /> 
  : <CardMedia
      component={'img'}
      image={data?.strMealThumb ? data?.strMealThumb : placeholder}
      title="Contemplative Reptile"
    />;
  // Card Title
  const CardTitleJSX = loading 
  ? <Skeleton animation="wave" height={10} width="100%" /> 
  : <Typography gutterBottom variant="h5" component="h2"> { data?.strMeal } </Typography>;
  // Card Description
  const CardDescriptionJSX = loading 
  ? <Skeleton animation="wave" height={10} width="100%" /> 
  : <Typography variant="body2" color="textSecondary" component="p">{ data?.strInstructions }</Typography>;

  return (
    <Grid container justify="center" alignContent="center">
      <Grid item xl={6} lg={10} md={10} sm={10} xs={10}>
        <Card component={'figure'}>
          { CardImgJSX }
            <CardContent component={'figcaption'}>
              { CardTitleJSX }
                <Chip variant="outlined" label={data?.strTags}/>
              { CardDescriptionJSX }
            </CardContent>
          <CardActions>
            <Button size="small" color="primary" onClick = { () => onSkip() }>
              Skip
            </Button>
            <Button size="small" color="primary">
              Save
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
    
  );
}