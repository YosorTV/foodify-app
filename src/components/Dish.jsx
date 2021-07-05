/* eslint-disable react-hooks/exhaustive-deps */
// Core
import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
//Components
import { ErrorNotification, MediaCard as Card } from './UI'
// Hooks
import { useFetchRandomDish, useSetDishToFavourite } from '../hooks'
//Selectors
import { dishesSelector } from '../store/selectors'

export const Dish = () => {
const { randomDish:{ meals }, loading, error, favourites } = useSelector(dishesSelector);
const { load } = useFetchRandomDish();
const { save } = useSetDishToFavourite();
const refetchData = () => load();
const saveDish = (dishId) => {
  const dish = meals?.filter(({ idMeal }) => idMeal === dishId);
    if (favourites.includes(...dish)) return
      save(...dish);
      localStorage.setItem('favDishes', JSON.stringify(favourites));
    };
  useEffect(() => load(), []); 
  return (
    <>
      <ErrorNotification error = { error } />
      <Card data={meals?.[0]} onSkip={ refetchData } onSave={ saveDish } loading={ loading } />
    </>
  )
};