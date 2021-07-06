import { useDispatch } from 'react-redux';
import { dishesActions } from '../store/actions/dishes';

export const useAddDish = () => {
  const { addDish } = dishesActions;
  const dispatch = useDispatch();
  const add = (dish) => dispatch(addDish(dish));

  return { add }
}