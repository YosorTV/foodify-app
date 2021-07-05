import { useDispatch } from 'react-redux';
import { dishesActions } from '../store/actions/dishes';

export const useDelete = () => {
  const { removeDish } = dishesActions;
  const dispatch = useDispatch();
  const remove = (dish) => dispatch(removeDish(dish));

  return { remove }
}