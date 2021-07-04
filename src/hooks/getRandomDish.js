import { useDispatch } from 'react-redux';
import { dishesActions } from '../store/actions/dishes';

export const useFetchRandomDish = () => {
  const { getRandomDish } = dishesActions;
  const dispatch = useDispatch();
  const load = () => dispatch(getRandomDish());

  return { load }
}