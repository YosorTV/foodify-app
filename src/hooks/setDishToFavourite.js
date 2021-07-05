import { useDispatch } from 'react-redux';
import { dishesActions } from '../store/actions/dishes';

export const useSetDishToFavourite = () => {
  const { setDish } = dishesActions;
  const dispatch = useDispatch();
  const save = (dish) => dispatch(setDish(dish));

  return { save }
}