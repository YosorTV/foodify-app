/* eslint-disable react-hooks/exhaustive-deps */
// Core
import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
//Components
import { ErrorNotification, MediaCard as Card } from './UI'
// Hooks
import { useFetchRandomDish } from '../hooks'
//Selectors
import { dishesSelector } from '../store/selectors'

export const Dish = () => {
const { randomDish:{ meals }, loading, error } = useSelector(dishesSelector);
const { load } = useFetchRandomDish();
const refetchData = () => load();
  useEffect(() => load(), []);
  return (
    <>
      <ErrorNotification error = { error }/>
      <Card data={meals?.[0]} onSkip={ refetchData } loading={ loading }/>
    </>
  )
}
